"use server"

import { cookies } from "next/headers";

export default async function ThemeProvider(mode: string) {

    console.log(mode);

    if (mode == "dark" || mode == "default") {
        const cookieStore = await cookies();
        cookieStore.set("theme", mode);
        return true;
    }
    
    throw new Error("value mode is invalid");
}