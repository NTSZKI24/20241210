
"use server"

import { formSchema, formSchemaType } from "@/schemas/form";
import { error } from "console";
import { PrismaClient } from "prisma/prisma-client"

const prisma = new PrismaClient();

export async function createForm(data: formSchemaType) {
    const validation = formSchema.safeParse(data);
    if (!validation.success ) {
        throw new Error("validation error")
    }

    const person = await prisma.person.create({
        data
    })

    if (!person) {
        throw new Error("Oops!")
    }

    return person.id
}