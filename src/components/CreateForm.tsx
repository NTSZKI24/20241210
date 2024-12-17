"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ImSpinner2 } from "react-icons/im"
import { toast } from "@/hooks/use-toast";
import { createForm } from "@/actions/formActions";



export default function CreateForm() {
    const formSchema = z.object({
        name: z.string(),
        description: z.string().min(10),
        age: z.string()
    })

    type formSchemaType = z.infer<typeof formSchema>

    const form = useForm<formSchemaType>({
        resolver: zodResolver(formSchema)
    })

    async function onSubmit(values: formSchemaType) {
        try {
            await createForm(values)
            toast({
                title: "Sikeres mentés",
            })
        }catch (error) {
            toast({
                title: "Hiba",
                variant: "destructive"
            })  
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 my-5 bg-slate-600 rounded-xl text-white w-[400px] mx-auto">
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
                <Button 
                    className="w-full mt-4"
                    onClick={() => {
                        form.handleSubmit(onSubmit)
                    }}
                >
                    {!form.formState.isSubmitting && (
                        <span>Küldés</span>
                    )}
                    {form.formState.isSubmitting && (
                        <ImSpinner2 className="animate-spin" />
                    )}
                </Button>
            </form>
        </Form>
    )
}