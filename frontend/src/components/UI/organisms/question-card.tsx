import React from "react";
import Card from "../atoms/card";
import { QuestionType } from "../../../common/types";
import QuestionCardTitle from "../atoms/question-card-title";
import Question from "../molecules/question";
import PrimaryButton from "../atoms/primary-button";

interface QuestionCardProps {
  question: QuestionType;
  currentQuestionNumber: number;
  totalQuestions: number;
  isOptionSelected: (id: string, index: number) => boolean;
  handleOptionSelect: (id: string, index: number) => void;
  nextBtnText: string;
  prevBtnText: string;
  isQuestionAnswered: (id: string) => boolean;
  handleNext: () => void;
  handlePrevious: () => void;
}

function QuestionCard({
  question,
  currentQuestionNumber,
  totalQuestions,
  isOptionSelected,
  handleOptionSelect,
  nextBtnText,
  prevBtnText,
  isQuestionAnswered,
  handleNext,
  handlePrevious,
}: QuestionCardProps) {
  return (
    <Card>
      <QuestionCardTitle
        currentQuestionNumber={currentQuestionNumber}
        totalQuestions={totalQuestions}
        questionText={question.question}
      />
      <Question
        question={question}
        isOptionSelected={isOptionSelected}
        handleOptionSelect={handleOptionSelect}
      />
      <div className="flex items-center justify-center my-4">
        <PrimaryButton
          text={prevBtnText}
          className="text-sm mr-6 py-4 px-12 w-40"
          includeArrow={true}
          clickAction={handlePrevious}
          enabled={currentQuestionNumber !== 1}
          arrowDirection="left"
        />
        <PrimaryButton
          text={nextBtnText}
          className="text-sm py-4 px-12 w-40"
          includeArrow={true}
          clickAction={handleNext}
          enabled={isQuestionAnswered(question.id)}
          arrowDirection="right"
        />
      </div>
    </Card>
  );
}

export default QuestionCard;
