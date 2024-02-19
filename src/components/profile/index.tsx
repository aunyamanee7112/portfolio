import React from "react";
import {
  CAREER,
  FIRSTNAME_SIRNAME,
  PROFILE_DESCRIBE,
} from "../../constants/profile";

const ProFile = () => {
  return (
    <div className="text-left mx-auto sm:p-[70px] lg:p-[150px] h-3/4">
      <p className="text-base leading-8">{FIRSTNAME_SIRNAME}</p>
      <p className="text-base text-gray-500 pt">{CAREER}</p>
      <h1 className="text-5xl lg:text-7xl leading-snug py-5">{PROFILE_DESCRIBE}</h1>
    </div>
  );
};

export default ProFile;
