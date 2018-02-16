import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { handleEvent, subscribeSelectCell } from '../../api';

const containerCls = 'qm-event-container';
const cellSlotCls = 'qm-event-slot';

class EventList extends React.Component {
  constructor({props, state}) {
    super(props);

    subscribeSelectCell( this.onSubscribeSelectCell );
  };

  componentDidMount() {
    const container = document.getElementsByClassName(containerCls)[0];

    container.addEventListener('click', this.handleClick, false);
  };

  handleClick = (event) => {
    if ( event.target.classList.contains( cellSlotCls ) ) {
        this.onSelect(event.target);
    }

    event.stopPropagation();
  };

  onSubscribeSelectCell = (cellId) => {
    this.lockCell(cellId);
  };

  onSelect = (cell) => {
    handleEvent('select-cell', cell.id);
  };

  lockCell = (cellId) => {
    const cellEl = document.getElementById(cellId);

    if (cellEl) {
      console.log(`Received the cell id ${ cellId }`);
      cellEl.classList.add('qm-cell-unvaliable');
    }
  };

  render() {
    return (
      <Container className={ containerCls }>
        <Row>
          <Col className="qm-event-title">Fri, Feb 16</Col>
        </Row>
        <Row>
          <Col>9:30</Col>
          <Col className={ cellSlotCls } id="cell_1">user_1</Col>
        </Row>
        <Row>
          <Col>9:45</Col>
          <Col className={ cellSlotCls } id="cell_2">user_2</Col>
        </Row>
        <Row>
          <Col>10:00</Col>
          <Col className={ cellSlotCls } id="cell_3">user_3</Col>
        </Row>
        <Row>
          <Col>10:15</Col>
          <Col className="qm-cell-disabled"></Col>
        </Row>
      </Container>
    )
  }
};

export default EventList;