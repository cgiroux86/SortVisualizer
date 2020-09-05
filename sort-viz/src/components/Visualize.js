import React, { useState, useRef, useEffect } from "react";

export default function Visualize({ array, swapping, currentSorted }) {
  const sortedRef = useRef();
  sortedRef.current = array;
  const swappingRef = useRef();
  swappingRef.current = swapping;
  const currentSortedRef = useRef();
  currentSortedRef.current = currentSorted;

  return (
    <div className="container">
      {array.length &&
        array.map((el, i) => (
          <div
            key={i}
            style={{
              width: "0.5rem",
              height: el,
              border: " 1px solid purple",
              backgroundColor: swapping.includes(i)
                ? "yellow"
                : currentSorted.includes(i)
                ? "sky blue"
                : "magenta",
            }}
          ></div>
        ))}
    </div>
  );
}
