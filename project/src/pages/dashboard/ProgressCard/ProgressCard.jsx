import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import data from "../../../Data/Data"

export default function ProgressCard() {

    const value = data.progress[0].value;


  return (
    <Card className="progress-card text-center">

     
      <div className="circle-wrapper">

        <CircularProgressbarWithChildren
          value={value}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#374151",     
            trailColor: "#ffffff",    
            strokeLinecap: "round",
            rotation: 0.25,           
          })}
        >
    
          <div className="percentage-text">
            <h2>{value}%</h2>
          </div>
        </CircularProgressbarWithChildren>
        <div
          className="progress-dot"
          style={{
            transform: `rotate(${(value / 100) * 360}deg)`
          }}
        />

      </div>
      <Card.Body>
        <Card.Title>My Progress</Card.Title>

        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod.
        </Card.Text>

        <Button className="details-btn" variant="primary">
          More Details
        </Button>
      </Card.Body>

    </Card>
  );
}
