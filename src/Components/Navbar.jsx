import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import MobileSidebar from "./MobileSidebar";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [theme, setTheme] = useState('')
    const { user, loading, logOut } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const [rect, setRect] = useState(0)
    const [parentRect, setParentRect] = useState()

    const [hovered, setHovered] = useState()

    const htmlElem = document.documentElement;
    useEffect(() => {
        let initial = localStorage.getItem('theme')
        htmlElem.setAttribute("data-theme", initial)
        setTheme(initial)
    }, [htmlElem])
    function handleTheme() {
        if (theme == 'dark') {
            htmlElem.setAttribute("data-theme", "")
            localStorage.setItem('theme', '')
            setTheme('')
        }
        if (theme != "dark") {
            htmlElem.setAttribute("data-theme", 'dark')
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        }
    }

    useEffect(() => {
        const parent = document.getElementById('link-list')
        const aRect = parent.getBoundingClientRect()
        setParentRect(aRect)
        // initially setting:
        if (!rect) {
            const activeLink = parent.querySelector('.active')
            setRect(activeLink?.getBoundingClientRect())
        }

        function updateRect(e) {
            let currentOne = e.target
            let thisRect = currentOne.getBoundingClientRect()
            setRect(thisRect)
        }

        parent.addEventListener('click', updateRect)
        return () => parent.removeEventListener('click', updateRect)
    }, [rect])


    // useEffect(() => {
    //     const parent2 = document.getElementById('link-list')
    //     function hoverRect(e) {
    //         setHovered(e.target)
    //     }
    //     if (hovered) {
    //         hovered.classlist.push('bg-red-400')
    //     }
    //     parent2.addEventListener('mousemove', hoverRect)
    //     return () => parent2.removeEventListener('hover', hoverRect)

    // }, [hovered])


    const version = useSelector(state => state.versionData.version)

    function handleMobileSidebar() {
        setOpen(!open)
    }

    const links =
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-books" >Add Books</NavLink>
            <NavLink to="/borrowed" >Borrowed Books</NavLink>
            <NavLink to="/all-books" >All</NavLink>
        </>


    return (
        <nav>
            {/* For Desktop */}
            <div className="hidden md:flex bg-mid py-1 items-center px-1">
                <div className="flex flex-1 items-center gap-2">
                    <img src="/logo.png" className="w-12 " alt="broken logo" />
                    <Link to='/'>
                        <p className="text-xl font-semibold text-crim">Ocean Books</p>
                    </Link>
                    <p className="text-slate-500 text-xs">V{version}</p>
                </div>

                <ul className="flex pl-12 items-center justify-end gap-4 font-semibold p-2">
                    <div>
                        <button className="text-background text-3xl p-1 hover:text-crim duration-200 transition-colors rounded-full block" onClick={handleTheme}>
                            {theme == 'dark' ? <BsFillSunFill></BsFillSunFill>
                                :
                                <BsFillMoonFill></BsFillMoonFill>
                            }
                        </button>
                    </div>

                    <div id="link-list" className="relative flex bg-transparent z-20">
                        {
                            links
                        }

                        {
                            parentRect &&
                            <div className={`bg-red-500 -z-10 mt-px absolute rounded-md  `}
                                style={{
                                    width: Math.floor(rect?.width) + 6 || 0,
                                    height: Math.floor(rect?.height) || 0,
                                    transition: 'all 0.3s ease',
                                    left: Math.floor(rect?.left - parentRect.left) - 3 || 0
                                }}
                            ></div>}
                    </div>
                </ul>

                {
                    user?.email ?
                        <div className="flex items-center gap-2">
                            {loading || <img className="w-10 border block rounded-full" src={user?.photoURL} alt="" />}
                            <button onClick={logOut} className="px-2 text-high bg-background rounded-md py-1 w-fit">Logout</button>
                        </div>
                        :
                        <Link className="login" to="/login"><button className="px-2 py-2 text-high bg-background rounded-md h-full w-fit">Login</button></Link>
                }
            </div>



            {/* For Mobile */}
            <div className="md:hidden flex bg-mid py-1 items-center px-1">
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

            </div>
        </nav>
    );
};

export default Navbar;