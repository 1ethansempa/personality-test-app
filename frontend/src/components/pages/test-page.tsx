import React, { useState, useEffect } from "react";
import { Question } from "../../common/types";
import axios from "axios";
import PrimaryButton from "../UI/atoms/primary-button";
import Card from "../UI/atoms/card";
import QuestionOption from "../UI/atoms/question-option";
import { SelectedOption } from "../../common/types";

function TestPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);

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

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-center mt-16">
        {loading ? (
          <>Loading ....</>
        ) : (
          <Card>
            <p className="text-gray-600">{`Question ${step} / ${questions.length}`}</p>
            <p className="text-green-black font-bold text-xl">
              {questions[0].question}
            </p>
            <small className="text-gray-400 italic">
              All questions are required
            </small>

            <ul>
              {questions[0].options.map((option, index) => {
                return (
                  <QuestionOption
                    isSelected={isOptionSelected(questions[0].id, index)}
                    text={option.text}
                    questionId={questions[0].id}
                    index={index}
                    handleOptionSelect={() =>
                      handleOptionSelect(questions[0].id, index)
                    }
                  />
                );
              })}
            </ul>
            <div className="flex items-center justify-center my-4">
              <PrimaryButton
                text="Next"
                className="text-sm py-4 px-12"
                includeArrow={true}
                clickAction={() => {}}
              />
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

export default TestPage;
