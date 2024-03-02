import React from 'react';

export default function Options({
  options,
  handleSelect,
  alreadySelected,
}: {
  options: string[];
  handleSelect: (option: string) => void;
  alreadySelected: boolean;
}) {
  return (
    <div className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl flex gap-3 justify-center">
      {options.map((option, idx: number) => (
        <button
          key={idx}
          onClick={() => handleSelect(option)}
          disabled={alreadySelected}
          className="border border-lg rounded-lg p-2 hover:bg-gray-50"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
