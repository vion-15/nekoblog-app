"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod"
import Form from "next/form"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { EyeOffIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const formSchema = z.object({
    email: z
        .string()
        .max(254, "Maximum email is 254 characters"),
    password: z
        .string()
        .min(8, "Minimal password is 8 characters")
        .max(16, "Maximal password is 16 characters")
})

export default function Signin() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
    }

    return (
        <div className="m-4 min-h-fit flex md:gap-2 md:mx-10 lg:mx-16 lg:gap-8 xl:min-h-[80vh] justify-center items-center">
            <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-1">
                <Image 
                    src="/logo.png" 
                    alt="gambar logo" 
                    width={125}
                    height={125}
                    className="md:w-16 md:h-16 lg:w-20 lg:h-20"    
                />
                <p className="text-base font-bold lg:text-lg">Connect, Share and Discover</p>
                <p className="text-chart-3 text-sm text-center lg:text-base">A place to share your thoughts, connect with others, and 
                    discover something new every day.</p>
            </div>
            <Card className="w-full max-h-fit shadow-xl sm:max-w-96 md:max-w-full xl:max-w-125">
                <CardHeader className="flex justify-center">
                    <CardTitle className="flex flex-col items-center">
                        <p className="text-xl lg:text-2xl">Welcome</p>
                        <p className="text-sm lg:text-lg">to NekoBlog-App</p>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form action="" onSubmit={form.handleSubmit(onSubmit)} id="form-signin">
                        <FieldGroup>
                            <Controller
                                name="email"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="email-form" className="text-sm lg:text-lg">
                                            Email:
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="email-form"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="your@email.com"
                                            autoComplete="off"
                                            className="h-10 placeholder:text-sm text-sm lg:text-base lg:placeholder:text-base"
                                            type="email"
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="password"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="password-form" className="text-sm lg:text-lg">
                                            Password:
                                        </FieldLabel>
                                        <InputGroup className="h-10">
                                            <InputGroupInput
                                                {...field}
                                                id="password-form"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Password"
                                                autoComplete="off"
                                                className="placeholder:text-sm text-sm lg:text-base lg:placeholder:text-base"
                                                type="password"
                                            />
                                            <InputGroupAddon align="inline-end">
                                                <EyeOffIcon className="size-4"/>
                                            </InputGroupAddon>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </InputGroup>
                                        <FieldDescription className="flex justify-end">
                                            <Link href="#" className="no-underline! text-[12px] lg:text-sm">
                                                Forgot Password?
                                            </Link>
                                        </FieldDescription>
                                    </Field>
                                )}
                            />
                        </FieldGroup>
                    </Form>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                    <Button
                        type="submit"
                        form="form-signin"
                        className="w-full h-9 text-sm lg:text-base lg:h-10"
                    >
                        Sign in
                    </Button>
                    <h2 className="text-sidebar-ring text-sm lg:text-base">--Or--</h2>
                    <Button className="w-full h-9 text-sm lg:text-base lg:h-10">
                        Sign in with Google
                    </Button>
                    <p className="text-sm mt-4 lg:text-base">Don&apos;t have an account?
                        <Link href="/auth/signup" className="text-chart-2 hover:text-chart-5"> Sign up</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}