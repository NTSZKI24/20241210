import { getPersons } from "@/actions/listActions"
import { columns } from "@/components/persons/colums"
import { DataTable } from "@/components/persons/DataTable"

export default async function Page() {
    
    const persons = await getPersons()
    console.log(persons)
    return (
        <div>
            <DataTable
                columns={columns}
                data={persons}
            />
        </div>
    )
}