import { CircleAlert } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

export default function DialogBoxConfirm() {
    return (
        <div className="bg-black/50 min-h-screen min-w-screen">
            <Card className="max-h-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%]">
                <CardHeader>
                    <CircleAlert className="w-full text-center text-red-700" size={30}/>
                </CardHeader>
                <CardContent className="border-t py-3">
                    <p className="text-sm lg:text-2xl">Do you want to leave this page?</p>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button>Cancel</Button>
                    <Button>Leave</Button>
                </CardFooter>
            </Card>
        </div>
    );
}