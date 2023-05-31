import React from "react";
import { ChildrenProps } from "../../../common/types";

function Card({ children }: ChildrenProps) {
  return (
    <div className="max-w-2xl p-6 bg-white border border-gray-200 rounded-3xl shadow-lg">
      {children}
    </div>
  );
}

export default Card;
