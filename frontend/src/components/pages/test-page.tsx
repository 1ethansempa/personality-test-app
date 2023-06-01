import React, { useState, useEffect } from "react";
import { QuestionType } from "../../common/types";
import axios from "axios";
import { SelectedOption } from "../../common/types";
import QuestionCard from "../UI/organisms/question-card";
import QuestionCardSkeleton from "../UI/atoms/skeletons/question-card-skeleton";

function TestPage() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [btnText, setBtnText] = useState("Next");

  const fetchQuestions = async () => {
    const questionsResponse = await axios.get(
      `http://localhost:4000/assessment/questions`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    if (questionsResponse.data) {
      console.log(questionsResponse.data);
      setQuestions(questionsResponse.data);
      setStep(1);
      setBtnText("Next");
    }

    setLoading(false);
  };

  const handleOptionSelect = (id: string, selectedIndex: number) => {
    const selectedOptionIndex = selectedOptions.findIndex(
      (selectedOption) => selectedOption.id === id
    );

    if (selectedOptionIndex === -1) {
      const newSelectedOptions = [
        ...selectedOptions,
        {
          id,
          selectedIndex,
        },
      ];

      setSelectedOptions(newSelectedOptions);
    } else {
      setSelectedOptions((prevSelectedOptions) => {
        const updatedSelectedOptions = [...prevSelectedOptions];

        updatedSelectedOptions[selectedOptionIndex].selectedIndex =
          selectedIndex;

        return updatedSelectedOptions;
      });
    }
  };

  const isOptionSelected = (id: string, selectedIndex: number) => {
    const selectedOption = selectedOptions.find((option) => option.id === id);

    if (selectedOption) {
      if (selectedOption.selectedIndex !== selectedIndex) {
        return false;
      } else {
        return true;
      }
    }

    return false;
  };

  const isQuestionAnswered = (id: string) => {
    const selectedOption = selectedOptions.find((option) => option.id === id);

    if (selectedOption) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-center mt-16">
        {loading ? (
          <QuestionCardSkeleton />
        ) : (
          <QuestionCard
            question={questions[step - 1]}
            currentQuestionNumber={step}
            totalQuestions={questions.length}
            isOptionSelected={isOptionSelected}
            handleOptionSelect={handleOptionSelect}
            btnText={btnText}
            isQuestionAnswered={isQuestionAnswered}
          />
        )}
      </div>
    </div>
  );
}

export default TestPage;
