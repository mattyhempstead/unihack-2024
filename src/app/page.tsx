'use client';

import Link from 'next/link';

export default function Chat() {
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
      <p>
        Tell us about your day! We'll generate the right meme for you to express
        your complex emotions.
      </p>
      <button className="bg-blue-500 text-white rounded-lg p-2">
        <Link href="/generate">Generate a Meme</Link>
      </button>
      <div className="grid grid-cols-4 grid-flow-dense w-3/4">
        {IMAGES.map((src, idx) => (
          <img src={src} key={idx} className="border" />
        ))}
      </div>
    </div>
  );
}
