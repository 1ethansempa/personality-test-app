import React from "react";

interface QuestionOptionProps {
  text: string;
  isSelected: boolean;
  handleOptionSelect: (id: string, index: number) => void;
  index: number;
  questionId: string;
}

function QuestionOption({
  text,
  isSelected,
  handleOptionSelect,
  index,
  questionId,
}: QuestionOptionProps) {
  /**
   * Function to calculate a letter based on the provided index
   * Calculate the letter by converting the index to the corresponding ASCII character code
   * @param index question option index
   * @returns a string of the letter e.g A
   */
  const calculateLetter = (index: number) => {
    const letter = String.fromCharCode(65 + index);

    return letter;
  };

  return (
    <li
      className={`flex py-4 px-4 border border-[#dfe5ec] rounded-md my-2 text-sm cursor-pointer ${
        isSelected ? "border-secondary font-bold" : "border-[#dfe5ec]"
      }`}
      onClick={() => handleOptionSelect(questionId, index)}
      data-cy="question-option"
    >
      <span
        className={`flex items-center mr-2  text-white h-6 p-2 mb-2 uppercase shadow ${
          isSelected ? "bg-secondary" : "bg-gray-500"
        }`}
      >
        {calculateLetter(index)}
      </span>
      {text}
    </li>
  );
}

export default QuestionOption;
