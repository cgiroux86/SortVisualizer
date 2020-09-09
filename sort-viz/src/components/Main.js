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
  const [size, setSize] = useState(100);
  const [array, setArray] = useState(generate([], size));
  const [speed, setSpeed] = useState(50);
  const [compare, setCompare] = useState(true);

  const algorithms = [
    ["Merge Sort", mergeSort],
    ["Bubble Sort", bubbleSort],
    ["Insertion Sort", insertionSort],
    ["Quick Sort", quickSort],
    ["Selection Sort", selectionSort],
  ];

  useEffect(() => {
    setArray(generate([], size));
  }, [compare]);

  return (
    <div className="main_container">
      <Header
        setArray={setArray}
        setSpeed={setSpeed}
        setSize={setSize}
        size={size}
        compare={compare}
        setCompare={setCompare}
      />
      {!compare ? (
        <div className="graph_container">
          <Visualize
            array={array}
            setArray={setArray}
            compare={compare}
            algorithms={algorithms}
            speed={speed}
            size={size}
          />
        </div>
      ) : (
        <div>
          <Compare
            array={array}
            setArray={setArray}
            compare={compare}
            algorithms={algorithms}
            speed={speed}
          />
        </div>
      )}
    </div>
  );
}
