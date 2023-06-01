import React, { useState, useEffect } from "react";
import { QuestionType } from "../../common/types";
import axios from "axios";
import { SelectedOption } from "../../common/types";
import QuestionCard from "../UI/organisms/question-card";
import QuestionCardSkeleton from "../UI/atoms/skeletons/question-card-skeleton";
import { useAppDispatch } from "../../store";
import { updateSelectedOptions } from "../../slices/question";
import { useNavigate } from "react-router-dom";

function TestPage() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [nextBtnText, setNextBtnText] = useState("Next");
  const [prevBtnText, setPrevBtnText] = useState("Previous");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    setLoading(true);

    try {
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
        setNextBtnText("Next");
      }
    } catch (error: any) {}

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

  const increaseStep = () => {
    if (step === questions.length) {
      dispatch(updateSelectedOptions(selectedOptions));

      navigate("/results", { replace: true });
    } else {
      if (step < questions.length - 1) {
        setStep(step + 1);
        setNextBtnText("Next");
      } else {
        setStep(questions.length);
        setNextBtnText("Get Results");
      }
    }
  };

  const decreaseStep = () => {
    if (step === 1) {
      setStep(1);
    } else {
      setStep(step - 1);
      setNextBtnText("Next");
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
            nextBtnText={nextBtnText}
            prevBtnText={prevBtnText}
            isQuestionAnswered={isQuestionAnswered}
            handleNext={increaseStep}
            handlePrevious={decreaseStep}
          />
        )}
      </div>
    </div>
  );
}

export default TestPage;
