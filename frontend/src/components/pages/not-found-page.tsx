import React from "react";
import LazyLoadedImage from "../UI/atoms/lazy-loaded-image";
import PrimaryButton from "../UI/atoms/primary-button";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="p-8">
      <div className="flex items-center flex-col justify-center mt-16">
        <LazyLoadedImage src="404.png" alt="Page Not Found" className="h-96" />
        <div className="text-sm my-3">
          It appears the page you're looking for doesn't exist.
        </div>
        <PrimaryButton
          text="Go to Home"
          className="text-sm py-4 px-6"
          includeArrow={true}
          clickAction={() => {
            navigate("/", { replace: true });
          }}
        />
      </div>
    </div>
  );
}

export default NotFoundPage;
