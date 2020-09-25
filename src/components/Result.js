import React from "react";
import styles from "../styles/components/_result.module.scss";

const Result = (props) => {
  var percentage = 0;
  if (props.percentage != undefined) {
    percentage = props.percentage;
  }
  var resultStyle = {};
  if (props.style) {
    resultStyle = props.style;
  }

  return (
    <div style={resultStyle}>
      <div className={styles.progressBar}>
        <div
          style={{
            width: percentage + "%",
          }}
        ></div>
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

export default Result;
