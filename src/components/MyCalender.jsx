import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date()); // Initialize with today's date

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className = 'items-center border border-solid rounded-md p-[3px] bg-white'>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default MyCalendar;
