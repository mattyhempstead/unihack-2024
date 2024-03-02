import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

import { createFunctionDesc } from "@/meme-gen/schema";
import { memeTemplates } from "@/meme-gen/memes";

const functions = memeTemplates.map((template) => createFunctionDesc(template));

// console.log("functions", functions);

const systemPrompts: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: "system",
    content: `
      You're a meme generator assistant. Your task is to listen to user's complaints and generate a meme. You can start off by asking "how is your day going"?
    `,
  },
];

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages: clientMessages } = await req.json();

  const messages = [...systemPrompts, ...clientMessages];

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4-0125-preview",
    stream: true,
    messages,
    functions,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
