import React from "react";

import { Row, Col, Card } from "react-bootstrap";
import moment from "moment";

function CommentFeed(props) {
  let color = "#000";
  let type;

  if (props.feedback.score > 8) {
    type = "PROMOTER";
  } else if (props.feedback.score > 6) {
    type = "PASSIVE";
  } else {
    type = "DETRACTOR";
  }

  let dateMoment = moment(props.feedback.date).format("l");
  return (
    <div>
      <Row className="row-feedback">
        <Col md="3" className="col-desc" style={{ backgroundColor: color }}>
          <Row>
            <p className="date-text">{dateMoment}</p>
          </Row>
          <Row>
            <p className="type-text">{type}</p>
          </Row>
        </Col>
        <Col md="8">
          <p className="feedback-text">{props.feedback.comment}</p>
        </Col>
      </Row>
    </div>
  );
}

export default CommentFeed;
