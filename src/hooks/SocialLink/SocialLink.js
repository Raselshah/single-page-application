import React from "react";

const SocialLink = () => {
  return (
    <div className="w-full">
      <button className="hover:bg-green-600 hover:text-white bg-green-500  text-lg font-bold w-full text-white mt-10 py-2">
        Continue With Google
      </button>
      <button className="hover:bg-green-600 hover:text-white bg-green-500  text-lg font-bold w-full text-white mt-5 py-2">
        Continue With Github
      </button>
    </div>
  );
};

export default SocialLink;
