import React from "react";

import offersImg from "../assets/offers-img.jpeg";

import { Row, Col, Button } from "react-bootstrap";

function HotelOffers() {
  return (
    <div>
      <Row>
        <p className="text-featured-offer">FEATURED OFFER</p>
      </Row>
      <Row>
        <Col md="2"></Col>
        <Col md="5">
          <img className="img-logo" src={offersImg} />
        </Col>
        <Col md="3">
          <Row>
            <p className="text-stay-longer">STAY LONGER - FOURTH NIGHT FREE</p>
          </Row>
          <Row>
            <p className="text-stay-longer">________</p>
          </Row>
          <Row>
            <p className="text-offer-details">
              Receive a complimentary fourth night
            </p>
          </Row>
          <Row>
            <Button className="details-btn">DETAILS</Button>
          </Row>
        </Col>
        <Col md="2"></Col>
      </Row>
    </div>
  );
}

export default HotelOffers;
