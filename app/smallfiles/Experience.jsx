
const Experience = ({resumeInfo}) => {
  return (
    <div className=" my-6">
        <h2 className=" text-center font-bold text-sm mb-2" style={{
            color:resumeInfo?.themeColor,
        }}>Professional Experience</h2>
        <hr style={{
            borderColor:resumeInfo?.themeColor,
        }}/>
        {
            resumeInfo?.experience?.map((item,index)=>{
                return(
                    <div key={index} className=" my-5">
                        <h2 style={{
                        color:resumeInfo?.themeColor,
                    }} className=" font-bold text-sm">{item.title}</h2>
                        <h2 className=" flex justify-between text-sm">{item.companyName}, {item.city}, {item.state}
                            <span>{item.startDate} - {item.currentlyWorking?"Present":item.endDate}</span>
                        </h2>
                        <p className=" text-xs my-2">
                            {item.workSummery}
                        </p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Experience