import React from "react";

function QuestionCardSkeleton() {
  return (
    <div className="lg:w-[28rem] w-[35rem] p-6 bg-white border border-gray-200 lg:rounded-3xl rounded-2xl lg:shadow-lg shadow-md animate-pulse">
      <div className="bg-gray-300 w-full h-8 rounded-full"></div>
      <div className="bg-gray-300 w-32 h-4 my-2 rounded-full"></div>
      <ul>
        <li
          className={`flex py-4 px-4 bg-gray-300 w-full h-12 rounded-md my-3 text-sm cursor-pointer}`}
        >
          <span
            className={`flex items-center rounded-md mr-2  bg-gray-400 h-5 w-5 p-2 mb-2 shadow`}
          ></span>
        </li>
        <li
          className={`flex py-4 px-4 bg-gray-300 w-full h-12 rounded-md my-3 text-sm cursor-pointer}`}
        >
          <span
            className={`flex items-center rounded-md mr-2  bg-gray-400 h-5 w-5 p-2 mb-2 shadow`}
          ></span>
        </li>
        <li
          className={`flex py-4 px-4 bg-gray-300 w-full h-12 rounded-md my-3 text-sm cursor-pointer}`}
        >
          <span
            className={`flex items-center rounded-md mr-2  bg-gray-400 h-5 w-5 p-2 mb-2 shadow`}
          ></span>
        </li>
        <li
          className={`flex py-4 px-4 bg-gray-300 w-full h-12 rounded-md my-3 text-sm cursor-pointer}`}
        >
          <span
            className={`flex items-center rounded-md mr-2  bg-gray-400 h-5 w-5 p-2 mb-2 shadow`}
          ></span>
        </li>
      </ul>
      <div className="flex items-center justify-center my-4">
        <div
          className={`rounded-full bg-gray-300 h-8 cursor-pointer f shadow-sm py-4 px-12`}
        ></div>
      </div>
    </div>
  );
}

export default QuestionCardSkeleton;
