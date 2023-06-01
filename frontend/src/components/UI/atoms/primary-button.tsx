import { InputProps } from "../../../common/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface PrimaryButtonProps extends InputProps {
  text: string;
  includeArrow: boolean;
  clickAction: () => void;
  enabled: boolean;
}

function PrimaryButton({
  text,
  className,
  includeArrow,
  clickAction,
  enabled,
}: PrimaryButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className={`rounded-full px-4 py-4 font-semibold text-white shadow-sm ${className} ${
        enabled
          ? "bg-primary  hover:bg-dark-primary "
          : "bg-primary-disabled cursor-not-allowed"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={clickAction}
      disabled={!enabled}
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
    </button>
  );
}

export default PrimaryButton;
