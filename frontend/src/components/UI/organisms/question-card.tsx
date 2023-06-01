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
  btnText: string;
}

function QuestionCard({
  question,
  currentQuestionNumber,
  totalQuestions,
  isOptionSelected,
  handleOptionSelect,
  btnText,
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
          text={btnText}
          className="text-sm py-4 px-12"
          includeArrow={true}
          clickAction={() => {}}
        />
      </div>
    </Card>
  );
}

export default QuestionCard;
