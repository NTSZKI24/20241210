
"use server"
export async function createForm(data: {
    name: string,
    description: string,
    age: string
}) {
    console.log(data)
}