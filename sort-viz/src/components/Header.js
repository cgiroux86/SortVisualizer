import React, { useState, useEffect, useRef } from "react";
import { Button } from "../styles/styled";
import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { selectionSort } from "../algorithms/selectionSort";

export default function Header({ setArray, array }) {
  const [sorting, setSorting] = useState(false);
  const arrayRef = useRef();
  arrayRef.current = array;
  const handleStart = () => {
    setSorting(true);
  };
  useEffect(() => {
    sorting && bubbleSort(arrayRef.current, setArray, setSorting);
  }, [sorting]);

  return (
    <div className="header">
      <div className="title">Sorting Visualizer</div>
      <Button onClick={() => handleStart()}>Start Sort!</Button>
    </div>
  );
}
