"use client"

import { Bell, LogIn, Moon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import Link from "next/link";
import { Popover, PopoverContent, PopoverHeader, PopoverTitle, PopoverTrigger } from "./ui/popover";
import Datadummy from "../dummy/notification.json";
import React from "react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function Header() {
    
    const dataDummy = Datadummy.length > 0;

    return (
        <header className="border-b border-sidebar-border py-5 px-3 flex items-center justify-between">

            {/* Logo + Nama App */}
            <div className="flex items-center gap-3">
                <Image
                    src="/logo.png"
                    alt="gambar logo"
                    width={50}
                    height={50}
                    className="w-9 h-9"
                />
                <p className="font-bold text-sm">NekoBlog</p>
            </div>

            {/* Button */}
            <NavigationMenu>
                <NavigationMenuList className="flex items-center justify-between gap-2">
                    <NavigationMenuItem>
                        <Popover>
                            <PopoverTrigger render={<Button variant="outline" />}>
                                <Bell className="size-4" />
                            </PopoverTrigger>
                            <PopoverContent className="w-60">
                                <PopoverHeader className="h-60 flex flex-col">
                                    <PopoverTitle className="p-2 flex justify-between items-center">
                                        <p className="text-sm">Notification</p>
                                        <Button variant="ghost" className="text-gray-500 text-sm">All read</Button>
                                    </PopoverTitle>
                                    <Separator />
                                    {dataDummy ? (
                                        <ScrollArea className="flex-1 min-h-0 pt-2">
                                            {Datadummy.map((item) => (
                                                <React.Fragment key={item.id}>
                                                    <Card className="mb-3 mr-5 p-2 border border-gray-400">
                                                        <div className="flex items-center gap-2">
                                                            <Avatar>
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>
                                                            <p className="text-[12px]">{item.actor.username}, {item.message}</p>
                                                        </div>
                                                    </Card>
                                                </React.Fragment>
                                            ))}
                                        </ScrollArea>
                                    ) : (
                                        <div className="h-full flex flex-col justify-center items-center gap-2">
                                            <Bell className="text-gray-400"/>
                                            <p className="text-sm text-gray-400">No notifications yet</p>
                                        </div>
                                    )}
                                </PopoverHeader>
                            </PopoverContent>
                        </Popover>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button variant="outline" className="h-8">
                            <Moon className="size-4" />
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/auth/signin">
                            <Button className="h-8 sm:hidden">
                                <LogIn className="size-4" />
                            </Button>
                            <Button className="hidden h-9 text-sm sm:flex">
                                Sign in
                            </Button>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}