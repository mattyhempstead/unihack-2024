'use client';

import React, { useState } from 'react';
import { type FunctionCallHandler } from 'ai';
import { useChat } from 'ai/react';

import { getFunctionName } from '@/meme-gen/schema';
import { memeTemplates } from '@/meme-gen/memes';
import Options from '@/components/Options';
import ChatMessage from '@/components/ChatMessage';

type MemeGenState = {
  meme_id: string;
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

    const memeTemplate = memeTemplates.find(
      (template) => getFunctionName(template.name) === functionCall.name,
    );

    const new_meme_id =
      'id' + Math.random().toString(16).slice(2) + '_' + state?.name;

    if (memeTemplate) {
      const parsedArgs = JSON.parse(functionCall.arguments ?? '');
      console.log(parsedArgs);
      console.log(chatMessages);

      setState({
        meme_id: new_meme_id,
        name: memeTemplate.name,
        props: parsedArgs,
      });

      // send meme back to server
      fetch('/api/storeMeme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          meme_id: new_meme_id,
          name: memeTemplate.name,
          props: parsedArgs,
        }),
      });
    }

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
