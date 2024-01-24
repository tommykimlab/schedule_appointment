import React, { useState } from 'react';
import { Thumbnail } from '@/components/Thumbnail';
import { BottomNavigation } from '@/components/BottomNavigation';
import { SearchBar } from '@/components/SearchBar';
import ServerTest from '@/components/ServerTest';
import { Chat } from '@/components/Chat';
import { IconSet } from '@/components/IconSet';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { CategoryBar } from '@/components/CategoryBar';
 
export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="flex flex-col justify-start items-center p-3 w-full">
        <SearchBar />
        <CategoryBar />
      </header>
      <main className="flex flex-wrap min-h-screen items-center p-3 mb-auto">
        {/* <Chat /> */}
        {/* <ServerTest /> */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex justify-center items-center w-full space-x-4 pb-8 px-2">
            <Thumbnail />
          </div>
        ))}
      </main>
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white">
        <BottomNavigation />
      </div>
    </div>
  )
}