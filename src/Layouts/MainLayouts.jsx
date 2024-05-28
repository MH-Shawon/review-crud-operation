import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const MainLayouts=()=>{
    return(
        <div className="px-12 mt-3">
        <Navbar />
             <Outlet />
        </div>
    )}
export default MainLayouts;