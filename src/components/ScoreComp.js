import React from "react";

import { Row, Col } from "react-bootstrap";
import ScoreTotals from "./ScoreTotals";
import CommentFeed from "./CommentFeed";

function ScoreComp(props) {
  return (
    <div>
      <Row className="wrapper-score-comp">
        <Col md="1"></Col>
        {/* == */}
        <Col md="10" className="wrapper-score-cols">
          <Row className="mt-4">
            <Col md="4">
              <Row>
                <p className="text-score-comp-desc">
                  OUR CURRENT SATISFACTION SCORE
                </p>
              </Row>
              <Row>
                <p className="text-nps-score">{props.score.toFixed(0)}</p>
              </Row>
            </Col>
            <Col md="8">
              <Row>
                <p className="text-score-comp-desc">SCORE BREAKDOWN</p>
              </Row>
              <Row>
                <ScoreTotals data={props.totals} />
              </Row>
            </Col>
          </Row>
        </Col>
        {/* == */}
        <Col md="1"></Col>
      </Row>
      <Row className="mt-5">
        <Col md="1"></Col>
        <Col md="6" className="wrapper-score-cols">
          <Row className="mt-4">
            <p className="text-score-comp-desc">BOT USER FEEDBACK</p>
          </Row>
          <Row className="wrapper-comment-feed">
            {props.comments.map((comment) => {
              return <CommentFeed feedback={comment} />;
            })}
          </Row>
        </Col>
        <Col md="1"></Col>
        <Col md="3">
          <p className="mission-header">TRANSPARENCY COMMITMENT</p>
          <p className="mission-text">
            Part of making our property your home away from home means treating
            you like family before, during, and after your stay.
          </p>
          <p className="mission-text">
            Family communicates with full transparency. Understanding this, it's
            very important to us to make our guest feedback transparent, and to
            ensure each guest that chooses to give our Digital Concierge
            feedback can validate that their feedback is valued.
          </p>
          <p className="mission-text">
            We invite you to take the time to see how we're doing, and see what
            our guests are saying about their digital experience with us.
          </p>
        </Col>
        <Col md="1"></Col>
      </Row>
    </div>
  );
}

export default ScoreComp;
