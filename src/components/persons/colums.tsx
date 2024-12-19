import { ColumnDef } from "@tanstack/react-table"
import { access } from "fs"

export type Person = {
    id: number
    name: string
    discription: string
    age: number
}

export const columns: ColumnDef<Person>[] = [
    {
        accessorKey: "id",
        header: "Azonosító",
    },
    {
        accessorKey: "name",
        header: "Név"
    },
    {
        accessorKey: "discription",
        header: "Leírás"
    },
    {
        accessorKey: "age",
        header: "Kor"
    }
]