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
        bottom-7 left-1/2 -translate-x-1/2 w-[94%]">
            <div className="shadow-md rounded-sm p-2">
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink
                                render={<Link href="#" />}
                            >
                                <House className="size-5 sm:size-7" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink
                            >
                                <Search className="size-5 sm:size-7" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Cat className="size-5 sm:size-7" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <MessageCircleMore className="size-5 sm:size-7" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem >
                            <NavigationMenuLink>
                                <Ellipsis className="size-5 sm:size-7" />
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}
