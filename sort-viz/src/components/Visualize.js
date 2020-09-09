import React, { useState, useEffect } from "react";

export default function Visualize({
  arr,
  compare,
  algorithms,
  speed,
  size,
  setStartSort,
  startSort,
  id,
}) {
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
    if (compare)
      id === 1
        ? setStartSort({ ...startSort, arr1: true })
        : setStartSort({ ...startSort, arr2: true });
  };

  const fnIsSet = () => {
    if (compare) {
      startSort.arr1 &&
        startSort.arr2 &&
        fnToCall.algo(
          array,
          setArray,
          setSorting,
          funcObj,
          currentSorted,
          setCurrentSorted,
          setSwapping,
          swapping,
          speed
        );
    } else {
      sorting &&
        fnToCall.algo(
          array,
          setArray,
          setSorting,
          funcObj,
          currentSorted,
          setCurrentSorted,
          setSwapping,
          swapping,
          speed
        );
    }
  };

  useEffect(() => {
    arr && setArray(arr.slice());
  }, [arr]);

  useEffect(() => {
    setInorder([...currentSorted, ...inorder]);
  }, [currentSorted]);

  useEffect(() => {
    fnIsSet();
    // sorting &&
    //   fnToCall.algo(
    //     array,
    //     setArray,
    //     setSorting,
    //     funcObj,
    //     currentSorted,
    //     setCurrentSorted,
    //     setSwapping,
    //     swapping,
    //     speed
    //   );
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
                width: "0.5rem",
                height: el,
                border: " 1px solid purple",
                backgroundColor: swapping.includes(i)
                  ? "yellow"
                  : inorder.includes(i)
                  ? "lime"
                  : "#00dbfc",
              }}
            ></div>
          ))}
      </div>
    </div>
  );
}
