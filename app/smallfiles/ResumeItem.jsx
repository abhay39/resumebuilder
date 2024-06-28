import { Notebook } from "lucide-react"
import Link from "next/link"


const ResumeItem = ({item}) => {
  return (
    <Link href={`dashboard/${item.resumeId}/edit`}>
        <div className=" p-14 bg-secondary flex items-center justify-center cursor-pointer rounded-md bg-slate-50 gap-4 border-dashed h-[200px]">
            <Notebook />
        </div>
        <h2 className=" text-center font-semibold my-1">{item.resumeTitle}</h2>
    </Link>
  )
}

export default ResumeItem