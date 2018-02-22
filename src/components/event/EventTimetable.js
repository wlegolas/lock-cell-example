import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

class EventTimetable extends React.Component {
  static propTypes = {
    timetable: PropTypes.object.isRequired,
    //onClick: PropTypes.func.isRequired
  }

  onBorrowClick = () => {
    this.props.onClick(this.props.timetable.id);
  }

  render() {
    const { timetable } = this.props;

    return (
      <Row>
        <Col sm="3">10:15</Col>
        <Col sm="9" className="qm-cell-disabled"></Col>
      </Row>
    );
  }
};

export default EventTimetable;