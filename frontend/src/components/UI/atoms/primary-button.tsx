import { InputProps } from "../../../common/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface PrimaryButtonProps extends InputProps {
  text: string;
  includeArrow: boolean;
  clickAction: () => void;
}

function PrimaryButton({
  text,
  className,
  includeArrow,
  clickAction,
}: PrimaryButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`rounded-full bg-primary hover:bg-dark-primary px-4 py-4 cursor-pointer font-semibold text-white shadow-sm ${className}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={clickAction}
    >
      <span>{text}</span>
      {includeArrow && (
        <FontAwesomeIcon
          icon={faArrowRight}
          color="white"
          className={`px-2 ${
            isHovered ? "ease-in duration-100 translate-x-1" : ""
          }`}
        />
      )}
    </div>
  );
}

export default PrimaryButton;
