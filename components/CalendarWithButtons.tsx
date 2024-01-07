'use client'
import { Calendar } from "@/components/ui/calendar"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

const CalendarWithButtons = () => {
  const [isCalendarClicked, setCalendarClicked] = useState(false);

  const handleCalendarClick = () => {
    setCalendarClicked(true);
  }

  const times = Array.from({length: 10}, (_, i) => 9 + i); // generates hours from 9 to 18

  return (
    <div onClick={handleCalendarClick}>
      {!isCalendarClicked && <Calendar mode='single' className="rounded-md border"/>}
      {isCalendarClicked && (
        <div className="flex flex-col space-y-4">
          {times.map(time => (
            <Button key={time}>
              {time}:00 - {time + 1}:00
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}

export default CalendarWithButtons;