import React from "react";
import Visualize from "./Visualize";

export default function Compare({
  array,
  setArray,
  swapping,
  currentSorted,
  algorithms,
  handleStart,
}) {
  const copiedArray1 = array.slice();
  const copiedArray2 = array.slice();
  return (
    <div>
      <div className="compare">
        <div className="compare_item">
          <Visualize
            id={1}
            array={copiedArray1}
            setArray={setArray}
            swapping={swapping}
            currentSorted={currentSorted}
            algorithms={algorithms}
            handleStart={handleStart}
          />
        </div>

        <div className="compare_item">
          <Visualize
            id={2}
            array={copiedArray2}
            setArray={setArray}
            swapping={swapping}
            currentSorted={currentSorted}
            algorithms={algorithms}
            handleStart={handleStart}
          />
        </div>
      </div>
    </div>
  );
}
