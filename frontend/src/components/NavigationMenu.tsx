import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Cat, Ellipsis, House, MessageCircleMore, Search } from "lucide-react";
import Link from "next/link";

export default function Navigation() {
    return (
        <div className="flex items-center justify-center fixed
        bottom-7 left-1/2 -translate-x-1/2 w-[94%] xs:justify-start xs:bottom-2">
            <NavigationMenu className="shadow-md rounded-sm p-2 xs:h-56 sm:h-69 md:h-64">
                <NavigationMenuList className="flex gap-6 xs:flex-col xs:h-44 xs:gap-3 sm:h-52 sm:gap-5 md:h-48 md:gap-4">
                    <NavigationMenuItem>
                        <NavigationMenuLink
                            render={<Link href="#" />}
                        >
                            <House className="size-4 md:size-5" />
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink
                        >
                            <Search className="size-4 md:size-5" />
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <Cat className="size-4 md:size-5" />
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink>
                            <MessageCircleMore className="size-4 md:size-5" />
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem >
                        <NavigationMenuLink>
                            <Ellipsis className="size-4 md:size-5" />
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
