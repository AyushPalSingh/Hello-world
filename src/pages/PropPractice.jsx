import { useNavigate } from "react-router-dom";

function PropPractice({setNumber}) {
    const navigate = useNavigate();
    return (

        <div className="flex flex-col items-center justify-center gap-4">
            <button onClick={() => setNumber((prev) => prev + 1)} 
            className="bg-blue-500 text-white p-2 rounded-md">
                Set Number
            </button>
            <button onClick={() => navigate("/counter")} 
            className="bg-blue-500 text-white p-2 rounded-md">
                Go to Counter
            </button>


        </div>
    )
}   

export default PropPractice;
