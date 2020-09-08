import React, { useState, useEffect } from "react";

export default function Visualize({ arr, compare, algorithms }) {
  const [inorder, setInorder] = useState([]);
  const [fnToCall, setFnToCall] = useState({});
  const [array, setArray] = useState(arr);
  const [swapping, setSwapping] = useState([]);
  const [currentSorted, setCurrentSorted] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [funcObj, setFuncObj] = useState({
    setArr: setArray,
    setSwapping: setSwapping,
    currentSorted: setCurrentSorted,
  });

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
    <div>
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
      <div className="container">
        {array &&
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
    </div>
  );
}
