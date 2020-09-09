import React, { useEffect } from "react";
import { Button } from "../styles/styled";
import { generate } from "../functions/generateArray";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
export default function Header({
  setArray,
  setSpeed,
  setSize,
  size,
  compare,
  setCompare,
}) {
  function handleSpeedChange(speed) {
    setSpeed(speed);
  }
  function handleTabChange() {
    setCompare(!compare);
  }
  function getSizeValue(value) {
    return value;
  }
  return (
    <div className="header">
      <div className="title">Sorting Visualizer</div>
      <div className="options">
        <div className="slider_wrapper">
          <div>
            <Button onClick={() => setArray(generate([], 100))}>
              New List
            </Button>
          </div>
          <div style={{ width: "30%", position: "relative", left: 100 }}>
            <Typography id="discrete-slider-small-steps" gutterBottom>
              {`Delay`}
            </Typography>
            <Slider
              style={{ width: "40%", color: "white" }}
              defaultValue={50}
              getAriaValueText={handleSpeedChange}
              aria-labelledby="discrete-slider-small-steps"
              step={200}
              marks
              min={10}
              max={1000}
              valueLabelDisplay="auto"
            />
          </div>
          <div style={{ width: "30%" }}>
            <Typography id="discrete-slider-small-steps" gutterBottom>
              {`List Size`}
            </Typography>
            <Slider
              style={{ width: "40%", color: "white" }}
              defaultValue={50}
              onChange={(e, val) => setSize(val)}
              onDragStop={(e) => setArray(size)}
              aria-labelledby="discrete-slider-small-steps"
              step={20}
              marks
              min={20}
              max={200}
              valueLabelDisplay="auto"
            />
          </div>
        </div>
        <div className="tabs_container">
          <div onClick={handleTabChange} className={compare ? "tabs" : ""}>
            Single
          </div>
          <div onClick={handleTabChange} className="tabs">
            Double
          </div>
        </div>
      </div>
    </div>
  );
}
