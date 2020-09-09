import React, { useState } from "react";
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
  const [tabs, setTabs] = useState({ single: false, double: true });

  function handleSpeedChange(speed) {
    setSpeed(speed);
  }

  function handleTabChange(id) {
    if (id === "double") {
      setTabs({ single: false, double: true });
      setCompare(true);
    } else {
      setTabs({ double: false, single: true });
      setCompare(false);
    }
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
          <div
            id="single"
            onClick={(e) => handleTabChange(e.target.id)}
            className={tabs.single ? "tabs_active" : "tabs"}
          >
            Single
          </div>
          <div
            id="double"
            onClick={(e) => handleTabChange(e.target.id)}
            className={tabs.double ? "tabs_active" : "tabs"}
          >
            Double
          </div>
        </div>
      </div>
    </div>
  );
}
