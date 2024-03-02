"use client";

import { useChat } from "ai/react";

type MemeTemplates = "drake_hotline" | "distracted_boyfriend";

type GenerateMemeArgs = {
  template: MemeTemplates;
  message: string;
};

function generateMeme(args: GenerateMemeArgs) {}

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: "SYSTEM",
        role: "system",
        content:
          "You're an annoying assistant, your job is to respond using as many meows as possible",
      },
      {
        id: "SYSTEM_2",
        role: "system",
        content:
          "You can call a function called generateMeme, it creates memes! If you want to use this function, you need to provide the following arguments: template (enum), message (string). You will need to respond in a JSON format",
      },
    ],
  });

  /**
   *
   * [
   * { role: "system", message: "you're a meme generator assistant, your job is to listen to your user's rant and come up with memes"},
   *  {role: "user", message: "user's input"},
   * {role: "assistant", message: "assistant's resopnse"},
   * {role: "function"}
   * ]
   *
   */

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((m) => (
        <div key={m.id} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
