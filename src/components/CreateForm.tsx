"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";



export default function CreateForm() {
    const formSchema = z.object({
        name: z.string(),
        description: z.string().min(10),
        age: z.number()
    })

    type formSchemaType = z.infer<typeof formSchema>

    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema)
    })

    return (
        <Form {...form}>
            <form className="p-4 my-5 bg-slate-600 rounded-xl text-white w-[400px] mx-auto">
                <FormField
                    name="name"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Név</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="description"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Leírás</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="age"
                    control={form.control}
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Életkor</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    )
}