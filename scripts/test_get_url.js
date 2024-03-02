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

(async () => {
  const url = "https://knowyourmeme.com/memes/terrified-noot-noot";
  const response = await axios.get(url);

  const $ = cheerio.load(response.data);

  const firstImgInArticle = $("div#content img").first();

  // If you need the src attribute of this img tag
  const imageUrl = firstImgInArticle.attr("src");

  console.log(imageUrl);

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
})();
