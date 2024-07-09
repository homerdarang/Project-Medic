import React, { useState } from 'react';
    import { format, parse, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameDay, isSunday, startOfDay} from 'date-fns';


function CalendarPicker ({onScheduleSelect}) {
    const [selectDate, setSelectDate] = useState('');
    const [selectTime, setSelectTime] = useState('');

    const date = new Date();
    const tomorrow = addDays(date, 1);
    const start = startOfDay(date);
    const startDate = format(start, "dd/MM/yyy");
    console.log(tomorrow)
    console.log(startDate);







    const handleSubmit = function(e) {
        e.preventDefault()
        if (onScheduleSelect){
            onScheduleSelect({date: selectDate, time: selectTime})
        }
    }

  return (
    <>
        <div className='grid place-items-center mt-48'>
            <form onSubmit={handleSubmit} >
                <div>
                    <input 
                        type="date" 
                        name="" 
                        id=""
                        value={selectDate}
                        onChange={(e) => setSelectDate(e.target.value)}
                        />
                </div>
            </form>
        </div>
    </>
  );
};

export default CalendarPicker;
