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
                .select('available_date')
            if (error) console.log('error', error)
            else setData(data)
        }
        fetchRange()
    }
    , [])

    //array to date
    const range = data?.map((item) => new Date(item.available_date))
    return range
}
