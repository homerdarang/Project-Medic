import React, { useState, useEffect } from 'react';

const PickerCalendar = ({ onScheduleSelect }) => {
  const getCurrentFormattedDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const getCurrentFormattedDisplayDate = () => {
    const dateObj = new Date();
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [selectedDate, setSelectedDate] = useState(getCurrentFormattedDate);
  const [formattedDate, setFormattedDate] = useState(getCurrentFormattedDisplayDate);
  const [currentMonthDates, setCurrentMonthDates] = useState([]);

  useEffect(() => {
    generateCurrentMonthsDates();
  }, [])

  const handleDateChange = (e) => {
    const date = e.target.value;
    const formattedDate = formatDate(date);
    setSelectedDate(date);
    setFormattedDate(formattedDate);
  };

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${day}/${month}/${year}`;
  };


  const generateCurrentMonthsDates = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const dates = [];
    for (let day = firstDayOfMonth.getDate(); day <= lastDayOfMonth.getDate(); day++) {
        dates.push(new Date(year, month, day))
    }
    setCurrentMonthDates(dates);
  };

  const getDaysOfWeeks = () => {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onScheduleSelect) {
      onScheduleSelect(formattedDate);
    }
  };

  return (
    <div className="grid place-items-center mt-36">
        <div className='text-red-500 grid place-items-center'>
            <h1 className='font-medium text-3xl m-0'>This is currently under development.</h1>
            <p className='text-xl mb-5 mt-0'>We will keep you posted if this feature is already done. Thank you for understanding!</p>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="formattedDate">Formatted Date:</label>
          <input
            type="text"
            id="formattedDate"
            value={formattedDate}
            readOnly
          />
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          <div className="days-of-week col-span-7 flex justify-between">
            {getDaysOfWeeks().map((day, index) => (
              <div key={index} className="day w-full text-center font-medium text-gray-600 cursor-pointer">{day}</div>
            ))}
          </div>
          <div className="dates col-span-7 grid grid-cols-7 gap-2">
            {currentMonthDates.map((date, index) => (
              <div key={index} className="date w-full h-8 flex items-center justify-center border rounded-md cursor-pointer hover:bg-gray-200">{date.getDate()}</div>
            ))}
          </div>
        </div>
        <button className='border p-4 rounded-md hover:bg-blue-400 hover:text-white ease-in-out transition-all' type="submit">Confirm Schedule</button>
      </form>
    </div>
  );
};

export default PickerCalendar;
