import React from 'react'
import QuestionOption from '../atoms/question-option'
import { QuestionType } from '../../../common/types'

interface QuestionProps {
    question:QuestionType;
    isOptionSelected: (id:string, index:number)=>boolean;
    handleOptionSelect: (id: string, index: number) => void;
}

function Question({question, isOptionSelected, handleOptionSelect}: QuestionProps) {
  return (
    <ul>
    {question.options.map((option, index) => {
      return (
        <QuestionOption
          isSelected={isOptionSelected(question.id, index)}
          text={option.text}
          questionId={question.id}
          index={index}
          handleOptionSelect={() =>
            handleOptionSelect(question.id, index)
          }
        />
      );
    })}
  </ul>
  )
}

export default Question