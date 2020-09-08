import React, { useState } from "react";
import Header from "./Header";
import Visualize from "./Visualize";
import Compare from "./Compare";
import { generate } from "../functions/generateArray";

export default function Main() {
  const [array, setArray] = useState(generate([], 100));
  const [swapping, setSwapping] = useState([]);
  const [currentSorted, setCurrentSorted] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [compare, setCompare] = useState(true);
  const [funcObj, setFuncObj] = useState({
    setArr: setArray,
    setSwapping: setSwapping,
    currentSorted: setCurrentSorted,
  });

  return (
    <div className="main_container">
      <Header
        array={array}
        setArray={setArray}
        setSwapping={setSwapping}
        setCurrentSorted={setCurrentSorted}
        funcObj={funcObj}
        setSorting={setSorting}
        sorting={sorting}
        currentSorted={currentSorted}
        swapping={swapping}
      />
      {!compare ? (
        <div className="graph_container">
          <Visualize
            array={array}
            setArray={setArray}
            swapping={swapping}
            currentSorted={currentSorted}
          />
        </div>
      ) : (
        <div>
          <Compare
            array={array}
            setArray={setArray}
            swapping={swapping}
            currentSorted={currentSorted}
            compare={compare}
          />
        </div>
      )}
    </div>
  );
}
