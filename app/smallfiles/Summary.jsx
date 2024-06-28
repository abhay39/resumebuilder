
const Summary = ({resumeInfo}) => {
  return (
    <div>
    <p className=" text-xs">
        {resumeInfo?.summery}
    </p>
    <hr className=" border-[1.5px] my-2" style={{
      borderColor:resumeInfo?.themeColor,
    }}  />
    </div>
  )
}

export default Summary