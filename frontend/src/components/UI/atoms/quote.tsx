import React from "react";

interface QuoteProps {
  text: string;
}

function Quote({ text }: QuoteProps) {
  return (
    <div className="text-3xl my-3 text-center font-semibold text-green-black">
      “{text}”
    </div>
  );
}

export default Quote;
