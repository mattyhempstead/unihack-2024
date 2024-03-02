import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

type TMP = OpenAI.Chat.Completions.ChatCompletionCreateParams.Function[];

const memeGeneratorFunctions: OpenAI.Chat.Completions.ChatCompletionCreateParams.Function[] =
  [
    {
      name: "generate_drake_hotline_bling_meme",
      description: `
      One of the most popular memes on the Internet, this template shows Drake first leaning to the side expressing distaste for a certain thing, then in the bottom panel, expressing more like for a similar but better thing. In the top panel (text_1), Drake says "no" to something he dislikes, but in the bottom panel (text_2), Drake says "yes" to something he likes. You should use the Drake meme maker to show a similar but subtly clear comparison between two things. 

      # Example
      text_1: Use study guides
      text_2: Don't study
      `,
      parameters: {
        type: "object",
        properties: {
          text_1: {
            type: "string",
            description: "something drake says 'no' to, something he dislikes",
          },
          text_2: {
            type: "string",
            description: "something drake says 'yes' to, something he likes",
          },
        },
        required: ["text_1", "text_2"],
      },
    },
  ];

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
    functions: memeGeneratorFunctions,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
