import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

export default function ChatAvatar({ role }: { role: string }) {
  return (
    <Avatar.Root className="bg-blackA1 inline-flex h-[45px] min-w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <Avatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={role === 'assistant' ? '/ai-doge.png' : '/user-icon.jpg'}
        alt={role}
      />
    </Avatar.Root>
  );
}
