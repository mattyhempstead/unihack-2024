'use client';

import { useChat } from 'ai/react';
import Link from 'next/link';
import Image from 'next/image';

type MemeTemplates = 'drake_hotline' | 'distracted_boyfriend';

type GenerateMemeArgs = {
  template: MemeTemplates;
  message: string;
};

function generateMeme(args: GenerateMemeArgs) { }

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: 'SYSTEM',
        role: 'system',
        content:
          "You're an annoying assistant, your job is to respond using as many meows as possible",
      },
      {
        id: 'SYSTEM_2',
        role: 'system',
        content:
          'You can call a function called generateMeme, it creates memes! If you want to use this function, you need to provide the following arguments: template (enum), message (string). You will need to respond in a JSON format',
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
  const IMAGES = [
    '/drake-hotline-bling.jpg',
    '/two-buttons.jpg',
    '/two-buttons.jpg',

    '/drake-hotline-bling.jpg',
    '/two-buttons.jpg',
    '/drake-hotline-bling.jpg',
  ];

  return (
    <div className="flex flex-col items-center p-10 gap-3">
      <h1 className="text-5xl font-bold">AI Meme Generator</h1>
      <p className="">
        Tell us about your day! We'll generate the right meme for you to express
        your complex emotions.
      </p>
      <button className="bg-blue-500 text-white rounded-lg p-2">
        <Link href="/generate">Generate a Meme</Link>
      </button>
      <div className="grid grid-cols-4 grid-flow-dense w-3/4">
        {IMAGES.map((src) => (
          <img src={src} className="border" />
        ))}
      </div>
    </div>
  );
}
