import React from "react";

const SkeletonPost = () => {
  return (
    <div className="flex animate-pulse flex-col mt-8 border rounded-2xl pb-3 shadow-lg shadow-black-300 mr-2 ml-2 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
      <div className="flex justify-end mr-2 space-x-2">
        <div className="bg-gradient-to-br from-primary to-blue-500 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 fill-white stroke-blue-500 stroke-2"
          ></svg>
        </div>
        <div className="bg-secondary p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 stroke-blue-500 stroke-2"
          ></svg>
        </div>
      </div>

      <div className="mb-2 bg-gradient-to-br from-slate-300 to-slate-400 h-48 w-full"></div>

      <div className="h-12 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full w-full"></div>

      <div className="flex flex-col ml-2 mr-2">
        <div className="flex flex-row items-center mb-2">
          <div className="rounded-full bg-gradient-to-br from-slate-300 to-slate-400 h-10 w-10 mt-2"></div>
          <div className="h-4 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full w-16"></div>
          <span className="ml-2 text-gray-500"></span>
        </div>

        <ul className="flex space-x-2 mb-2"></ul>
        <div className="h-16 bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg"></div>
        <ul className="flex space-x-2">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            ></svg>
            <div className="h-4 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full w-16"></div>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            ></svg>
            <div className="h-4 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full w-16"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkeletonPost;
