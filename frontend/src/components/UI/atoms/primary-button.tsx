import React from "react";

interface PrimaryButtonProps {
  text: string;
}

function PrimaryButton({ text }: PrimaryButtonProps) {
  return (
    <div className="rounded-full max-32 bg-primary px-4 py-4 cursor-pointer font-semibold text-white shadow-sm text-sm">
      {text}
    </div>
  );
}

export default PrimaryButton;
