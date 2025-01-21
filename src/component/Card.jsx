
import { useState } from 'react'
function Card() {
  const [number, setNumber] = useState(0)
  return (
    <div className=" flex  flex-col items-center justify-center">
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