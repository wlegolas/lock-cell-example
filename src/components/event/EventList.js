import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { publishEvent, subscribeSelectCell } from '../../api';

const containerCls = 'qm-event-container';
const timetableCls = 'qm-timetable';
const lockedTimetableCls = 'qm-locked-timetable';

class EventList extends React.Component {
  constructor({props, state}) {
    super(props);

    subscribeSelectCell( this.onSubscribeSelectTimetable );
  };

  componentDidMount() {
    const container = document.getElementsByClassName(containerCls)[0];

    container.addEventListener('click', this.handleTimetableClick, false);
  };

  handleTimetableClick = (event) => {
    if ( event.target.classList.contains( timetableCls ) ) {
        this.onSelect(event.target);
    }

    event.stopPropagation();
  };

  onSubscribeSelectTimetable = (timetableId) => {
    this.selectTimetable(timetableId);
  };

  onSelect = (timetable) => {
    if (this.timetableIsAvailable(timetable)) {
      publishEvent('timetableselected', timetable.id);
    }
  };

  timetableIsAvailable = (timetableEl) => {
    return !timetableEl.classList.contains( lockedTimetableCls );
  };

  selectTimetable = (timetableId) => {
    this.setSelectedTimetable(timetableId, false);
  };

  deselectTimetable = (timetableId) => {
    this.setSelectedTimetable(timetableId, true);
  };

  setSelectedTimetable = (timetableId, isAvailable) => {
    const timetableEl = document.getElementById(timetableId);

    if (timetableEl) {
      timetableEl.classList[isAvailable ? 'remove' : 'add'](lockedTimetableCls);
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
          <Col className={ timetableCls } id="cell_1">user_1</Col>
        </Row>
        <Row>
          <Col>9:45</Col>
          <Col className={ timetableCls } id="cell_2">user_2</Col>
        </Row>
        <Row>
          <Col>10:00</Col>
          <Col className={ timetableCls } id="cell_3">user_3</Col>
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