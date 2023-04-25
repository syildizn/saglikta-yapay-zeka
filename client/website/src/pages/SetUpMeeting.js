import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container, Modal, Button } from 'react-bootstrap';
import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const MyCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);

  const handleSelectDate = (event) => {
    setSelectedDate(event.start);
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const dayPropGetter = (date) => {
    const style = {};
    if (moment(date).format('YYYY-MM-DD') === moment(selectedDate).format('YYYY-MM-DD')) {
      style.backgroundColor = 'lightblue';
    } else {
      style.backgroundColor = 'white';
    }
    return {
      style
    };
  }

  return (
    <Container>
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectDate}
        dayPropGetter={dayPropGetter}
      />
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Selected Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You have selected the following date:</p>
          <p>{moment(selectedDate).format('dddd, MMMM D, YYYY')}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default MyCalendar;
