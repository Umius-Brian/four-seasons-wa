import React from "react";
import { Card } from "react-bootstrap";

function CommentFeed(props) {
  return (
      <Card border="dark" style={{ width: '18rem', margin: 'auto', marginBottom: '.5rem' }}> 
        <Card.Title></Card.Title>
        <Card.Body>
          <p>{props.feedback}</p>
        </Card.Body>
      </Card>
  );
}

export default CommentFeed;
