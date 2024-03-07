import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import './Calender.css';
import { Button, Input, InputLabel } from '@mui/material';

const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events'));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const start = formData.get('start');
    const end = formData.get('end');
    const newEvent = { id: Date.now(), title, start, end };
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };


  return (
    <div className='calendarWrapper'>
      <div className='calendarInner'>
        <form onSubmit={handleSubmit} className="Form">
          <div>
            <InputLabel id="title">タイトル</InputLabel>
            <Input id="title" type='text' name='title' placeholder='タイトル' required />
          </div>
          <div><Input type='date' name='start' required /> </div>
          <div><Input type='date' name='end' required /> </div>
          <Button type='submit'>イベントを追加</Button>
        </form>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView='dayGridMonth'
          locales={[jaLocale]}
          locale='ja'
          events={events}
          eventContent={(arg) => {
            return (
              <>
                <div>{arg.timeText}</div>
                <div>{arg.event.title}</div>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Calendar;
