"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useState } from "react";
import AddNewResume from "../smallfiles/AddNewResume";
import ResumeItem from "../smallfiles/ResumeItem";

const page = () => {

  const {user}=useUser();
    const [details,setDetails]=useState([]);

    const getUserOfResume=async()=>{
        let res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getUserAllResume/${user?.primaryEmailAddress?.emailAddress}`);
        let data=await res.json();
        setDetails(data);
    }

    useEffect(()=>{
        getUserOfResume();
    },[user,details])

  return (
    <div className=" p-10 md:px-20 lg:px-32">
      <h2 className=" font-bold text-3xl">My Resume</h2>
      <p className=" font-semibold">Start creating AI resume to land your next job</p>
      <div className=" grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 py-6 mt-10">
        <AddNewResume />
        {
          details.map((item,index)=>{
            return (
              <ResumeItem key={index} item={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default page