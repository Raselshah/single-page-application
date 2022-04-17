import React from "react";

const NotAPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex">
          <h2 className="text-4xl px-2">404</h2>
          <div className="bg-amber-400 w-1 h-10"></div>
          <h2 className="text-4xl px-2">Page not found</h2>
        </div>
        <button className="hover:bg-green-600 hover:text-white bg-green-500 py-1 text-lg font-bold text-white mt-10 w-1/6">
          Back to Home
        </button>
      </div>
    </>
  );
};

export default NotAPage;
