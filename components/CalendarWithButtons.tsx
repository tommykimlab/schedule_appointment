'use client'
import { Calendar } from "@/components/ui/calendar"
import React, { useState , useEffect} from 'react';
import { Button } from "@/components/ui/button";
import { getRange } from "@/components/CallSupabase";

function CalendarWithButtons() {
  const [isCalendarClicked, setCalendarClicked] = useState(false);

  const handleCalendarClick = () => {
    setCalendarClicked(true);
  };

  const generateTimes = () => Array.from({ length: 10 }, (_, i) => 9 + i); // generates hours from 9 to 18
  const times = generateTimes();
  const range = getRange();


  const renderCalendar = () => (
    <Calendar mode='single' className="rounded-md border" selected={range}/>
  );

  const renderButtons = () => (
    <div className="flex flex-col space-y-4">
      {times.map(time => (
        <Button key={time}>
          {time}:00 - {time + 1}:00
        </Button>
      ))}
    </div>
  );

  return (
    <div onClick={handleCalendarClick}>
      {!isCalendarClicked && renderCalendar()}
      {isCalendarClicked && renderButtons()}
    </div>
  );
}

export default CalendarWithButtons;