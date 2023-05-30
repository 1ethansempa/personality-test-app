import React, { useState, useEffect } from "react";
import { Question } from "../../common/types";
import axios from "axios";

function TestPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="p-8">
      <div className="flex items-center justify-center">
        <div className="bg-white rounded-lg w-32">
          {loading ? "Loading..." : `${step} / ${questions.length}`}
        </div>
      </div>
    </div>
  );
}

export default TestPage;
