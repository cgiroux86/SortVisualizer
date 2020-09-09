import React, { useState, useEffect } from "react";
import Visualize from "./Visualize";

export default function Compare({
  array,
  setArray,
  swapping,
  currentSorted,
  algorithms,
  handleStart,
  speed,
}) {
  const [copiedArray1, setCopiedArray1] = useState(array.slice());
  const [copiedArray2, setCopiedArray2] = useState(array.slice());

  useEffect(() => {
    setCopiedArray1(array.slice());
    setCopiedArray2(array.slice());
  }, [array]);

  return (
    <div>
      <div className="compare">
        <div className="compare_item">
          <Visualize
            id={1}
            arr={copiedArray1}
            setArray={setArray}
            swapping={swapping}
            currentSorted={currentSorted}
            algorithms={algorithms}
            handleStart={handleStart}
            speed={speed}
          />
        </div>

        <div className="compare_item">
          <Visualize
            id={2}
            arr={copiedArray2}
            setArray={setArray}
            swapping={swapping}
            currentSorted={currentSorted}
            algorithms={algorithms}
            handleStart={handleStart}
            speed={speed}
          />
        </div>
      </div>
    </div>
  );
}
