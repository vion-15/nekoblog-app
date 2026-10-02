"use client"

import { Moon, Search } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export default function Header() {
    return (
        <div className="border-b border-sidebar-border py-5 px-3">
            <div className="flex items-center justify-between lg:mx-14">
                {/* Logo + Nama App */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="gambar logo"
                        width={50}
                        height={50}
                    />
                    <p className="font-bold text-2xl md:text-lg lg:text-2xl">NekoBlog-App</p>
                </div>

                {/* Navigation for MD++ */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-5 lg:gap-8">
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-xl lg:text-2xl">Feed</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-xl lg:text-2xl">Explore</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-xl lg:text-2xl">Chat</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-xl lg:text-2xl">Follow</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Searchbar + Mode Button + Sign in Button */}
                <div className="flex gap-3 lg:w-3xl items-center justify-between">
                    <InputGroup className="hidden md:flex lg:max-w-3xl h-10 py-5">
                        <InputGroupInput placeholder="Search..." className="placeholder:text-lg" />
                        <InputGroupAddon>
                            <Search className="lg:size-8!"/>
                        </InputGroupAddon>
                    </InputGroup>
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-2">
                            <NavigationMenuItem>
                                <Button variant="outline" className="h-12 w-16">
                                    <Moon className="size-5!"/>
                                </Button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button className="h-12 lg:text-lg w-fit">
                                    Sign in
                                </Button>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    );
}