'use client'
import { Calendar } from "@/components/ui/calendar"
import React, { useState , useEffect} from 'react';
import { Button } from "@/components/ui/button"
import { createClient } from '@supabase/supabase-js'
import test from "node:test";

const supabaseUrl = 'https://qclwyzaygotfcqbrhlyd.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

if (!supabaseKey) {
  throw new Error("Missing SUPABASE_KEY environment variable")
}

const supabase = createClient(supabaseUrl, supabaseKey)

function CalendarWithButtons() {
  const [isCalendarClicked, setCalendarClicked] = useState(false);

  const handleCalendarClick = () => {
    setCalendarClicked(true);
  };

  const times = Array.from({ length: 10 }, (_, i) => 9 + i); // generates hours from 9 to 18
  const [test, setTest] = useState([])

  useEffect(() => {
    const fetchAppointments = async () => {
      let { data: test, error} = await supabase
        .from('available_date')
        .select('*')
      
        setTest(test)
    }
    
    fetchAppointments()
  }, [])

  const available_date = test
  console.log(available_date)

  return (
    <div onClick={handleCalendarClick}>
      {!isCalendarClicked && <Calendar mode='single' className="rounded-md border" selected={[new Date('2024-01-09'), new Date('2024-01-10')]}/>}
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
  );
}

export default CalendarWithButtons;