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
    <div className="flex gap-3 justify-center">
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
