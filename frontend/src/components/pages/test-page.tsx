import React, { useState, useEffect } from "react";
import { QuestionType } from "../../common/types";
import { SelectedOption } from "../../common/types";
import QuestionCard from "../UI/organisms/question-card";
import QuestionCardSkeleton from "../UI/atoms/skeletons/question-card-skeleton";
import { useAppDispatch } from "../../store";
import { updateSelectedOptions } from "../../slices/question";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";
import ErrorBlock from "../UI/molecules/error-block";

function TestPage() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const [nextBtnText, setNextBtnText] = useState("Next");
  const [fetchError, setFetchError] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  /**
   * Handles fetching of questions
   */
  const fetchQuestions = async () => {
    setLoading(true);

    try {
      const questionsResponse = await api.get(`/assessment/questions`);

      if (questionsResponse.data) {
        setQuestions(questionsResponse.data);
        setStep(1);
        setNextBtnText("Next");
        setFetchError(false);
      }
    } catch (error: any) {
      console.log(error);
      setFetchError(true);
    }

    setLoading(false);
  };

  /**
   * The `handleOptionSelect` function handles the selection of an option.
   *
   * @param {string} questionId The ID of the question.
   * @param {number} questionIndex The index of the question.
   */
  const handleOptionSelect = (
    questionId: string,
    questionIndex: number
  ): void => {
    const selectedOptionIndex = selectedOptions.findIndex(
      (selectedOption) => selectedOption.id === questionId
    );

    if (selectedOptionIndex === -1) {
      const newSelectedOptions = [
        ...selectedOptions,
        {
          id: questionId,
          selectedIndex: questionIndex,
        },
      ];

      setSelectedOptions(newSelectedOptions);
    } else {
      setSelectedOptions((prevSelectedOptions) => {
        const updatedSelectedOptions = [...prevSelectedOptions];

        updatedSelectedOptions[selectedOptionIndex].selectedIndex =
          questionIndex;

        return updatedSelectedOptions;
      });
    }
  };

  /**
   * Checks if the given option is selected.
   *
   * @param {string} questionId The ID of the question.
   * @param {number} questionIndex The index of the question.
   * @returns a boolean.
   */
  const isOptionSelected = (questionId: string, questionIndex: number) => {
    const selectedOption = selectedOptions.find(
      (option) => option.id === questionId
    );

    if (selectedOption) {
      if (selectedOption.selectedIndex !== questionIndex) {
        return false;
      } else {
        return true;
      }
    }

    return false;
  };

  /**
   * Checks if question is answered.
   * @param questionId  The ID of the question.
   * @returns a boolean.
   */
  const isQuestionAnswered = (questionId: string) => {
    const selectedOption = selectedOptions.find(
      (option) => option.id === questionId
    );

    if (selectedOption) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Function to increase the step / redirect to results page
   */
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

  /**
   * Function to decrease the step
   */
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
      <div className="flex items-center justify-center lg:mt-16 md:mt-20 mt-12">
        {loading ? (
          <QuestionCardSkeleton />
        ) : !fetchError ? (
          <QuestionCard
            question={questions[step - 1]}
            currentQuestionNumber={step}
            totalQuestions={questions.length}
            isOptionSelected={isOptionSelected}
            handleOptionSelect={handleOptionSelect}
            nextBtnText={nextBtnText}
            prevBtnText={`Previous`}
            isQuestionAnswered={isQuestionAnswered}
            handleNext={increaseStep}
            handlePrevious={decreaseStep}
          />
        ) : (
          <ErrorBlock error="Server is offline / under maintenance." />
        )}
      </div>
    </div>
  );
}

export default TestPage;
