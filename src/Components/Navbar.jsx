import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
// import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
    const [theme, setTheme] = useState("")
    // const { user, loading, logOut } = useContext(AuthContext)
    // const [open, setOpen] = useState(false)


    const htmlElem = document.documentElement;
    function handleTheme() {
        if (theme == 'dark') {
            htmlElem.setAttribute("data-theme", "")
            setTheme('')
        }
        if (theme != "dark") {
            htmlElem.setAttribute("data-theme", 'dark')
            setTheme('dark')
        }
    }

    const loading = false
    const user = {}
    user.PhotoURL = 'shit'

    // function handleMobileSidebar() {
    //     setOpen(!open)
    // }

    // const links = <>
    //     <NavLink to="/"><li>Home</li></NavLink>
    //     {
    //         user?.role === 'admin' ?
    //             <>
    //                 <NavLink to="/addBooks"><li>Add Books</li></NavLink>

    //                 <NavLink to="/allBooks"><li>All Books</li></NavLink>
    //             </>
    //             :
    //             ''
    //     }
    //     <NavLink to="/borrowed"><li>Borrowed Books</li></NavLink>
    // </>

    const links = <>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="/addBooks"><li>Add Books</li></NavLink>

        <NavLink to="/allBooks"><li>All Books</li></NavLink>
        <NavLink to="/borrowed"><li>Borrowed Books</li></NavLink>
    </>

    return (
        <nav>
            {/* For Desktop */}
            <div className="hidden md:flex bg-mid py-1 items-center px-1">
                <div className="flex flex-1 items-center gap-2">
                    <img src="/logo.png" className="w-12 " alt="broken logo" />
                    <p className="text-xl font-semibold text-crim">Ocean Books</p>
                </div>

                <ul className="flex pl-12 items-center justify-end gap-4 font-semibold p-2">
                    <div>
                        <button className="text-background text-3xl p-1 btn rounded-full block" onClick={handleTheme}>
                            {theme == 'dark' ? <BsFillSunFill></BsFillSunFill>
                                :
                                <BsFillMoonFill></BsFillMoonFill>
                            }
                        </button>
                    </div>
                    {
                        links
                    }

                </ul>

                {
                    user?.email ?
                        <div className="flex items-center gap-2">
                            {loading || <img className="w-10 border block rounded-full" src={user?.photoURL} alt="" />}
                            <button onClick={logOut} className="px-2 text-high bg-background btn py-1 w-fit">Logout</button>
                        </div>
                        :
                        <Link className="login" to="/login"><button className="px-2 py-2 text-high bg-background btn h-full w-fit">Login</button></Link>
                }
            </div>



            {/* For Mobile */}
            {/* <div className="md:hidden flex bg-mid py-1 items-center px-1">
                <div className="flex flex-1 items-center gap-1 ">
                    <img src="/logo.png" className="w-8" alt="broken logo" />
                    <p className="text-lg font-semibold text-crim">Ocean Books</p>
                </div>

                {
                    user?.email ?
                        <div className="flex items-center gap-2">
                            {loading || <img className="w-8 border block rounded-full" src={user?.photoURL} alt="" />}
                            <div id="sidebar" className='relative'>

                                <CiMenuFries onClick={handleMobileSidebar} className="text-background text-2xl"></CiMenuFries>

                                <section className={`absolute z-50 bg-low ${open ? 'block' : 'hidden'} right-0 top-8  rounded-bl-lg overflow-hidden p-4`}>

                                    <MobileSidebar
                                        logOut={logOut}
                                        theme={theme}
                                        handleTheme={handleTheme}
                                        links={links}
                                    ></MobileSidebar>

                                </section>
                            </div>
                        </div>
                        :
                        <Link className="login" to="/login"><button className="px-2 py-1 text-high bg-background btn h-full w-fit">Login</button></Link>
                }

            </div> */}
        </nav>
    );
};

export default Navbar;