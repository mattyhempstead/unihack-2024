const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const meme_urls = require("./meme_urls.json");

const downloadImage = async (url, filepath) => {
  const response = await axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(filepath);
    response.data.pipe(writer);
    let error = null;
    writer.on("error", (err) => {
      error = err;
      writer.close();
      reject(err);
    });
    writer.on("close", () => {
      if (!error) {
        resolve(true);
      }
      // No need to explicitly call reject here, as it's called on 'error'.
    });
  });
};

const failed_urls = [];

const scrapeMemeImage = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    // Find the first <img> tag within an <article> tag
    const firstImgInArticle = $("div#content img").first();

    // If you need the src attribute of this img tag
    const imageUrl = firstImgInArticle.attr("src");

    if (imageUrl) {
      const filename =
        url.split("/").at(-1)?.replace(/-/g, "_").slice(0, 50) + ".jpg";
      const publicDir = path.resolve(process.cwd(), "public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
      }
      const filepath = path.join(publicDir, filename);
      await downloadImage(imageUrl, filepath);
      console.log(`Downloaded ${filename} to ${publicDir}`);
    } else {
      console.log(`Image URL not found for ${url}`);
    }
  } catch (error) {
    console.error(`An error occurred while processing ${url} `, error.message);
    failed_urls.push(url);
    // console.log(error);
  }
};

(async () => {
  await Promise.all(
    meme_urls.map(async ({ url }) => {
      await scrapeMemeImage(url);
    })
  );

  while (failed_urls.length > 0) {
    for (let i = failed_urls.length - 1; i >= 0; i--) {
      await scrapeMemeImage(failed_urls[i]);
      failed_urls.splice(i, 1);
    }
  }
})();
