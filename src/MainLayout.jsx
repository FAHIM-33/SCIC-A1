import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./pages/Footer";


const MainLayout = () => {
    return (

        <div className="text-high bg-background">
            <header><Navbar></Navbar></header>
            <main><Outlet></Outlet></main>
            <footer><Footer></Footer></footer>

        </div>

    );
};

export default MainLayout;