import React from "react";

function Badge({ type }) {
  return (
    <p
      className={`${
        type === 2
          ? "bg-secColor"
          : type === 1
          ? "bg-blue-200"
          : "bg-white border-black border"
      }  text-black rounded-md px-2 py-1 text-xs tracking-wider uppercase whitespace-nowrap`}
    >
      {type === 2
        ? "No Discount"
        : type === 1
        ? "With Discount"
        : "negotiated Sale"}
    </p>
  );
}

export default Badge;
