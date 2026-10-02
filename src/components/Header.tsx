"use client"

import { Ellipsis, Moon, Search } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export default function Header() {
    return (
        <div className="border border-black py-5 px-3">
            <div className="flex items-center justify-between lg:mx-14">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="gambar logo"
                        width={50}
                        height={50}
                    />
                    <p className="font-bold text-2xl">NekoBlog-App</p>
                </div>
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-5">
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-xl">Home</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-xl">About</NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink className="text-xl">Contact</NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex gap-2 lg:w-3xl items-center">
                    <InputGroup className="hidden md:flex lg:max-w-3xl h-10">
                        <InputGroupInput placeholder="Search..." />
                        <InputGroupAddon>
                            <Search />
                        </InputGroupAddon>
                    </InputGroup>
                    <Button variant="outline" className="h-12 w-12">
                        <Moon />
                    </Button>
                    <NavigationMenu className="md:hidden h-12 w-12">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>
                                    <Ellipsis />
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-60 flex flex-col items-center gap-2">
                                        <Button variant="ghost" className="w-60">
                                            <li>Home</li>
                                        </Button>
                                        <Button variant="ghost" className="w-60">
                                            <li>About</li>
                                        </Button>
                                        <Button variant="ghost" className="w-60">
                                            Contact
                                        </Button>
                                        <li>
                                            <Button className="w-60">
                                                Sign in
                                            </Button>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button className="hidden md:flex h-12 lg:text-xl">
                        Sign in
                    </Button>
                </div>
            </div>
        </div>
    );
}