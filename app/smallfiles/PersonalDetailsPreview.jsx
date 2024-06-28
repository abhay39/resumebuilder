import { Code, Github, Link2 } from "lucide-react"
import Link from "next/link"

const PersonalDetailsPreview = ({resumeInfo}) => {
  // console.log(resumeInfo)
  return (
    <div>
      <h2 className=" font-bold text-xl text-center" style={{
        color:resumeInfo?.themeColor,
      }}>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
      <h2 className=" text-center text-sm font-medium">{resumeInfo?.jobTitle}</h2>
      <h2 style={{
        color:resumeInfo?.themeColor,
      }}  className=" text-center font-normal text-xs">{resumeInfo?.address}</h2>

      <div style={{
          color:resumeInfo?.themeColor,
        }} className=" flex justify-between mt-2">
        <h2 style={{
          color:resumeInfo?.themeColor,
        }} className=" font-normal text-xs">{resumeInfo?.phone}</h2>
        <Link href={`${resumeInfo?.github}`}  target="_blank" className=" font-normal text-xs flex items-center"><Github size={16}/> Github</Link>
        <Link href={`${resumeInfo?.leetcode}`}  target="_blank" className=" font-normal text-xs flex items-center"><Code size={16}/> Leetcode</Link>
        <Link href={`${resumeInfo?.website}`}  target="_blank" className=" font-normal text-xs flex items-center"><Link2 size={16}/> Website </Link>
        
          <Link href={`mailto:${resumeInfo?.email}`} style={{
          color:resumeInfo?.themeColor,
        }} className=" font-normal text-xs">{resumeInfo?.email}</Link>
      </div>
      <hr className=" border-[1.5px] my-2" style={{
        borderColor:resumeInfo?.themeColor,
      }}  />
    </div>
  )
}

export default PersonalDetailsPreview