import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MagnifyingGlassIcon, ChatBubbleIcon} from "@radix-ui/react-icons"

export function SearchBar() {
    return (
        <div className="flex items-center justify-between space-x-4 w-full">
            <div className="relative w-full bg-white rounded-full shadow-xl">
                <MagnifyingGlassIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 w-6" />
                <Input
                    placeholder="Search"
                    className="pl-10 w-full h-14 rounded-full bg-white border-none"
                />
            </div>
            <Button className="bg-white border border-gray-200 w-10 h-9 rounded-full flex items-center justify-center p-2 m-2">
                <ChatBubbleIcon width={18} height={18} color="black" className="m-auto" />
            </Button>
        </div>
    )
}