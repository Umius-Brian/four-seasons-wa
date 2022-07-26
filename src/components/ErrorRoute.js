import React from "react";
import { Row, Col } from "react-bootstrap";

import errorImg from "../assets/error-img.jpeg";

function ErrorRoute(props) {
  return (
    <div>
      <Row className="wrapper-score-comp">
        <Col md="2"></Col>
        <Col md="3">
          <p className="error-header"> SOMETHING WENT WRONG</p>
          <p className="error-text">
            {" "}
            Although this site looks convincing, it's just a skeleton and not
            the actual Four Seasons Website.
          </p>
          <p className="error-text">
            Since the intent here is just to display our Virtual Assistant and
            our Assistant Feedback Dashboard, most of these links won't work.
          </p>
          <p className="route-text">
            SO CHECK OUT OUR{" "}
            <span onClick={props.fn} className="nps-route">
              NPS
            </span>
          </p>
        </Col>
        <Col md="5">
          <img className="img-logo" src={errorImg} />
        </Col>
      </Row>
    </div>
  );
}

export default ErrorRoute;
