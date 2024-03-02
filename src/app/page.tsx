"use client";

import React from "react";
import { type FunctionCallHandler } from "ai";
import { useChat } from "ai/react";

import { getFunctionName } from "@/meme-gen/schema";
import { memeTemplates } from "@/meme-gen/memes";

type MemeGenState = {
  name: string;
  props: {
    [fieldName: string]: string;
  };
} | null;

export default function Chat() {
  const [state, setState] = React.useState<MemeGenState>(null);

  const onFunctionCall: FunctionCallHandler = async (
    chatMessages,
    functionCall
  ) => {
    console.log("function handler!");

    memeTemplates.forEach((template) => {
      if (functionCall.name === getFunctionName(template.name)) {
        const parsedArgs = JSON.parse(functionCall.arguments ?? "");
        console.log(parsedArgs);

        setState({
          name: template.name,
          props: parsedArgs,
        });
      }
    });

    return {
      messages: chatMessages,
    };
  };

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [],
    experimental_onFunctionCall: onFunctionCall,
  });

  const memeRenderer = memeTemplates.find(
    (template) => template.name === state?.name
  )?.render;

  const memeJsx =
    memeRenderer && state?.props ? memeRenderer(state.props) : null;

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <pre>{JSON.stringify(state, null, 2)}</pre>

      {memeJsx}

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
