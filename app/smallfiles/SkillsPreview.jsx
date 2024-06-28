
const SkillsPreview = ({resumeInfo}) => {
  return (
    <div className=" my-2">
        <h2 className=" text-center font-bold text-sm mb-2" style={{
            color:resumeInfo?.themeColor,
        }}>Skills</h2>
        <hr style={{
            borderColor:resumeInfo?.themeColor,
        }}/>

        <div className="grid grid-cols-2 gap-3 my-4">
            {
                resumeInfo?.skills?.map((item,index)=>{
                    return(
                        <div key={index} className=" my-2 flex items-center justify-between">
                            <h2 className=" font-bold text-xs">{item.name}</h2>
                            <div className=" h-2 bg-gray-200 w-[120px]">
                                <div className=" h-2"
                                    style={{
                                        backgroundColor:resumeInfo?.themeColor,
                                        width:item.rating+'%',
                                    }}
                                >

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default SkillsPreview