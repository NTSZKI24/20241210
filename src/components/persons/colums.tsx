"use client";

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "../ui/checkbox"
import { Button } from "../ui/button";
import { ArrowUpDown, CopyIcon, MoreHorizontalIcon, PencilIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useRouter } from "next/router";


export type Person = {
    id: number
    name: string
    description: string
    age: number
}

export const columns: ColumnDef<Person>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate") 
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false
    },
    
    {
        accessorKey: "id",
        header: "Azonosító",
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Név:
                <ArrowUpDown />
            </Button>
        ),
        enableSorting: true
    },
    {
        accessorKey: "discription",
        header: "Leírás"
    },
    {
        accessorKey: "age",
        header: "Kor"
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => (
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button variant="ghost">
                        <span className="sr-only">Open Menu</span>
                        <MoreHorizontalIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => navigator.clipboard.writeText(JSON.stringify(row.original))}
                    >
                        <CopyIcon />
                        Másolás
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                        className="cursor-pointer"
                        onClick={() => location.href = `/form/$(row.original.row}`}
                    >
                        <PencilIcon/>
                        Szerkesztés
                        
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
]