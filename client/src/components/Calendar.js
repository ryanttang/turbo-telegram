// import React from 'react';



// const Calendar = ({ match }) => (
//     <Layout>
//       <DatePicker />
//       <h2>Calender</h2>
//     </Layout>
//   )

// export default Calendar;


import React from 'react';
import Layout from './Layout';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// const Calendar = ({ match }) => (
//     <Layout>
//       <h2>Calender</h2>
//       <DayPicker     
//       month={new Date(2018, 6, 30)}
//       todayButton="Go to Today"
//       modifiers={{
//         foo: new Date(),
//       }}
//       onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)}/>
//     </Layout>
//   )

const birthdays = {
  3: ['Mirko', 'Gianni'],
  5: ['Joey'],
  8: ['Elena'],
  9: ['Irene'],
  12: ['Paolo', 'Giorgia'],
  18: ['Claudia'],
  22: ['Maria', 'Luigi'],
  25: ['Simone'],
  26: ['Marta'],
  30: ['Lil Pump'],
};


function renderDay(day) {
  const date = day.getDate();
  const dateStyle = {
    position: 'absolute',
    color: 'lightgray',
    bottom: 0,
    right: 0,
    fontSize: 20,
  };
  const birthdayStyle = { fontSize: '.8em', textAlign: 'center' };
  const cellStyle = {
    height: 50,
    width: 60,
    position: 'relative',
  };
  return (
    <div style={cellStyle}>
      <div style={dateStyle}>{date}</div>
      {birthdays[date] &&
        birthdays[date].map((name, i) => (
          <div key={i} style={birthdayStyle}>
            {name}
          </div>
        ))}
    </div>
  );
}
export default class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
    };
  }
  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
  }
  render() {
    return (
      <Layout>
        <DayPicker
          month={new Date(2018, 6, 6)}
          todayButton="Go to Today"
          modifiers={{
            foo: new Date(),
          }}
          onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)}
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
          canChangeMonth={true}
          className="Birthdays"
          renderDay={renderDay}
        />
      </Layout>
    );
  }
}

  // export default Calendar;

//   return (
//     <DayPicker
//       month={new Date(2017, 4, 5)}
//       todayButton="Go to Today"
//       modifiers={{
//         foo: new Date(),
//       }}
//       onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)}
//     />
//   );
// }