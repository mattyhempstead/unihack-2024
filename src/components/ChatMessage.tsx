import React from 'react';
import ChatAvatar from './ChatAvatar';

export default function ChatMessage({
  role,
  message,
}: {
  role: string;
  message: string;
}) {
  return (
    <div className="flex gap-2">
      <ChatAvatar role={role} />
      <div>
        <h3 className="font-bold">{role === 'user' ? 'You' : 'AI'}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
}
