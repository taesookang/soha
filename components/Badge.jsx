import React from "react";

const Badge = ({ theme, text }) => {
  return (
    <div className={`capitalize flex justify-center items-center text-${theme}-900 bg-${theme}-200 font-bold w-14 h-6 rounded-sm text-xs mb-1 shadow`}>
      {text}
    </div>
  );
};

export default Badge;
