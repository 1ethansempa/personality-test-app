import { InputProps } from "../../../common/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface PrimaryButtonProps extends InputProps {
  text: string;
  includeArrow: boolean;
  clickAction: () => void;
  enabled: boolean;
  arrowDirection?: "right" | "left";
}

function PrimaryButton({
  text,
  className,
  includeArrow,
  clickAction,
  enabled,
  arrowDirection,
}: PrimaryButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  /**
   * Handle button hover
   */
  const handleHover = () => {
    setIsHovered(true);
  };

  /**
   * Handle mouse leave
   */
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
      data-cy="primary-button"
    >
      {arrowDirection ? (
        arrowDirection === "right" ? (
          <>
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
          </>
        ) : (
          <>
            {includeArrow && (
              <FontAwesomeIcon
                icon={faArrowLeft}
                color="white"
                className={`px-2 ${
                  isHovered ? "ease-in duration-100 translate-x-1" : ""
                }`}
              />
            )}
            <span>{text}</span>
          </>
        )
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}

export default PrimaryButton;
