import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'

const supabaseUrl = 'https://qclwyzaygotfcqbrhlyd.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

if (!supabaseKey) {
  throw new Error("Missing SUPABASE_KEY environment variable")
}
const supabase = createClient(supabaseUrl, supabaseKey)
//const range = [new Date('2024-01-09'), new Date('2024-01-10'), new Date('2024-01-11')]

export function getRange() {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchRange() {
            const { data, error } = await supabase
                .from('available_date')
                .select('date_from, date_to,available_weekdays')
                .eq('id', '1')
            if (error) console.log('error', error)
            else setData(data)
        }
        fetchRange()

    }
    , [])

    //array to date from date_from and date_to. create a range of dates by 1day. and check available_weekdays(jsonb "1":false... to "7":false) to filter the range. "1" is sunday
    let range = []
    if (data) {
        let date_from = new Date(data[0].date_from)
        let date_to = new Date(data[0].date_to)
        let available_weekdays = data[0].available_weekdays
        let available_weekdays_array = []
        for (let i = 1; i <= 7; i++) {
            if (available_weekdays[i]) {
                // Subtract 1 from the value, and use the % operator to wrap 0 to 6
                available_weekdays_array.push((i - 1 + 7) % 7)
            }
        }
        let date = date_from
        while (date <= date_to) {
            if (available_weekdays_array.includes(date.getDay())) {
                range.push(new Date(date))
            }
            date.setDate(date.getDate() + 1)
        }
    }

    return range
}
