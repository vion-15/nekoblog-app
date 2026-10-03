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
        <div className="m-4 min-h-screen flex md:items-center md:gap-3 md:mx-14 
        lg:mx-80 lg:gap-10">
            <div className="hidden md:flex w-[50%] md:flex-col md:items-center md:gap-4">
                <Image 
                    src="/logo.png" 
                    alt="gambar logo" 
                    width={125}
                    height={125}
                    className="w-32 h-32 lg:w-40 lg:h-40"    
                />
                <h1 className="text-2xl font-bold lg:text-4xl">Connect, Share and Discover</h1>
                <h3 className="text-chart-3 text-base lg:text-lg">A place to share your thoughts, connect with others, and 
                    discover something new every day.</h3>
            </div>
            <Card className="w-full max-h-fit md:w-[50%] shadow-xl">
                <CardHeader className="flex justify-center">
                    <CardTitle className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold lg:text-4xl">Welcome</h1>
                        <h2 className="text-lg lg:text-2xl">to NekoBlog-App</h2>
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
                                        <FieldLabel htmlFor="email-form" className="text-xl lg:text-3xl">
                                            Email:
                                        </FieldLabel>
                                        <Input
                                            {...field}
                                            id="email-form"
                                            aria-invalid={fieldState.invalid}
                                            placeholder="your@email.com"
                                            autoComplete="off"
                                            className="h-10 w-fit lg:h-16 lg:placeholder:text-xl lg:text-xl!"
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
                                        <FieldLabel htmlFor="password-form" className="text-xl lg:text-3xl">
                                            Password:
                                        </FieldLabel>
                                        <InputGroup className="h-10 w-fit lg:h-16">
                                            <InputGroupInput
                                                {...field}
                                                id="password-form"
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Password"
                                                autoComplete="off"
                                                className="lg:placeholder:text-xl lg:text-xl!"
                                                type="password"
                                            />
                                            <InputGroupAddon align="inline-end">
                                                <EyeOffIcon className="size-4 lg:size-7"/>
                                            </InputGroupAddon>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </InputGroup>
                                        <FieldDescription className="flex justify-end">
                                            <Link href="#" className="no-underline! text-base lg:text-lg">
                                                Forgot Password ?
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
                        className="w-full h-11 text-lg lg:h-14 lg:text-xl"
                    >
                        Sign in
                    </Button>
                    <h2 className="text-sidebar-ring text-base lg:text-lg">--Or--</h2>
                    <Button className="w-full h-11 text-lg lg:h-14 lg:text-xl">
                        Sign in with Google
                    </Button>
                    <p className="text-base mt-4 lg:text-lg">Don&apos;t have an account?
                        <Link href="/auth/signup" className="text-chart-2 hover:text-chart-5"> Sign up</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}