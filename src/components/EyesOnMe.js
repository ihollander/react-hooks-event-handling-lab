import React from "react";

function EyesOnMe(props) {
  return (
    <button
      onBlur={() => console.log("Hey! Eyes on me!")}
      onFocus={() => console.log("Good!")}
    >
      EyesOnMe
    </button>
  );
}

export default EyesOnMe;
