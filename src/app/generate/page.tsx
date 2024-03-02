'use client';

import React, { useState } from 'react';
import { type FunctionCallHandler } from 'ai';
import { useChat } from 'ai/react';

import { getFunctionName } from '@/meme-gen/schema';
import { memeTemplates } from '@/meme-gen/memes';
import Options from '@/components/Options';
import ChatAvatar from '@/components/ChatAvatar';
import ChatMessage from '@/components/ChatMessage';

type MemeGenState = {
  name: string;
  props: {
    [fieldName: string]: string;
  };
} | null;

const moods = ['Ecstatic!!!', 'Happy :)', 'Sad :(', 'Depressed ;.;'];

export default function Generate() {
  const [state, setState] = React.useState<MemeGenState>(null);

  const onFunctionCall: FunctionCallHandler = async (
    chatMessages,
    functionCall,
  ) => {
    console.log('function handler!');

    memeTemplates.forEach((template) => {
      if (functionCall.name === getFunctionName(template.name)) {
        const parsedArgs = JSON.parse(functionCall.arguments ?? '');
        console.log(parsedArgs);
        console.log(chatMessages);

        setState({
          name: template.name,
          props: parsedArgs,
        });
      }
    });

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
      role: 'user',
      content: `I'm ${option}`,
    });
  };

  return (
    <div className="flex flex-col max-w-md justify-between py-24 mx-auto stretch">
      <div>
        <div className="flex flex-col gap-6">
          <ChatMessage
            role="assistant"
            message="Hello, how is your day going?"
          />
          {messages
            .filter((m) => m.role === 'user' || m.role === 'assistant')
            .map((m, idx) => (
              <ChatMessage
                role={m.role}
                key={idx}
                message={m.content}
                state={state}
              />
            ))}
        </div>
      </div>
      {moodSelected ? (
        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-4 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      ) : (
        <Options
          options={moods}
          handleSelect={handleSelectMood}
          alreadySelected={moodSelected}
        />
      )}
    </div>
  );
}
