import React from "react";
import LazyLoadedImage from "../atoms/lazy-loaded-image";
import PrimaryButton from "../atoms/primary-button";

interface ErrorBlockProps {
  error: string;
  action?: () => void;
  actionText?: string;
}

function ErrorBlock({ error, action, actionText }: ErrorBlockProps) {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <LazyLoadedImage src="server-error.png" className="h-96" alt="Error" />
      <div className="my-2">{error}</div>
      {action && actionText && (
        <PrimaryButton
          text={actionText}
          className="text-sm py-4 px-6"
          includeArrow={true}
          clickAction={action}
          enabled={true}
          arrowDirection="right"
        />
      )}
    </div>
  );
}

export default ErrorBlock;
