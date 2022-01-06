import React from "react";
import classnames from 'classnames'

const Badge = ({ type }) => {
  classnames()
  return (
    <div className={`capitalize flex justify-center items-center ${type === "spicy" ? "text-red-900":"text-green-900"} ${type === "spicy" ? "bg-red-200":"bg-green-200"} font-bold w-14 h-6 rounded-sm text-xs mb-1 shadow`}>
      {type}
    </div>
  );
};

export default Badge;
