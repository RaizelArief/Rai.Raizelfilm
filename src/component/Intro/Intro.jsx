import { Col, Container, Row, Button } from "react-bootstrap"
import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="tittle">NONTON GRATIS</div>
            <div className="tittle">GAK PAKE KARCIS</div>
            <div className="introButton mt-4 text-center">
             <Button variant="dark">Lihat Semua List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro;