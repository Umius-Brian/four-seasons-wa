import { React, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import { Container, Row, Col, Button } from "react-bootstrap";

import HotelHead from "./components/HotelHead";
import HotelSubHead from "./components/HotelSubHead";
import HotelOffers from "./components/HotelOffers";
import ErrorRoute from "./components/ErrorRoute";
import ScoreComp from "./components/ScoreComp";

function App() {
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
  const [textToShow, setTextToShow] = useState("OFFERS");
  const [compDisplay, setCompDisplay] = useState(["block", "none", "none"]);

  function compare(a, b) {
    if (a.date < b.date) {
      return 1;
    } else if (a.date > b.date) {
      return -1;
    } else {
      return 0;
    }
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
      let datePull = result.REVIEW_DATE.split("T");
      commentArr.push({
        score: result.SCORE,
        date: datePull[0],
        comment: result.COMMENTS,
      });
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
      { type: "PROMOTERS", count: promoters, color: "#262626" },
      { type: "PASSIVES", count: passives, color: "#262626" },
      { type: "DETRACTORS", count: detractors, color: "#262626" },
    ]);

    commentArr.sort(compare);
    setComments(commentArr);
  }

  useEffect(() => {
    getScore();
  }, []);

  function showComp(e) {
    let subText = e.target.textContent;
    setTextToShow(subText);
    if (subText == "OFFERS") {
      setCompDisplay(["block", "none", "none"]);
    } else if (subText == "NPS") {
      setCompDisplay(["none", "none", "block"]);
      getScore();
    } else {
      setCompDisplay(["none", "block", "none"]);
    }
  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <HotelHead fn={showComp} />
        </Row>
        <Row className="wrapper-subhead">
          <HotelSubHead pageText={textToShow} />
        </Row>
        <Row style={{ display: compDisplay[0] }}>
          <HotelOffers />
        </Row>
        <Row style={{ display: compDisplay[1] }}>
          <ErrorRoute fn={showComp} />
        </Row>
        <Row style={{ display: compDisplay[2] }}>
          <ScoreComp score={score} totals={totals} comments={comments} />
        </Row>
        <Row className="generic-footer">
          <p className="footer-text">
            <span className="footer-span-title">
              FOUR SEASONS HOTEL NEW YORK | 2022 |
            </span>{" "}
            BUT NOT REALLY THOUGH, THIS IS TO DEMO OUR{" "}
            <span className="footer-span-nps" onClick={showComp}>
              NPS
            </span>
            . #asharmy
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default App;
