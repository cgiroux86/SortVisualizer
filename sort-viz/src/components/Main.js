import React, { useState, useEffect } from "react";
import Header from "./Header";
import Visualize from "./Visualize";
import Compare from "./Compare";
import { generate } from "../functions/generateArray";
import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { selectionSort } from "../algorithms/selectionSort";
import { mergeSort } from "../algorithms/mergeSort.js";
import { quickSort } from "../algorithms/quickSort";

export default function Main() {
  const [array, setArray] = useState(generate([], 100));
  // const [swapping, setSwapping] = useState([]);
  // const [currentSorted, setCurrentSorted] = useState([]);

  const [compare, setCompare] = useState(true);
  const [fnToCall, setFnToCall] = useState({});

  const algorithms = [
    ["Merge Sort", mergeSort],
    ["Bubble Sort", bubbleSort],
    ["Insertion Sort", insertionSort],
    ["Quick Sort", quickSort],
    ["Selection Sort", selectionSort],
  ];

  // useEffect(() => {
  //   sorting &&
  //     fnToCall.algo(
  //       array,
  //       setArray,
  //       setSorting,
  //       funcObj,
  //       currentSorted,
  //       setCurrentSorted,
  //       setSwapping,
  //       swapping
  //     );
  // }, [sorting]);

  return (
    <div className="main_container">
      <Header />
      {!compare ? (
        <div className="graph_container">
          <Visualize
          // array={array}
          />
        </div>
      ) : (
        <div>
          <Compare
            array={array}
            setArray={setArray}
            compare={compare}
            algorithms={algorithms}
          />
        </div>
      )}
    </div>
  );
}
