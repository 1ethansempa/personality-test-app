import React from "react";
import Quote from "../atoms/quote";
import LazyLoadedImage from "../atoms/lazy-loaded-image";
import PrimaryButton from "../atoms/primary-button";
import { useNavigate } from "react-router-dom";

interface ResultBlockProps {
  text: string;
  desc: string;
  src: string;
  alt: string;
}

function ResultBlock({ text, src, alt, desc }: ResultBlockProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center my-4 max-w-lg text-center">
      <Quote text={text} />
      <div className="text-sm my-3">{desc}</div>
      <LazyLoadedImage src={src} alt={alt} className="h-96" />
      <PrimaryButton
        text="Re-take the Test"
        className="text-sm mr-6 py-4 px-12 w-40"
        includeArrow={true}
        clickAction={() => {
          navigate("/test", { replace: true });
        }}
        arrowDirection="right"
        enabled={true}
      />
    </div>
  );
}

export default ResultBlock;
