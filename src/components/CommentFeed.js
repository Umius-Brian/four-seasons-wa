import React from "react";

import { Card } from "react-bootstrap";

function CommentFeed(props) {
  return (
    <div>
      <Card>
        <Card.Title></Card.Title>
        <Card.Body>
          <p>{props.feedback}</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CommentFeed;
