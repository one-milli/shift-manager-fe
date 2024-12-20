import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ShiftCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h2>シフトカレンダー</h2>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default ShiftCalendar;
