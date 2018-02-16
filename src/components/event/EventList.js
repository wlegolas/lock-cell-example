import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class EventList extends React.Component {
  render() {
    return (
      <Container className="qm-event-container">
        <Row>
          <Col className="qm-event-title">Fri, Feb 16</Col>
        </Row>
        <Row>
          <Col>9:30</Col>
          <Col>user_1</Col>
        </Row>
        <Row>
          <Col>9:45</Col>
          <Col>user_2</Col>
        </Row>
        <Row>
          <Col>10:00</Col>
          <Col>user_3</Col>
        </Row>
        <Row>
          <Col>10:15</Col>
          <Col className="disabled"></Col>
        </Row>
      </Container>
    )
  }
};

export default EventList;