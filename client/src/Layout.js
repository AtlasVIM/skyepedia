import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

export default function Layout() {
    return(
        <div>
            <div className="background">
            <Sidebar/>
            <Outlet/>
            </div>
        </div>
    )
}