import React from 'react'

interface QuestionCardTitleProps {
    questionText: string;
    currentQuestionNumber: number;
    totalQuestions: number;
}

function QuestionCardTitle({questionText, currentQuestionNumber, totalQuestions}: QuestionCardTitleProps) {
  return (
   <>
    <p className="text-gray-600">{`Question ${currentQuestionNumber} / ${totalQuestions}`}</p>
            <p className="text-green-black font-bold text-xl">
              {questionText}
            </p>
            <small className="text-gray-400 italic">
              All questions are required
            </small>
   </>
  )
}

export default QuestionCardTitle