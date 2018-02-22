import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { publishEvent, subscribeSelectCell } from '../../api';
import EventTimetable from './EventTimetable';

const containerCls = 'qm-event-container';
const timetableCls = 'qm-timetable';
const lockedTimetableCls = 'qm-locked-timetable';

class EventList extends React.Component {
  state = {
    timetables: [{
      id: '1'
    }, {
      id: '2',
      user: 'user_1'
    }]
  };
  
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
    const timetables = this.state.timetables.map(this.renderEventTimetables);

    return (
      <div>
        <Container className={ containerCls }>
          <Row>
            <Col className="qm-event-title">Fri, Feb 16</Col>
          </Row>
          {timetables}
        </Container>
      </div>
    )
  };

  renderEventTimetables = (timetable) => {
    return (
      <EventTimetable key={timetable.id} timetable={timetable} onClick={this.handlerBorrow} />
    );
  }
};

export default EventList;