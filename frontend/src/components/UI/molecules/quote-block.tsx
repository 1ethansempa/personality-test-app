import React from "react";
import Quote from "../atoms/quote";
import PrimaryButton from "../atoms/primary-button";
import LazyLoadedImage from "../atoms/lazy-loaded-image";

interface QuoteBlockProps {
  quoteText: string;
  smallText: string;
  action?: () => void;
  actionText?: string;
  src?: string;
  alt?: string;
}

function QuoteBlock({
  quoteText,
  smallText,
  action,
  actionText,
  src,
  alt,
}: QuoteBlockProps) {
  return (
    <div className="flex flex-col items-center justify-center my-4 max-w-lg text-center">
      <Quote text={quoteText} />
      <div className="text-sm my-3">{smallText}</div>
      {src && alt && <LazyLoadedImage src={src} alt={alt} className="h-96" />}
      {action && actionText && (
        <PrimaryButton
          text={actionText}
          className="text-sm mr-6 py-4 px-12 w-40"
          includeArrow={true}
          clickAction={action}
          arrowDirection="right"
          enabled={true}
        />
      )}
    </div>
  );
}

export default QuoteBlock;
