
"use client"

import DialogBoxConfirm from "@/components/DialogBoxConfirm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOffIcon } from "lucide-react";
import Form from "next/form";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
    email: z
        .string()
        .max(254, "Maximum email is 254 characters"),
    password: z
        .string()
        .min(8, "Minimal password is 8 characters")
        .max(16, "Maximal password is 16 characters"),
    confirm: z
        .string(),
})
    .refine((data) => data.password === data.confirm, {
        error: "Password don't match",
        path: ["confirm"],
    })

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isAlertDialog, setIsAlertDialog] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirm: "",
        },
    })

    const beforeUnloadHandler = (event: BeforeUnloadEvent) => {
        event.preventDefault();
        event.returnValue = true;
    }

    const { isDirty } = form.formState;

    useEffect(() => {
        history.pushState(null, "");
    }, []);

    const handlePopstate = useCallback(() => {
        if (isDirty) {
            setIsAlertDialog(true);
        }
    }, [isDirty])

    useEffect(() => {

        window.addEventListener("popstate", handlePopstate);

        if (isDirty) {
            window.addEventListener("beforeunload", beforeUnloadHandler);
        }

        return () => {
            window.removeEventListener("beforeunload", beforeUnloadHandler);
            window.removeEventListener("popstate", handlePopstate);
        }

    }, [isDirty, handlePopstate])

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
    }

    return (
        <>
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
                        <CardTitle className="flex items-center">
                            <p className="text-xl">Create new account</p>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form action="" onSubmit={form.handleSubmit(onSubmit)} id="form-signup">
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
                                                placeholder="Your@email.com"
                                                autoComplete="off"
                                                className="h-10 placeholder:text-sm text-sm lg:text-base lg:placeholder:text-base"
                                                type="email"
                                                required
                                            />
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} className="lg:text-xl" />
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
                                                    type={showPassword ? "text" : "password"}
                                                />
                                                <InputGroupAddon align="inline-end">
                                                    {showPassword ? <Button variant="ghost" onClick={() => setShowPassword(false)}>
                                                        <Eye className="size-4" />
                                                    </Button> : <Button variant="ghost" onClick={() => setShowPassword(true)}>
                                                        <EyeOffIcon className="size-4" />
                                                    </Button>}
                                                </InputGroupAddon>
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name="confirm"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <FieldLabel htmlFor="form-confirm" className="text-sm lg:text-lg">
                                                Confirm Password:
                                            </FieldLabel>
                                            <InputGroup className="h-10">
                                                <InputGroupInput
                                                    {...field}
                                                    id="form-confirm"
                                                    aria-invalid={fieldState.invalid}
                                                    placeholder="Confirm password"
                                                    autoComplete="off"
                                                    className="placeholder:text-sm text-sm lg:text-base lg:placeholder:text-base"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                />
                                                <InputGroupAddon align="inline-end">
                                                    {showConfirmPassword ? <Button variant="ghost" onClick={() => setShowConfirmPassword(false)}>
                                                        <Eye className="size-4" />
                                                    </Button> : <Button variant="ghost" onClick={() => setShowConfirmPassword(true)}>
                                                        <EyeOffIcon className="size-4" />
                                                    </Button>}
                                                </InputGroupAddon>
                                            </InputGroup>
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                            </FieldGroup>
                        </Form>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                        <Button
                            type="submit"
                            form="form-signup"
                            className="w-full h-9 text-sm lg:text-base lg:h-10"
                        >
                            Sign up
                        </Button>
                        <h2 className="text-sidebar-ring text-sm lg:text-base">--Or--</h2>
                        <Button className="w-full h-9 text-sm lg:text-base lg:h-10">
                            Sign up with Google
                        </Button>
                        <p className="text-sm mt-4 lg:text-base">Already have an account?
                            <Link href="/auth/signin" className="text-chart-2 hover:text-chart-5"> Sign in</Link>
                        </p>
                    </CardFooter>
                </Card>
            </div>
            {/* <div className="fixed">
                <DialogBoxConfirm />
            </div> */}
        </>
    );
}