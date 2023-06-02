import React, { useState, useEffect, useCallback } from "react";
import { questionsSelector } from "../../slices/question";
import { useSelector } from "react-redux";
import ErrorBlock from "../UI/molecules/error-block";
import QuoteBlock from "../UI/molecules/quote-block";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

function ResultsPage() {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");
  const [fetchError, setFetchError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { selectedOptions } = useSelector(questionsSelector);
  const navigate = useNavigate();

  const getResults = useCallback(async () => {
    setLoading(true);

    try {
      const resultsResponse = await api.post("assessment/results", {
        selectedOptions,
      });

      if (resultsResponse.data) {
        setFetchError(false);
        setResult(resultsResponse.data);
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);

      setErrorMsg("Something went wrong at the server");
      setFetchError(true);
      setLoading(false);
    }
  }, [selectedOptions]);

  useEffect(() => {
    if (selectedOptions.length > 0) {
      setErrorMsg("");
      getResults();
    } else {
      setLoading(false);
      setFetchError(true);
      setErrorMsg("You haven't done the test.");
    }
  }, [getResults, selectedOptions]);

  return (
    <div className="p-8">
      <div className="flex items-center flex-col justify-center lg:mt-8 mt-16">
        {loading ? (
          <>Loading ....</>
        ) : !fetchError ? (
          result !== "" ? (
            result === "Introvert" ? (
              <QuoteBlock
                quoteText="You're an introvert."
                smallText="You have a wonderful introspective nature that allows you to deeply connect with your inner thoughts and reflect on the world around you."
                src="introvert.png"
                alt="Introvert"
                action={() => {
                  navigate("/test", { replace: true });
                }}
                actionText="Re-take the Test"
              />
            ) : (
              <QuoteBlock
                quoteText="You're an extrovert."
                smallText="You possess an incredible gift for social interactions, effortlessly engaging with others and drawing energy from social environments."
                src="extrovert.png"
                alt="Extrovert"
                action={() => {
                  navigate("/test", { replace: true });
                }}
                actionText="Re-take the Test"
              />
            )
          ) : (
            <ErrorBlock error={errorMsg} />
          )
        ) : (
          <ErrorBlock error={errorMsg} />
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
