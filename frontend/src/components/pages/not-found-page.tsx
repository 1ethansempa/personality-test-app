import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorBlock from "../UI/molecules/error-block";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="p-8">
      <div className="mt-16">
        <ErrorBlock
          error=" It appears the page you're looking for doesn't exist."
          action={() => {
            navigate("/", { replace: true });
          }}
          actionText="Go to Home"
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
