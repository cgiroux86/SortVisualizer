import React from "react";
import Visualize from "./Visualize";

export default function Compare({ array, setArray, swapping, currentSorted }) {
  return (
    <div className="compare">
      <div className="compare_item">
        <Visualize
          array={array}
          setArray={setArray}
          swapping={swapping}
          currentSorted={currentSorted}
        />
      </div>
      <div className="compare_item">
        <Visualize
          array={array}
          setArray={setArray}
          swapping={swapping}
          currentSorted={currentSorted}
        />
      </div>
    </div>
  );
}
