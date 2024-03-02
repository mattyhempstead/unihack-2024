import { writeFileSync, appendFileSync, appendFile } from "fs";
import OpenAI from "openai";
import { MemeTemplate } from "@/meme-gen/schema";
import Image from "next/image";
import meme_urls from "./meme_urls.json";

const systemPrompts: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: "system",
    content: `
Meme Insight is an intelligent bot designed to provide detailed descriptions and explanations of memes, capturing their complex cultural nuances, emotional and cultural meanings, as well as their humorous aspects. For each meme, it not only explains the face-value contents and the underlying emotional and cultural significance but also delves into why the meme is humorous and how it can be used humorously in different contexts. This approach offers a comprehensive understanding of the meme's relevance, its potential for humor, and its versatility in various cultural contexts. Meme Insight tailors its explanations to the user's familiarity with internet culture, emphasizing the meme's current cultural context and the emotions it conveys. The bot maintains a respectful and neutral tone, and does not link to webpages for additional information. It does not ask for clarification or further details. The description should be less than 150 words.
    `,
  },
];

const openaiclient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const messages = [...systemPrompts];

const sampleMemeTemplate = {
  name: "smudge_the_cat",
  description: `
  The "Ouhhh Husbant, now we are Homeress" meme originates from a voiceover parody video where a pet bird, seemingly being evicted from its nest by a squirrel, vocally laments in an exaggerated manner to its "husband" about their sudden homelessness. The humor in this meme lies in the anthropomorphism of animals—in this case, attributing them with human-like concerns and speech patterns, especially the misspelling of "husband" as "husbant" and "homeless" as "homeress," which adds a layer of innocence and humor. Additionally, the over-dramatic tone used in the imagined dialogue plays on the comedic trope of overreaction to everyday problems. This meme can be used humorously in various contexts, particularly in situations involving displacement or minor inconveniences, to evoke a lighthearted response to relatable adversities.
  `,
  arguments: [
    {
      fieldName: "text_1",
      description: "text 1",
    },
  ],
  // render: ({ text_1 }: any) => (
  //   <div className="border relative">
  //     <Image src="./smudge_the_cat.jpg" />
  //     <div className="absolute left-4">{text_1}</div>
  //   </div>
  // ),
};

(async () => {
  writeFileSync(
    "meme_data.tsx",
    `export const memeTemplates: MemeTemplate[] = [\n`
  );

  for (const { url } of meme_urls) {
    messages.push({
      role: "user",
      content: url,
    });

    const response = await openaiclient.chat.completions.create({
      model: "gpt-4-0125-preview",
      stream: false,
      messages,
    });

    const newMeme = sampleMemeTemplate;

    newMeme.name =
      url.split("/").at(-1)?.replace(/-/g, "_").slice(0, 50) ?? "no_name";
    console.log(newMeme.name);
    console.log(response.choices[0].message.content);
    console.log("\n");
    newMeme.description =
      response.choices[0].message.content ?? "No description";
    const memeNameJpg = "./" + newMeme.name + ".jpg";

    // write memeTemplates to a file called meme_data.tsx
    appendFileSync("meme_data.tsx", `{\n`);
    for (const [key, value] of Object.entries(newMeme)) {
      appendFileSync(
        "meme_data.tsx",
        `${key}: ` + JSON.stringify(value, null, 2) + ",\n"
      );
    }
    appendFileSync(
      "meme_data.tsx",
      `render: ({ text_1 }) => (
<div className="border relative">
  <Image src="${memeNameJpg}" />
  <div className="absolute left-4">{text_1}</div>
</div>
),
},\n`
    );
  }

  appendFileSync("meme_data.tsx", "];\n");
})();
