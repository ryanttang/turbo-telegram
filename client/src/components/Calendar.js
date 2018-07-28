import React from 'react';

const Calendar = ({ match }) => (
    <div>
      <h2>Calender</h2>
      <h3>{match.params.calendarId}</h3>
    </div>
  )

export default Calendar;