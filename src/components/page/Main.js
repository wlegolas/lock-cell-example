import React from 'react';
import EventList from '../event/EventList';
import { Container, Row, Col } from 'reactstrap';

class Main extends React.Component {
  render() {
    return (
        <Container>
          <Row>
            <Col><h1>Event's title will came here</h1></Col>
          </Row>
          <EventList />
        </Container>
    );
  }
};

export default Main;