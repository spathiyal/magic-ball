import React from "react";
import Ball from "./Ball";
import "./BallsContainer.css";

import { choice, getRandom } from "./random";

const randColors = [
  "Red",
  "Blue",
  "Black",
  "Yellow",
  "Orange",
  "Green",
  "Violet",
  "Indigo",
];

function BallsContainer({ allColors = randColors, numBoxes = 16 }) {
  const [boxes, setBoxes] = useState(getInitialRandomColors);

  function getInitialRandomColors() {
    return Array.from({ length: numBoxes }, () => choice(allColors));
  }

  function handleClick(evt) {
    setBoxes((boxes) => {
      let idx = getRandom(numBoxes);
      let boxCopy = [...boxes];
      boxCopy[idx] = choice(allColors);
      return boxCopy;
    });
  }

  const boxComponents = boxes.map((color, i) => <Box key={i} color={color} />);

  return (
    <div>
      <section className="BallsContainer">{boxComponents}</section>
      <button onClick={handleClick}>Change a Box</button>
    </div>
  );
}

export default BallsContainer;
