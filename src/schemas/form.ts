import { z } from "zod"

export const formSchema = z.object({
    name: z.string(),
    description: z.string().min(10),
    age: z.coerce.number().min(15)
})

export type formSchemaType = z.infer<typeof formSchema>