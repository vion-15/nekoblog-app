"use client"

import { Bell, LogIn, MessageCircleMore, Moon } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import Link from "next/link";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "./ui/popover";
import Datadummy from "../dummy/notification.json";
import React, { useCallback, useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Header() {
    const [dataDummy, setDataDummy] = useState(false);
    const dataList = Datadummy.length;

    useEffect(() => {
        if (dataList != 0) {
            setDataDummy(true);
        }
    }, [dataList]);



    return (
        <div className="border-b border-sidebar-border py-5 px-3 md:absolute md:top-0 md:left-0 md:w-full">
            <div className="flex items-center justify-between lg:mx-14">
                {/* Logo + Nama App */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="gambar logo"
                        width={50}
                        height={50}
                    />
                    <p className="font-bold text-base">NekoBlog</p>
                </div>

                {/* Searchbar + Mode Button + Sign in Button */}
                <div className="flex gap-3 lg:w-lg items-center justify-between">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-2">
                            <NavigationMenuItem>
                                <Popover>
                                    <PopoverTrigger render={<Button variant="outline" />}>
                                        <Bell className="size-5" />
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverHeader className="h-64 flex flex-col">
                                            <PopoverTitle className="p-2 flex justify-between">
                                                <p className="text-base">Notification</p>
                                                <Button variant="ghost" className="text-gray-500">All read</Button>
                                            </PopoverTitle>
                                            <Separator />
                                            <ScrollArea className="flex-1 min-h-0 pt-2">
                                                {Datadummy.map((item) => (
                                                    <React.Fragment key={item.id}>
                                                        <Card className="mb-3 mr-5 p-2 border border-gray-400">
                                                            <div className="flex items-center gap-2">
                                                                <Avatar>
                                                                    <AvatarFallback>CN</AvatarFallback>
                                                                </Avatar>
                                                                <p className="text-sm">{item.actor.username}, {item.message}</p>
                                                            </div>
                                                        </Card>
                                                    </React.Fragment>
                                                ))}
                                            </ScrollArea>
                                        </PopoverHeader>
                                    </PopoverContent>
                                </Popover>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Button variant="outline" className="h-9">
                                    <Moon className="size-5" />
                                </Button>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/auth/signin">
                                    <Button className="h-9 text-sm sm:hidden">
                                        <LogIn className="size-5" />
                                    </Button>
                                    <Button className="hidden h-9 text-sm sm:flex">
                                        Sign in
                                    </Button>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    );
}