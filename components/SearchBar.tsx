import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"

export function SearchBar() {
    return (
        <div className="relative w-full bg-gray-100 rounded-full">
            <MagnifyingGlassIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 w-6" />
            <Input
                placeholder="Search"
                className="pl-10 w-full rounded-full bg-gray-100 border-none"
            />
        </div>
    )
}