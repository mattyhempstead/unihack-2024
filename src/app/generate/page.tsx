'use client';

import React, { useState } from 'react';
import { type FunctionCallHandler } from 'ai';
import { useChat } from 'ai/react';

import { getFunctionName } from '@/meme-gen/schema';
import { memeTemplates } from '@/meme-gen/memes';
import Options from '@/components/Options';

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
    console.log(messages);

    memeTemplates.forEach((template) => {
      if (functionCall.name === getFunctionName(template.name)) {
        const parsedArgs = JSON.parse(functionCall.arguments ?? '');
        console.log(parsedArgs);

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
    initialMessages: [],
    experimental_onFunctionCall: onFunctionCall,
  });

  const memeRenderer = memeTemplates.find(
    (template) => template.name === state?.name,
  )?.render;

  const memeJsx =
    memeRenderer && state?.props ? memeRenderer(state.props) : null;

  const [moodSelected, setMoodSelected] = useState(false);
  const handleSelectMood = (option: string) => {
    setMoodSelected(true);
    append({
      role: 'system',
      content: `
        The assistant asked the question: "How is your day going?".
        The user responded: "${option}"
      `,
    });
  };

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <pre>{JSON.stringify(state, null, 2)}</pre>
      {memeJsx}

      <div className="whitespace-pre-wrap">Hello, how is your day?</div>
      <Options
        options={moods}
        handleSelect={handleSelectMood}
        alreadySelected={moodSelected}
      />
      {messages
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .map((m) => (
          <div key={m.id} className="whitespace-pre-wrap">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </div>
        ))}
      {moodSelected && (
        <form onSubmit={handleSubmit}>
          <input
            className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      )}
    </div>
  );
}
