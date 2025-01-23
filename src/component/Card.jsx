
import { useEffect, useState } from 'react'
function Card(props) {
  console.log("Card.jsx called")
  const [number, setNumber] = useState(props.initial)
  function abc() {
    setNumber(number+1)
  }
  
  useEffect(() => {
    // abc()
    console.log("useEffect called")
    return () => {     // caDR -> USEEFFECT BODY-> CHANGES -> <RENDER-> CLEANUP->USEFFECT CALLBACK BODY

    console.log("useEffect cleanup")
    }
  }, [number]) //dependency array
  return (
    //style this counter component
    <div className=" flex  flex-col items-center justify-center">
    <div>
      <h1 className="text-2xl font-bold">{props.name}</h1>
    </div>
    <div className="w-[250px] card flex  items-center justify-between bg-blue-500 rounded-md">
      <div onClick={() => setNumber(number-1)} className="cursor-pointer text-white p-2 rounded-md border-r-[2px] border-white">
        -
      </div>
      <p1 className="text-white p-2 rounded-md text-2xl border-white">{number}</p1>
      <div onClick={() => setNumber(number+1)} className="cursor-pointer text-white p-2 rounded-md border-l-[2px] border-white">
        +
      </div>
      </div>


      <button className="border-[2px] flex items-center justify-center bg-red-500 text-white p-2 rounded-md" onClick={()=>setNumber(0)}>Reset</button>
    </div>
   
  )
}
export default Card