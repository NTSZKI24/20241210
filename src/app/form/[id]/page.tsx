import { columns } from "@/components/persons/colums";
import { DataTable } from "@/components/persons/DataTable";

export default function Page() {
    return (
        <div>
            <DataTable
                columns={columns}
                data={[]}
            />
        </div>
    )
}