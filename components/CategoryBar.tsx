'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { MagnifyingGlassIcon, ChatBubbleIcon } from "@radix-ui/react-icons"
import { IconSet } from "@/components/IconSet"

export function CategoryBar() {
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <div className="flex flex-col space-y-4 p-2 bg-white">
            <div className="flex flex-nowrap overflow-x-auto space-x-4">
                {Array.from({ length: 10 }).map((_, i) => (
                    <Button 
                        key={i} 
                        className={`flex flex-col items-center justify-center p-2 m-2 bg-white 
                                    ${selected === i ? 'border-b-4 border-black text-black' : 'text-gray-500'}`}
                        onClick={() => setSelected(i)}
                    >
                        <IconSet Icon={MagnifyingGlassIcon} text={`Category ${i + 1}`} />
                    </Button>
                ))}
            </div>
        </div>
    )
}