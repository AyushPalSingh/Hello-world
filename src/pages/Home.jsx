import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-4">
            <NavLink to="/login" className="bg-blue-500 text-white p-2 rounded-md">Login</NavLink>

            <NavLink to="/prop-practice" className="bg-blue-500 text-white p-2 rounded-md">Prop Practice</NavLink>
            <NavLink to="/counter" className="bg-blue-500 text-white p-2 rounded-md">Counter</NavLink>
        </div>


    )
}

export default Home;
