import React, { useState, useEffect, useCallback } from "react";
import { questionsSelector } from "../../slices/question";
import { useSelector } from "react-redux";
import axios from "axios";

function ResultsPage() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");

  const { selectedOptions } = useSelector(questionsSelector);

  const getResults = useCallback(async () => {
    setLoading(true);

    try {
      const resultsResponse = await axios.post(
        `http://localhost:4000/assessment/results`,
        {
          selectedOptions,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (resultsResponse.data) {
        setResult(resultsResponse.data);
      }
    } catch (error: any) {}

    setLoading(false);
  }, [selectedOptions]);

  useEffect(() => {
    if (selectedOptions.length > 0) {
      getResults();
    }
  }, [getResults, selectedOptions]);

  return (
    <div className="p-8">
      <div className="flex items-center flex-col justify-center mt-16">
        {loading ? <>Loading ....</> : <>{result}</>}
      </div>
    </div>
  );
}

export default ResultsPage;
