"use client"
import { useUser } from "@clerk/nextjs";
import { Circle, Loader2, PlusCircleIcon } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react"
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';


const AddNewResume = () => {
  const {user}=useUser();

  const [data,setData]=useState("")
  const [loading,setLoading]=useState(false)
  const router=useRouter();

  const [openModal,setOpenModal]=useState(false);

  const addNewResume=async()=>{
    setLoading(true)
    let res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addUserResume`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        resumeId:uuidv4(),
        userEmail:user?.primaryEmailAddress?.emailAddress,
        userName:user?.fullName,
        resumeTitle:data
      })
    })
    const status=res.status;
    res=await res.json();
    if(status===201){
      toast.success("Resume added successfully")
      router.push(`/dashboard/${res.resumeId}/edit`)
      handleOpenModel()
    }else{
      toast.error(res)
    }
    setLoading(false)
    setData("")
  }

  const handleOpenModel=()=>{
    setOpenModal(!openModal)
  }

  const isDisabled=!data;

  return (
    <>
      <div className=" flex font-bold items-center flex-col h-[200px] justify-center cursor-pointer hover:scale-105 transition-all hover:shadow-md rounded-md bg-slate-50 gap-4 border-dashed" onClick={handleOpenModel}>
        <PlusCircleIcon />
        <h2>Add New Resume</h2>
      </div>
      {
        openModal && (
          <div className="fixed top-0 left-0 w-full h-full z-50 bg-opacity-50 bg-black/50 flex items-center justify-center">
            <div className=" bg-slate-50 px-6 py-6 rounded-md w-[90%] md:w-[400px] flex flex-col gap-2">
              <h1 className=" font-bold text-xl">Create New Resume</h1>
              <p className=" text-sm -mt-2">Add a title for your new resume</p>
              <input onChange={(e)=>{
                setData(e.target.value)
              }} type="text" name="" placeholder="Eg: Full stack developer" className=" px-2  border-[2px] rounded-md border-slate-800 w-full py-2" id="" />
              <div className=" flex items-end justify-end gap-3">
                <button className=" bg-red-600 px-2 py-2 text-white rounded-md" onClick={handleOpenModel}>Cancel</button>
                <button disabled={loading || isDisabled} onClick={addNewResume} className={`${loading || isDisabled ?" bg-slate-400 ":"btn"} px-2 py-2 text-white rounded-md`}>{
                    loading ? <Loader2 className=" animate-spin" /> :"Create"
                  }</button>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default AddNewResume