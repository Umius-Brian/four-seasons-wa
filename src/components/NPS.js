import { React, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import axios from "axios";
import "../App.css";
import ScoreTotals from "./ScoreTotals";
import CommentFeed from "./CommentFeed";

function NPS() {
  const [score, setScore] = useState(0);
  const [promoters, setPromoters] = useState(0);
  const [passives, setPassives] = useState(0);
  const [detractors, setDetractors] = useState(0);
  const [totals, setTotals] = useState([
    { type: "Promoters", count: promoters },
    { type: "Passives", count: passives },
    { type: "Detractors", count: detractors },
  ]);
  const [comments, setComments] = useState([]);

  let textColor;

  if (score > 75) {
    textColor = "#428CFF";
  } else if (score > 25) {
    textColor = "#AA6FFF";
  } else {
    textColor = "#FB4B54";
  }

  async function getScore() {
    let res = await axios.post(
      "https://us-south.functions.appdomain.cloud/api/v1/web/jim.faulkner%40ibm.com_dev/default/hello-world2.json",
      {},
      {}
    );

    let promoterArr = [];
    let passiveArr = [];
    let detractorArr = [];
    let commentArr = [];

    res.data.message.map((result) => {
      commentArr.push(result.COMMENTS);
      if (result.SCORE > 8) {
        promoterArr.push(100);
      } else if (result.SCORE < 7) {
        detractorArr.push(-100);
      } else {
        passiveArr.push(0);
      }
    });
    setScore(
      (promoterArr.length * 100 - detractorArr.length * 100) /
        res.data.message.length
    );

    setPromoters(promoterArr.length);
    setDetractors(detractorArr.length);
    setPassives(passiveArr.length);
    setTotals([
      { type: "Promoters", count: promoters, color: "#428CFF" },
      { type: "Passives", count: passives, color: "#AA6FFF" },
      { type: "Detractors", count: detractors, color: "#FB4B54" },
    ]);
    setComments(commentArr);
  }

  useEffect(() => {
    getScore();
  }, []);

  return (
    <div className="App">
      <Container fluid>
        <header className="header">
          <h1>Four Seasons For You</h1>
          <h2>User Feedback Collection Dashboard</h2>
        </header>
        <Row className="mt-5">
          <Col md="1"></Col>
          <Col md="4">
            <Row>
              <Col md="12" className="wrapper-nps-section">
                <Row className="pb-0">
                  <h3 className="mb-0">Overall NPS Score</h3>
                </Row>
                <Row>
                  <p className="text-nps-score" style={{ color: textColor }}>
                    {score}
                  </p>
                </Row>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md="12" className="wrapper-nps-section">
                <Row>
                  <h3>NPS Breakdown</h3>
                </Row>
                <Row>
                  <Col md="12">
                    <ScoreTotals data={totals} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md="2"></Col>
          <Col md="4">
            <Row>
              <Button onClick={getScore}>Fetch latest results!</Button>
            </Row>
            <Row>
              <h3>Client Feedback Feed</h3>
            </Row>
            <Row>
              {comments.map((comment) => {
                return <CommentFeed feedback={comment} />;
              })}
            </Row>
          </Col>
          <Col md="1"></Col>
        </Row>
      </Container>
      <Link to='/'>
        <Button
          size='sm'
          style={{ position: 'absolute', top: '100px', left: '20px' }}
          variant='dark'
          className='button'
        >
          Home Page
        </Button>
      </Link>
    </div>
  );
}

export default NPS;
