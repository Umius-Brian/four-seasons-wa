import React from "react"

import { Row } from "react-bootstrap"

function HotelSubHead(props) {
    return (
        <div>
            <Row>
                <p className="text-fixed">New York Downtown</p>
            </Row>
            <Row>
                <p className="text-variable">{props.pageText}</p>
            </Row>
        </div>
    )
}

export default HotelSubHead