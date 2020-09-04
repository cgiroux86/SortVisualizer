import React, { useState, useRef } from "react";

export default function Visualize({ array }) {
  const sortedRef = useRef(array);
  sortedRef.current = array;
  return (
    <div className="container">
      {sortedRef.current.map((el, i) => (
        <div
          id={i}
          key={i}
          style={{
            width: "0.5rem",
            height: el,
            border: " 1px solid purple",
            backgroundColor: "navy",
          }}
        ></div>
      ))}
    </div>
  );
}
