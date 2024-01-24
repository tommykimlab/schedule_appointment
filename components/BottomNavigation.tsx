"use client"
import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BottomNavigation() {
  const [selectedButton, setSelectedButton] = React.useState('Explore');

  return (
    <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
      <div className="inline-flex flex-col items-center justify-center px-5">
        <Button variant="ghost" onClick={() => setSelectedButton('Explore')} style={selectedButton === 'Explore' ? {color: 'red'} : {}}>
          Explore
        </Button>
      </div>
      <div className="inline-flex flex-col items-center justify-center px-5">
        <Button variant="ghost" onClick={() => setSelectedButton('Wishlist')} style={selectedButton === 'Wishlist' ? {color: 'red'} : {}}>
          Wishlist
        </Button>
      </div>
      <div className="inline-flex flex-col items-center justify-center px-5">
        <Button variant="ghost" onClick={() => setSelectedButton('Inbox')} style={selectedButton === 'Inbox' ? {color: 'red'} : {}}>
          Inbox
        </Button>
      </div>
      <div className="inline-flex flex-col items-center justify-center px-5">
        <Button variant="ghost" onClick={() => setSelectedButton('Profile')} style={selectedButton === 'Profile' ? {color: 'red'} : {}}>
          Profile
        </Button>
      </div>
    </div>
  )
}