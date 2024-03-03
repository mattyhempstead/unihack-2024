"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MemeStored } from "@/store/store";

export default function Chat() {
  const [memesBoard, setMemesBoard] = useState<MemeStored[]>([]);

  useEffect(() => {
    async function fetchMemesAndSet() {
      const response = await fetch("/api/getMemes");
      const result = await response.json();
      console.log(result);
      if (result) {
        setMemesBoard([...result.memes]);
      }
    }
    fetchMemesAndSet();
  }, []);

  return (
    <div className="flex flex-col items-center p-10 gap-3">
      <h1 className="text-5xl font-bold">AI Meme Generator</h1>
      <p>
        Tell us about your day! We&apos;ll generate the right meme for you to
        express your complex emotions.
      </p>
      <button className="bg-blue-500 text-white rounded-lg p-2">
        <Link href="/generate">Generate a Meme</Link>
      </button>
      <div className="grid grid-cols-4 grid-flow-dense w-3/4">
        {memesBoard?.map(({ meme_id, name }, idx) => (
          <Image
            src={`/${name}.jpg`}
            key={meme_id}
            className="border"
            width="800"
            height="500"
            alt="meme imge"
          />
        ))}
      </div>
    </div>
  );
}
