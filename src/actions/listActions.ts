"use server";

import { person, PrismaClient } from "prisma/prisma-client";


export async function getPersons(): Promise<person[]> {
    const prisma = new PrismaClient();

    return new Promise((reslove, reject) => {
        prisma.person.findMany()
            .then((data) => {
                reslove(data)
            })
            .finally(() => {
                prisma.$disconnect()
            })
    })
}