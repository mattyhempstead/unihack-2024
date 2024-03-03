"use client";

import React, { useState } from "react";
import { type FunctionCallHandler } from "ai";
import { useChat, type Message } from "ai/react";
import { clsx } from "clsx";
import { nanoid } from "nanoid";
import { LuTwitter } from "react-icons/lu";
import { MdDownload, MdLink } from "react-icons/md";

import { getFunctionName } from "@/meme-gen/schema";
import { memeTemplates } from "@/meme-gen/memes";
import Options from "@/components/Options";
import ChatAvatar from "@/components/ChatAvatar";
import ChatMessage from "@/components/ChatMessage";
import { MemeStored } from "@/store/store";

type EmojiOptionData = {
  label: string;
  emoji: string;
  description: string;
};

const emojiOptions: EmojiOptionData[] = [
  { label: "Happy!", emoji: "😀", description: "happy" },
  { label: "Sad", emoji: "😢", description: "sad" },
  { label: "Depressed", emoji: "😩", description: "depressed" },
  { label: "Love", emoji: "🥰", description: "love" },
  { label: "Horrified", emoji: "😱", description: "horrified" },
  { label: "Angry", emoji: "😡", description: "angry" },
];

// todo: this should be just one state
type QuizState = "mood" | "freeform" | "loading" | "showMeme";
type MemeState = MemeStored;

export default function Generate() {
  const [meme, setMeme] = React.useState<MemeState | null>(null);
  const [quizState, setQuizState] = React.useState<QuizState>("mood");

  const onFunctionCall: FunctionCallHandler = async (
    chatMessages,
    functionCall
  ) => {
    const memeTemplate = memeTemplates.find(
      (template) => getFunctionName(template.name) === functionCall.name
    );

    const newMemeId = nanoid();

    if (memeTemplate) {
      const parsedArgs = JSON.parse(functionCall.arguments ?? "");

      setQuizState("showMeme");
      setMeme({
        meme_id: newMemeId,
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
          meme_id: newMemeId,
          name: memeTemplate.name,
          props: parsedArgs,
        }),
      });
    }

    return {
      messages: chatMessages,
    };
  };

  const { messages, setMessages, reload } = useChat({
    experimental_onFunctionCall: onFunctionCall,
  });

  const onEmojiSelect = (description: string) => {
    setMessages([
      ...messages,
      {
        id: "system1",
        role: "system",
        content: `The user was asked to pick an emoji that best represents their mood. They selected a ${description} emoji`,
      },
    ]);
    setQuizState("freeform");
  };

  const onGoBackToMoodSelect = () => {
    setQuizState("mood");
  };

  const onFreeformSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("onFreeformSubmit!!!");

    e.preventDefault();

    // i'm pretty sure there's a type safe way here hehe
    const answer = (e.target as any).freeform.value ?? "";

    setMessages([
      ...messages,
      {
        id: "system2",
        role: "system",
        content: `The user was asked why they selected that particular emoji. They responded: ${answer}`,
      },
      {
        id: "system3",
        role: "system",
        content:
          "From the previously given information, your task is to now generate a meme",
      },
    ]);
    reload();

    setQuizState("loading");
  };

  if (quizState === "mood") {
    return (
      <div className="flex flex-col items-center gap-y-6">
        <h1 className="text-2xl text-white">
          1. Pick an emoji that represents your mood
        </h1>
        <div className="grid grid-cols-2 gap-2 w-full">
          {emojiOptions.map(({ label, emoji, description }, i) => (
            <EmojiOption
              onClick={() => onEmojiSelect(description)}
              label={label}
              emoji={emoji}
              key={i}
            />
          ))}
        </div>
      </div>
    );
  }

  if (quizState === "freeform") {
    return (
      <form onSubmit={onFreeformSubmit} className="flex flex-col gap-y-4">
        <h1 className="text-2xl text-white text-center">
          2. Why do you feel like that? Tell me more!
        </h1>
        <textarea
          id="freeform"
          className="bg-purple-950 outline-none focus:ring focus:ring-purple-100/50 w-full text-white rounded-md p-2 text-lg min-h-44"
        />
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={onGoBackToMoodSelect}
            className="p-4 border rounded-md w-full text-white text-lg hover:bg-white/30"
          >
            Back
          </button>
          <button
            type="submit"
            className="p-4 border rounded-md w-full text-white text-lg hover:bg-white/30"
          >
            Make my meme!
          </button>
        </div>
      </form>
    );
  }

  if (quizState === "loading") {
    return (
      <div>
        <h1 className="text-2xl text-white text-center">
          Okay! Creating a meme for you... Just a sec
        </h1>
      </div>
    );
  }

  if (quizState === "showMeme" && meme) {
    const memeRenderer = memeTemplates.find(
      (template) => template.name === meme.name
    )?.render;
    const memeComp = memeRenderer ? memeRenderer(meme.props) : null;

    return (
      <div className="flex flex-col gap-y-4">
        <h1 className="text-2xl text-white text-center">
          Here is your meme! Hope u like it xD
        </h1>
        <div className="text-white text-xl">{memeComp}</div>
        <div className="bg-white rounded-xl p-8 flex gap-x-6 items-center justify-center">
          <span className="text-2xl text-purple-600">
            <LuTwitter />
          </span>
          <span className="text-2xl text-purple-600">
            <MdDownload />
          </span>
          <span className="text-2xl text-purple-600">
            <MdLink />
          </span>
        </div>
      </div>
    );
  }
}

type EmojiOptionProps = {
  emoji: React.ReactNode;
  label: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"button">;

function EmojiOption(props: EmojiOptionProps) {
  const { label, emoji, className, ...rest } = props;

  return (
    <button
      className={clsx(
        "flex flex-col justify-center gap-y-4 p-12 rounded-md bg-purple-950 hover:bg-purple-400",
        className
      )}
      {...rest}
    >
      <div className="text-6xl">{emoji}</div>
      <div className="font-medium text-white">{label}</div>
    </button>
  );
}
