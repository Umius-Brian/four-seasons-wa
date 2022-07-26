import React from "react";

import { Row, Col, Button } from "react-bootstrap";

import logo from "../assets/logo.png";

function HotelHead(props) {
  return (
    <div className="hotel-head">
      <Row>
        <Col md="8"></Col>
        <Col md="2">
          <p onClick={props.fn}>ALL HOTELS AND RESORTS</p>
        </Col>
        <Col md="1">
          <p onClick={props.fn}>MY PROFILE</p>
        </Col>
        <Col md="1">
          <p onClick={props.fn}>ENGLISH</p>
        </Col>
      </Row>
      <Row>
        <Col md="1" className="img-col">
          <img className="img-logo" src={logo} />
        </Col>
        <Col md="8">
          <Row>
            <h1 onClick={props.fn}>FOUR SEASONS NEW YORK HOTEL DOWNTOWN</h1>
          </Row>
          <Row>
            <Col md="2">
              <p onClick={props.fn} className="header-link">
                HOTEL OVERVIEW
              </p>
            </Col>
            <Col md="2">
              <p onClick={props.fn} className="header-link">
                ACCOMODATIONS
              </p>
            </Col>
            <Col md="2">
              <p onClick={props.fn} className="header-link">
                PHOTOS & VIDEOS
              </p>
            </Col>
            <Col md="2">
              <p onClick={props.fn} className="header-link">
                OFFERS
              </p>
            </Col>
            <Col md="2">
              <p onClick={props.fn} className="header-link">
                EXPERIENCES
              </p>
            </Col>
            <Col md="2">
              <p onClick={props.fn} className="header-link">
                MORE...
              </p>
            </Col>
          </Row>
        </Col>
        <Col md="2">
          <Button className="header-btn" onClick={props.fn}>CHECK RATES</Button>
        </Col>
        <Col md="1">
          <Button className="header-btn" onClick={props.fn}>
            NPS
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default HotelHead;
