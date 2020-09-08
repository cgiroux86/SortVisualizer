import React, { useState, useEffect, useRef } from "react";
import { Button } from "../styles/styled";
import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { selectionSort } from "../algorithms/selectionSort";
import { mergeSort } from "../algorithms/mergeSort.js";
import { quickSort } from "../algorithms/quickSort";
const algorithms = [
  ["Merge Sort", mergeSort],
  ["Bubble Sort", bubbleSort],
  ["Insertion Sort", insertionSort],
  ["Quick Sort", quickSort],
  ["Selection Sort", selectionSort],
];
export default function Header({
  setArray,
  array,
  currentSorted,
  sorting,
  setSorting,
  funcObj,
  setCurrentSorted,
  setSwapping,
  swapping,
}) {
  const [fnToCall, setFnToCall] = useState({});
  const arrayRef = useRef();
  arrayRef.current = array;
  const swappingRef = useRef();
  swappingRef.current = swapping;
  const sortedRef = useRef();
  sortedRef.current = currentSorted;

  const handleStart = (algo) => {
    setFnToCall({ algo });
    setSorting(true);
  };
  useEffect(() => {
    sorting &&
      fnToCall.algo(
        array,
        setArray,
        setSorting,
        funcObj,
        currentSorted,
        setCurrentSorted,
        setSwapping,
        swapping
      );
  }, [sorting]);

  return (
    <div className="header">
      <div className="title">Sorting Visualizer</div>
      <div className="button_container">
        {algorithms.map((algo) => {
          return (
            <div key={algo[0]}>
              <div onClick={() => handleStart(algo[1])} className="algo">
                {algo[0]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
