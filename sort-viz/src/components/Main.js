import React, { useState } from "react";
import Header from "./Header";
import Visualize from "./Visualize";
import { generate } from "../functions/generateArray";

export default function Main() {
  const [array, setArray] = useState(generate([], 100));
  return (
    <div>
      <Header array={array} setArray={setArray} />
      <Visualize array={array} setArray={setArray} />
    </div>
  );
}
