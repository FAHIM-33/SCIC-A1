import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./pages/Footer";


const MainLayout = () => {
    return (

        <div className="text-high bg-background">
            <header className="sticky z-20 top-0"><Navbar></Navbar></header>
            <main><Outlet></Outlet></main>
            <footer><Footer></Footer></footer>
        </div>

    );
};

export default MainLayout;