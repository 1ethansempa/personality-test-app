import React, { useState, useEffect, useCallback } from "react";
import { questionsSelector } from "../../slices/question";
import { useSelector } from "react-redux";
import axios from "axios";
import LazyLoadedImage from "../UI/atoms/lazy-loaded-image";

function ResultsPage() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");
  const [fetchError, setFetchError] = useState(false);

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
        setFetchError(false);
        setResult(resultsResponse.data);
        setLoading(false);
      }
    } catch (error: any) {
      setFetchError(true);
      setLoading(false);
    }
  }, [selectedOptions]);

  useEffect(() => {
    if (selectedOptions.length > 0) {
      getResults();
    } else {
      setLoading(false);
      setFetchError(true);
    }
  }, [getResults, selectedOptions]);

  return (
    <div className="p-8">
      <div className="flex items-center flex-col justify-center mt-16">
        {loading ? (
          <>Loading ....</>
        ) : !fetchError ? (
          <span>{result}</span>
        ) : (
          <div className="flex flex-col items-center justify-center my-4">
            <LazyLoadedImage src="server-error.png" alt="Server Error" />
            <div className="my-3">Server is offline or under maintenance.</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
