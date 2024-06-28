"use client"
import { useContext } from "react"
import {ResumeInfoContext} from '../context/ResumeInfoContext';
import PersonalDetailsPreview from '../smallfiles/PersonalDetailsPreview';
import Summary from '../smallfiles/Summary';
import Experience from '../smallfiles/Experience';
import EducationalPreview from '../smallfiles/EducationalPreview';
import SkillsPreview from '../smallfiles/SkillsPreview';

const PreviewSection = () => {
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  return (
    <div className={`shadow-lg h-full  p-14 border-t-[20px] `} style={{
      borderColor:resumeInfo?.themeColor,
    }}>
        {/* personal details */}
        <PersonalDetailsPreview resumeInfo={resumeInfo}/>
        {/* summary */}
        <Summary resumeInfo={resumeInfo}/>
        
        {/* exp */}
        <Experience resumeInfo={resumeInfo}/>
        {/* education */}
        <EducationalPreview resumeInfo={resumeInfo}/>
        {/* skills */}
        <SkillsPreview resumeInfo={resumeInfo}/>
    </div>
  )
}

export default PreviewSection