"use client"
import { useEffect, useState } from "react"
import FormSection from '../../../smallfiles/FormSection'
import PreviewSection from '../../../smallfiles/PreviewSection'
import {ResumeInfoContext} from '../../../context/ResumeInfoContext';
import dummy from '../../../../dummy';

const page = ({params}) => {
  
  const [id,setId]=useState(params?.id);
  const [details,setDetails]=useState();
  const [resumeInfo,setResumeInfo]=useState();

  const getUserOfResume=async()=>{
    let res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getUserResume/${id}`);
    let data=await res.json();
    setDetails(data);
  }

  useEffect(()=>{
    getUserOfResume();
    setResumeInfo(dummy)
  },[id])

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>
      <div className=" grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        <FormSection />
        <PreviewSection />
      </div>
    </ResumeInfoContext.Provider>
  )
}
  
export default page