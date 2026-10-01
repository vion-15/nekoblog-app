"use client"

import * as React from "react"
import { Ellipsis, Moon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

export default function Header() {
    return (
        <div className="border border-black py-5 px-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="gambar logo"
                        width={50}
                        height={50}
                    />
                    <h2 className="font-bold">NekoBlog-App</h2>
                </div>
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink>Home</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink>About</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink>Contact</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex">
                    <Button variant="ghost">
                        <Moon />
                    </Button>
                    <NavigationMenu className="md:hidden">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Ellipsis />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-48">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Contact</li>
                                        <li>
                                            <Button>
                                                Sign in
                                            </Button>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button className="hidden md:flex">
                        Sign in
                    </Button>
                </div>
            </div>
        </div>
    );
}