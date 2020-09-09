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
  setStartSort,
  startSort,
  compare,
  ready,
  setReady,
}) {
  const [copiedArray1, setCopiedArray1] = useState(array.slice());
  const [copiedArray2, setCopiedArray2] = useState(array.slice());

  useEffect(() => {
    console.log("array is changing");
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
            setStartSort={setStartSort}
            compare={compare}
            startSort={startSort}
            ready={ready}
            setReady={setReady}
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
            setStartSort={setStartSort}
            compare={compare}
            startSort={startSort}
            ready={ready}
            setReady={setReady}
          />
        </div>
      </div>
    </div>
  );
}
