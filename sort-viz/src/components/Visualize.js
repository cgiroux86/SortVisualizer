import React, { useState, useRef, useEffect } from "react";

export default function Visualize({ array, swapping, currentSorted, compare }) {
  const sortedRef = useRef();
  sortedRef.current = array;
  const swappingRef = useRef();
  swappingRef.current = swapping;
  const currentSortedRef = useRef();
  currentSortedRef.current = currentSorted;
  const [inorder, setInorder] = useState([]);

  useEffect(() => {
    setInorder([...inorder, ...currentSorted]);
  }, [currentSorted]);

  return (
    <div className="container">
      {array.length &&
        array.map((el, i) => (
          <div
            key={i}
            style={{
              width: compare ? "0.1rem" : "0.5rem",
              height: el,
              border: " 1px solid purple",
              backgroundColor: swapping.includes(i)
                ? "yellow"
                : inorder.includes(i)
                ? "lime"
                : "magenta",
            }}
          ></div>
        ))}
    </div>
  );
}
