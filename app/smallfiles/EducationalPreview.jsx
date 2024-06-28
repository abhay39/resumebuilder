
const EducationalPreview = ({resumeInfo}) => {
  return (
    <div className=" my-6">
        <h2 className=" text-center font-bold text-sm mb-2" style={{
            color:resumeInfo?.themeColor,
        }}>Education</h2>
        <hr style={{
            borderColor:resumeInfo?.themeColor,
        }}/>

      {
        resumeInfo?.education?.map((item,index)=>{
            return(
                <div key={index} className=" my-5">
                    <h2 style={{
                        color:resumeInfo?.themeColor,
                    }} className=" font-bold text-sm">{item.universityName} </h2>
                    <h2  className=" flex justify-between text-sm">{item.degree} in {item.major}
                        <span>{item.startDate} - {item.endDate}</span>
                    </h2>
                    <p className=" text-xs my-2">
                        {item.description}
                    </p>
                    <hr className=" border-[1.5px] my-2" style={{
                        borderColor:resumeInfo?.themeColor,
                    }}  />
                </div>
            )
        })
      }
    </div>
  )
}

export default EducationalPreview