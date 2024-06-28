import { useContext } from "react"
import { ResumeInfoContext } from "../context/ResumeInfoContext"

const PersonalDetailsForm = ({enableNext}) => {
  const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext);


  const handleInputChnage=(e)=>{
    enableNext(false);
    const {name,value}=e.target;
    setResumeInfo({...resumeInfo,[name]:value});
  }

  const onSave=(e)=>{
    e.preventDefault();
    enableNext(true);
  }

  return (
    <div className=" p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className=" font-bold text-lg">Personal Details</h2>
      <p>Get Started with the basic information</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div className=" flex flex-col">
            <label htmlFor="firstName" className=" text-sm">First Name</label>
            <input placeholder="Ex. Abhay" required className=" bg-slate-100 p-2 rounded-md" type="text" name="firstName" id="" onChange={handleInputChnage} />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="lastName" className=" text-sm">Last Name</label>
            <input placeholder="Ex. Gupta" required className=" bg-slate-100 p-2 rounded-md" type="text" name="lastName" id="" onChange={handleInputChnage} />
          </div>
          
          <div className=" col-span-2 flex flex-col">
            <label htmlFor="jobTitle" className=" text-sm">Job Title</label>
            <input placeholder="Ex. Software Engineer" required className=" bg-slate-100 p-2 rounded-md" type="text" name="jobTitle" id="" onChange={handleInputChnage} />
          </div>

          <div className=" col-span-2 flex flex-col">
            <label htmlFor="address" className=" text-sm">Address</label>
            <input placeholder="Ex. Jeetpur, Bara, Nepal" required className=" bg-slate-100 p-2 rounded-md" type="text" name="address" id="" onChange={handleInputChnage} />
          </div>

          <div className="  flex flex-col">
            <label htmlFor="phone" className=" text-sm">Phone</label>
            <input placeholder="Ex. 9876543210 " required className=" bg-slate-100 p-2 rounded-md" type="number" name="phone" id="" onChange={handleInputChnage} />
          </div>

          <div className="  flex flex-col">
            <label htmlFor="email" className=" text-sm">Email</label>
            <input placeholder="Ex. a@b.com" required className=" bg-slate-100 p-2 rounded-md" type="email" name="email" id="" onChange={handleInputChnage} />
          </div>

          <div className="  flex flex-col">
            <label htmlFor="website" className=" text-sm">Personal Website</label>
            <input placeholder="Ex. abhayguptaworld.vercel.app"  className=" bg-slate-100 p-2 rounded-md" type="url" name="website" id="" onChange={handleInputChnage} />
          </div>

          <div className="  flex flex-col">
            <label htmlFor="github" className=" text-sm">Github</label>
            <input placeholder="Ex. https://github.com/abhay39"  className=" bg-slate-100 p-2 rounded-md" type="url" name="github" id="" onChange={handleInputChnage} />
          </div>

          <div className="  flex flex-col col-span-2">
            <label htmlFor="leetcode" className=" text-sm">Coding Profile</label>
            <input placeholder="Ex. https://leetcode.com/u/abhaytechhub/" required className=" bg-slate-100 p-2 rounded-md" type="url" name="leetcode" id="" onChange={handleInputChnage} />
          </div>
        </div>

        <div className="mt-3 flex justify-end">
          <button  type="submit" className=" btn p-2 rounded-md w-[120px]">Save</button>
        </div>

      </form>
    </div>
  )
}

export default PersonalDetailsForm