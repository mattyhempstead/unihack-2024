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
    <div className="max-w-screen-md mx-auto pt-8">
      <section className="mb-8">
        <h1 className="text-8xl font-bold text-white">Meme MACHINE</h1>
        <p className="text-white">
          Tell us about your day! We&apos;ll generate the right meme for you to
          express your complex emotions.
        </p>
        <Link
          className="block text-center mt-4 text-white bg-purple-950 p-8 text-2xl rounded-lg shadow-md w-full hover:bg-purple-400"
          href="/generate"
        >
          Generate a Meme
        </Link>
      </section>
      <div className="grid grid-cols-4 bg-white/50">
        {memesBoard?.map(({ meme_id, name }) => (
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
