"use client"

import { Bell, LogIn, Moon, Sun } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import Link from "next/link";
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger } from "./ui/popover";
import Datadummy from "../dummy/notification.json";
import React, { useState } from "react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import ThemeProvider from "@/actions/theme";

export default function Header() {

    const dataDummy = Datadummy.length > 0;
    const darkTheme = "dark";
    const defaultTheme = "default";
    const [mode, setMode] = useState(defaultTheme);

    return (
        <header className="border-b border-sidebar-border py-5 px-3 flex items-center justify-between">

            {/* Logo + Nama App */}
            <div className="flex items-center gap-2">
                {mode == "default" ? (
                    <Image
                        src="/logo.png"
                        alt="gambar logo"
                        width={50}
                        height={50}
                        className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-13 xl:h-13 2xl:w-16 2xl:h-16"
                    />
                ) : (
                    <Image
                        src="/logolight.png"
                        alt="gambar logo"
                        width={50}
                        height={50}
                        className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 xl:w-13 xl:h-13 2xl:w-16 2xl:h-16"
                    />
                )}
                <p className="font-bold text-[12px] sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">NekoBlog</p>
            </div>

            {/* Button */}
            <NavigationMenu>
                <NavigationMenuList className="flex items-center justify-between gap-2">
                    <NavigationMenuItem>
                        <Popover>
                            <PopoverTrigger render={<Button variant="outline" />} className="xl:py-5 2xl:py-6">
                                <Bell className="size-3 sm:size-4 lg:size-5 xl:size-7 2xl:size-9" />
                            </PopoverTrigger>
                            <PopoverContent className="w-55 h-65 sm:w-70 lg:w-96 lg:h-96 2xl:w-110 2xl:h-120">
                                <PopoverHeader className="h-full flex flex-col">
                                    <PopoverTitle className="p-1 2xl:p-3 flex justify-between items-center">
                                        <p className="text-[12px] lg:text-sm xl:text-lg 2xl:text-xl">Notification</p>
                                        <Button variant="ghost" className="text-gray-500 text-[12px] lg:text-sm xl:text-lg 2xl:text-xl">All read</Button>
                                    </PopoverTitle>
                                    <Separator />
                                    {dataDummy ? (
                                        <ScrollArea className="flex-1 min-h-0 pt-2">
                                            {Datadummy.map((item) => (
                                                <React.Fragment key={item.id}>
                                                    <Card className="mb-3 mr-5 p-2 border border-gray-400">
                                                        <div className="flex items-center gap-2">
                                                            <Avatar className="lg:p-3 xl:p-5 2xl:p-7">
                                                                <AvatarFallback className="text-[10px] lg:text-sm xl:text-base 2xl:text-lg">CN</AvatarFallback>
                                                            </Avatar>
                                                            <p className="text-[10px] lg:text-sm xl:text-base 2xl:text-lg">{item.actor.username}, {item.message}</p>
                                                        </div>
                                                    </Card>
                                                </React.Fragment>
                                            ))}
                                        </ScrollArea>
                                    ) : (
                                        <div className="h-full flex flex-col justify-center items-center gap-2">
                                            <Bell className="text-gray-400 lg:size-10 xl:size-13 2xl:size-16" />
                                            <p className="text-[10px] text-gray-400 lg:text-lg xl:text-xl 2xl:text-2xl">No notifications yet</p>
                                        </div>
                                    )}
                                </PopoverHeader>
                            </PopoverContent>
                        </Popover>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        {mode == "default" ? (
                            <Button variant="outline" className="h-8 xl:py-5 2xl:py-6" 
                            onClick={async () => {
                                try {
                                    await ThemeProvider(darkTheme);
                                    setMode(darkTheme);
                                } catch (error) {
                                    console.error("Failed to update theme", error)
                                }
                            }}>
                                <Moon className="size-3 sm:size-4 lg:size-5 xl:size-7 2xl:size-9" />
                            </Button>
                        ) : (
                            <Button variant="outline" className="h-8 xl:py-5 2xl:py-6" 
                            onClick={async () => {
                                try {
                                    await ThemeProvider(defaultTheme);
                                    setMode(defaultTheme);
                                } catch (error) {
                                    console.error("Failed to update theme", error);
                                }
                            }}>
                                <Sun className="size-3 sm:size-4 lg:size-5 xl:size-7 2xl:size-9" />
                            </Button>
                        )}
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/auth/signin">
                            <Button className="h-8 sm:hidden">
                                <LogIn className="size-3" />
                            </Button>
                            <Button className="hidden h-8 sm:flex xl:h-10 2xl:h-12">
                                <p className="text-sm xl:text-lg 2xl:text-xl">Sign In</p>
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}