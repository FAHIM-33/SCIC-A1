import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./pages/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (

        <div className="text-high bg-background">
            <header className="sticky z-20 top-0"><Navbar></Navbar></header>
            <main><Outlet></Outlet></main>
            <footer><Footer></Footer></footer>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
                toastOptions={{
                    className: '',
                    style: {
                        borderRadius: '0 0 0 10px',
                        background: 'var(--color-high)',
                        padding: '',
                        color: 'var(--color-background)',
                    },
                }}
            />
        </div>

    );
};

export default MainLayout;