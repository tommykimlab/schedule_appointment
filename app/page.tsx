import Image from 'next/image'
import { Calendar } from "@/components/ui/calendar"
import React, { useState } from 'react';
import CalendarWithButtons from '@/components/CalendarWithButtons';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h2 className="text-sm font-bold mb-4 text-gray-500">Tommy Kim</h2>
      <h1 className="text-2xl font-bold mb-4">Python 1:1 Lesson</h1>
      <hr className="w-full border-t-2 border-gray-300 my-4" />
      <h3 className="text-xl font-bold mb-4">Select Day</h3>
      <CalendarWithButtons />

    </main>
  )
}
