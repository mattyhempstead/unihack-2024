import React, { useRef } from 'react';
import { memeTemplates } from '@/meme-gen/memes';

import ChatAvatar from './ChatAvatar';
import html2canvas from 'html2canvas';

type MemeGenState = {
  name: string;
  props: {
    [fieldName: string]: string;
  };
} | null;

export default function ChatMessage({
  role,
  message,
  state,
}: {
  role: string;
  message: string;
  state?: MemeGenState;
}) {
  const memeRef = useRef(null);
  const memeRenderer = memeTemplates.find(
    (template) => template.name === state?.name,
  )?.render;

  const memeJsx =
    memeRenderer && state?.props ? memeRenderer(state.props) : null;

  const handleDownloadMeme = async () => {
    if (!memeRef.current) {
      return;
    }
    const canvas = await html2canvas(memeRef.current);
    const image = canvas.toDataURL('image/png');

    const fakeLink = window.document.createElement('a');
    fakeLink.download = 'ai-generated-meme.png';

    fakeLink.href = image;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
  };
  return (
    <div className="flex gap-2">
      <ChatAvatar role={role} />
      <div>
        <h3 className="font-bold">{role === 'user' ? 'You' : 'AI'}</h3>
        {!message && memeJsx ? (
          <>
            <div ref={memeRef}>{memeJsx}</div>
            <button
              className="border border-lg rounded-lg p-2 hover:bg-gray-50"
              onClick={handleDownloadMeme}
            >
              Download
            </button>
          </>
        ) : (
          <p className="break-words">{message}</p>
        )}
      </div>
    </div>
  );
}
