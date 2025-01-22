
import { useEffect, useState } from 'react'
function Card(props) {
  console.log("Card.jsx called")
  const [number, setNumber] = useState(0)
  function abc(){
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
    <div className=" flex  flex-col items-center justify-center">
    <div>{props.name}</div>
    <div className="card w-[500px] flex  items-center justify-center">
      <div onClick={() => setNumber(number-1)} className="cursor-pointer">-</div>
      <p1>{number}</p1>
      <div onClick={() => setNumber(number+1)} className="cursor-pointer">+</div>
      </div>
      <button className="border-[2px] flex items-center justify-center" onClick={()=>setNumber(0)}>Reset</button>
    </div>
   
  )
}
export default Card