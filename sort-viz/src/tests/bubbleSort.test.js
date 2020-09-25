import React from "react";
import { render } from "@testing-library/react";
import { generate } from "../functions/generateArray";
import Visualize from "../components/Visualize";
import Compare from "../components/Compare";
import { bubbleSort } from "../algorithms/bubbleSort";

const testFn = () => {
  return true;
};

const funcObj = { setSwapping: () => true, setArr: () => true };

const testSort = (a, b) => {
  for (let i in a) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

test("render visualize component", () => {
  const length = 100;
  const array = generate([], length);
  const sorted = bubbleSort(
    array,
    testFn,
    true,
    funcObj,
    [],
    testFn,
    testFn,
    false,
    10,
    testFn
  );
  render(<Visualize array={array} algorithms={[]} />);
  expect(array).toHaveLength(100);
  const knownSort = array.sort((a, b) => a - b);
  expect(testSort(sorted, knownSort)).toBeTruthy();
});

test("larger input sizes", () => {
  const length = 500;
  const array = generate([], length);
  const sorted = bubbleSort(
    array,
    testFn,
    true,
    funcObj,
    [],
    testFn,
    testFn,
    false,
    10,
    testFn
  );
  const knownSort = array.sort((a, b) => a - b);
  expect(array).toHaveLength(500);
  expect(testSort(sorted, knownSort)).toBeTruthy();
});

test("render double view", () => {
  const array = generate([], 10);
  render(<Compare array={array} algorithms={[]} />);
});
