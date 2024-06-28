"use client"

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    
    const {user,isSignedIn} = useUser();

  return (
    <header className=" p-3 px-5 flex justify-between shadow-md">
        <Link href={"/"}>
            <Image src="/logo.png" width={200} className=" cursor-pointer" height={100} />
        </Link>
        {
            isSignedIn? (<div className=" flex items-center gap-4">
                <Link href="/dashboard"><button className=" p-2 rounded-md btn">Dashboard</button></Link>
                <UserButton />
              </div>) : (
              <div>
                
                <Link href="/sign-in"><button className=" p-2 rounded-md btn">Get Started</button></Link>
              </div>
            )

        }
    </header>
  )
}

export default Header