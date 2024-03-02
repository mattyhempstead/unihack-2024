"use client";

import { type FunctionCallHandler } from "ai";
import { useChat } from "ai/react";

type MemeTemplates = "drake_hotline" | "distracted_boyfriend";

type GenerateMemeArgs = {
  template: MemeTemplates;
  message: string;
};

function generateMeme(args: GenerateMemeArgs) {}

export default function Chat() {
  const onFunctionCall: FunctionCallHandler = async (
    chatMessages,
    functionCall
  ) => {
    console.log("function handler!");

    if (functionCall.name === "generate_drake_hotline_bling_meme") {
      const parsedArgs = JSON.parse(functionCall.arguments ?? "");
      console.log(parsedArgs);

      // render meme
    }

    return {
      messages: chatMessages,
    };
  };

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [],
    experimental_onFunctionCall: onFunctionCall,
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
