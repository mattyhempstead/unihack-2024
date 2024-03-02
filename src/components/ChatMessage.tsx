import React from 'react';
import { memeTemplates } from '@/meme-gen/memes';

import ChatAvatar from './ChatAvatar';

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
  const memeRenderer = memeTemplates.find(
    (template) => template.name === state?.name,
  )?.render;

  const memeJsx =
    memeRenderer && state?.props ? memeRenderer(state.props) : null;
  return (
    <div className="flex gap-2">
      <ChatAvatar role={role} />
      <div>
        <h3 className="font-bold">{role === 'user' ? 'You' : 'AI'}</h3>
        {!message && memeJsx ? (
          <>{memeJsx}</>
        ) : (
          <p className="break-words">{message}</p>
        )}
      </div>
    </div>
  );
}
