import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import Image from "next/image"
import {HeartIcon, StarIcon} from "@radix-ui/react-icons"

export function Thumbnail() {
  return (
    <div className="space-y-3">
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md relative"> {/* Add relative here */}
            <Image src="/thumbnails/golf1.jpeg" alt="test" width={500} height={500} className="rounded-xl"/>
            <div className="absolute top-0 right-0 p-3 w-300">
              <HeartIcon width={22} height={22} className="text-white" fill="black" stroke="white" strokeWidth={0.2} strokeOpacity={1}/>
            </div>
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-muted-foreground">
            <StarIcon width={16} height={16} className="mr-0.1" />
            4.5(200)
          </div>
          <div className="text-xs text-muted-foreground">10 hrs</div>
        </div>
        <h3 className="font-medium leading-none">React Rendezvous Course</h3>
        <div className="text-xs text-muted-foreground">$99.99</div>
      </div>
    </div>
  );
}