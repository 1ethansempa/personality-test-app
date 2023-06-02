import React from "react";
import { ChildrenProps } from "../../../common/types";

function Card({ children }: ChildrenProps) {
  return (
    <div
      className="lg:max-w-2xl lg:mx-0 mx-3 lg:p-6 p-3 bg-white border border-gray-200 lg:rounded-3xl rounded-2xl lg:shadow-lg shadow-md"
      data-cy="card"
    >
      {children}
    </div>
  );
}

export default Card;
