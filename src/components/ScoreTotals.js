import React from "react";

import { Row, Col } from "react-bootstrap";

function ScoreTotals(props) {
  let total = 0;
  let longestArr = [];

  props.data.map((data) => {
    total = total + data.count;
    longestArr.push(data.count);
  });

  longestArr.sort(function (a, b) {
    return b - a;
  });

  return (
    <div>
      <Row className="wrapper-totals">
        {props.data.map((data) => {
          let length;
          if (longestArr[0] == data.count) {
            length = "100%";
          } else {
            length = ((data.count / longestArr[0]) * 100).toString() + "%";
          }
          return (
            <Row className="mb-4">
              <Row>
                {data.type} | {data.count}
              </Row>
              <Row>
                <div
                  className="graph-bar"
                  style={{ backgroundColor: data.color, width: length }}
                ></div>
              </Row>
            </Row>
          );
        })}
      </Row>
    </div>
  );
}

export default ScoreTotals;
