import React, { useState, useEffect, useRef } from "react";
import { Button } from "../styles/styled";
import { bubbleSort } from "../algorithms/bubbleSort";
import { insertionSort } from "../algorithms/insertionSort";
import { selectionSort } from "../algorithms/selectionSort";

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
  const arrayRef = useRef();
  arrayRef.current = array;
  const swappingRef = useRef();
  swappingRef.current = swapping;
  const sortedRef = useRef();
  sortedRef.current = currentSorted;

  const handleStart = () => {
    setSorting(true);
  };
  useEffect(() => {
    sorting &&
      bubbleSort(
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
      <Button onClick={() => handleStart()}>Start Sort!</Button>
    </div>
  );
}
