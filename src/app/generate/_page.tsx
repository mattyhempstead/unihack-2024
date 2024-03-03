"use client";

import React, { useState } from "react";
import { type FunctionCallHandler } from "ai";
import { useChat } from "ai/react";
import { clsx } from "clsx";

import { getFunctionName } from "@/meme-gen/schema";
import { memeTemplates } from "@/meme-gen/memes";
import Options from "@/components/Options";
import ChatAvatar from "@/components/ChatAvatar";
import ChatMessage from "@/components/ChatMessage";
import { MemeStored } from "@/store/store";

const moods = ["Ecstatic!!!", "Happy :)", "Sad :(", "Depressed ;.;"];

export default function Generate() {
  const [state, setState] = React.useState<MemeStored | null>(null);

  const onFunctionCall: FunctionCallHandler = async (
    chatMessages,
    functionCall
  ) => {
    console.log("function handler!");

    const memeTemplate = memeTemplates.find(
      (template) => getFunctionName(template.name) === functionCall.name
    );

    const new_meme_id =
      "id" + Math.random().toString(16).slice(2) + "_" + memeTemplate?.name;

    if (memeTemplate) {
      const parsedArgs = JSON.parse(functionCall.arguments ?? "");
      console.log(parsedArgs);
      console.log(chatMessages);

      setState({
        meme_id: new_meme_id,
        name: memeTemplate.name,
        props: parsedArgs,
      });

      // send meme back to server
      fetch("/api/storeMeme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          meme_id: new_meme_id,
          name: memeTemplate.name,
          props: parsedArgs,
        }),
      });
    }

    return {
      messages: chatMessages,
    };
  };

  const { messages, input, handleInputChange, handleSubmit, append } = useChat({
    experimental_onFunctionCall: onFunctionCall,
  });

  const [moodSelected, setMoodSelected] = useState(false);
  const handleSelectMood = (option: string) => {
    setMoodSelected(true);
    append({
      role: "user",
      content: `I'm ${option}`,
    });
  };

  return (
    <div className="max-w-screen-sm mx-auto grid grid-cols-2 gap-2">
      <Option className="border-red-500 hover:bg-red-100">Happy</Option>
      <Option>Happy</Option>
      <Option>Happy</Option>
      <Option>Happy</Option>
      <Option>Happy</Option>
      <Option>Happy</Option>
    </div>
  );

  // return (
  //   <div className="flex flex-col max-w-md justify-between py-24 mx-auto stretch">
  //     <div>
  //       <div className="flex flex-col gap-6">
  //         <ChatMessage
  //           role="assistant"
  //           message="Hello, how is your day going?"
  //         />
  //         {messages
  //           .filter((m) => m.role === "user" || m.role === "assistant")
  //           .map((m, idx) => (
  //             <ChatMessage
  //               role={m.role}
  //               key={idx}
  //               message={m.content}
  //               state={state}
  //             />
  //           ))}
  //       </div>
  //     </div>
  //     {moodSelected ? (
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           className="fixed bottom-0 w-full max-w-md p-4 mb-8 border border-gray-300 rounded shadow-xl"
  //           value={input}
  //           placeholder="Say something..."
  //           onChange={handleInputChange}
  //         />
  //       </form>
  //     ) : (
  //       <Options
  //         options={moods}
  //         handleSelect={handleSelectMood}
  //         alreadySelected={moodSelected}
  //       />
  //     )}
  //   </div>
  // );
}

type OptionProps = {
  children: React.ReactNode;
  className?: string;
};

function Option(props: OptionProps) {
  const { children, className } = props;

  return (
    <button
      className={clsx(
        "flex flex-col justify-center gap-y-4 p-12 border rounded-md",
        className
      )}
    >
      <div className="text-6xl">😀</div>
      <div className="font-medium">Happy!</div>
    </button>
  );
}
