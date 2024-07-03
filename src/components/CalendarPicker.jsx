import React, { useState } from 'react';
// import { format, addDays, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameDay, isSunday } from 'date-fns';

import ScheduleSelector from 'react-schedule-selector';

function CalendarPicker () {
    const [schedule, setSchedule] = useState([]);

    const handleChange = newSchedule => {
        setSchedule({schedule: newSchedule})
    }

  return (
    <>
        <div className='mt-44 w-4/5 mx-auto'>
            <ScheduleSelector
                selection={schedule}
                numDays={6}
                minTime={12}
                maxTime={16}
                hourlyChunks={2}
                onChange={handleChange}
            />
        </div>
    </>
  );
};

export default CalendarPicker;
