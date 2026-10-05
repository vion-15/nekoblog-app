import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { House, MessageCircleMore, Search, UserPlus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      Landing Page

      <div className="border-b p-2 flex items-center justify-center fixed
      bottom-16 left-12 md:hidden w-fit">
        <div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-10">
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<Link href="#" />}
                >
                  <House className="size-8!" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                >
                  <Search className="size-8!" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink>
                  <MessageCircleMore className="size-8!" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem >
                <NavigationMenuLink>
                  <UserPlus className="size-8!" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
