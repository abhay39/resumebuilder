import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react';
import PersonalDetailsForm from '../smallfiles/PersonalDetailsForm';
import { act, useState } from 'react';

const FormSection = () => {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(false);

  const handleEnbaleNext=(val)=>{
    setEnableNext(val);
  }
  
  return (
    <div>
      <div className=' flex select-none justify-between items-center'>
        <button className='border-[1.4px] p-2 flex gap-1 rounded-md text-black'><LayoutGrid /> Theme</button>
        <div className=' flex items-center justify-between gap-3'>
          {
            activeFormIndex>1 && (
              <button onClick={()=>{
                setActiveFormIndex(activeFormIndex-1)
              }} className=' flex btn p-2 rounded-md text-white gap-1 items-center'><ArrowLeft size={20}/></button>
            )
          }
          <button disabled={!enableNext} onClick={()=>{
            setActiveFormIndex(activeFormIndex+1)
          }} className={`flex ${enableNext?"btn":"bg-gray-400"} p-2 rounded-md text-white gap-1 items-center`}>Next <ArrowRight size={20}/></button>
        </div>
      </div>
      {/* personal details */}
      {activeFormIndex==1 && (<PersonalDetailsForm  enableNext={handleEnbaleNext}/>)}


      {/* summary */}

      {/* exp */}

      {/* education */}

      {/* skills */}

    </div>
  )
}

export default FormSection