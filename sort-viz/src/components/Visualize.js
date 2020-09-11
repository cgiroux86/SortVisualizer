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
  ready,
  setReady,
}) {
  const [inorder, setInorder] = useState([]);
  const [fnToCall, setFnToCall] = useState({});
  const [array, setArray] = useState(arr);
  const [swapping, setSwapping] = useState([]);
  const [currentSorted, setCurrentSorted] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [comparing, setComparing] = useState([]);
  const [funcObj, setFuncObj] = useState({
    setArr: setArray,
    setSwapping: setSwapping,
    currentSorted: setCurrentSorted,
  });

  const [active, setActive] = useState({
    merge: false,
    bubble: false,
    insertion: false,
    quick: false,
    selection: false,
  });

  const handleStart = (algo, name) => {
    setFnToCall({ algo });
    const updated = name.split(" ")[0].toLowerCase();
    const updatedState = {
      merge: false,
      bubble: false,
      insertion: false,
      quick: false,
      selection: false,
    };
    updatedState[updated] = true;
    setActive(updatedState);
    if (compare) {
      id === 1
        ? setStartSort({ ...startSort, arr1: true })
        : setStartSort({ ...startSort, arr2: true });
    } else {
      setSorting(true);
    }
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
          speed,
          setComparing
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
          speed,
          setComparing
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
    ready && fnIsSet();
  }, [sorting, startSort, ready]);

  return (
    <div>
      <div className={compare ? "button_container" : "single_button"}>
        {algorithms.map((algo) => {
          return (
            <div key={algo[0]}>
              <div
                // className="algo_active"
                onClick={() => handleStart(algo[1], algo[0])}
                className={
                  active[algo[0].split(" ")[0].toLowerCase()]
                    ? "active_algo"
                    : "algo"
                }
              >
                {algo[0]}
              </div>
            </div>
          );
        })}
      </div>
      <div className="container">
        {console.log(swapping, "swapping")}
        {array &&
          array.map((el, i) => (
            <div
              key={i}
              style={{
                width: "0.5rem",
                height: el,
                border: " 1px solid purple",
                backgroundColor: comparing.includes(i)
                  ? "yellow"
                  : inorder.includes(i)
                  ? "lime"
                  : swapping.includes(i)
                  ? "purple"
                  : "#00dbfc",
              }}
            ></div>
          ))}
      </div>
    </div>
  );
}
