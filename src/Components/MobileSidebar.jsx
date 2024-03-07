import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const MobileSidebar = ({ logOut, theme, handleTheme, links }) => {
    return (
        <>
            <button onClick={logOut} className="w-4/5 mx-auto text-background bg-high block btn py-1">Logout</button>
            <ul className="whitespace-nowrap flex flex-col items-center justify-end gap-4 font-semibold p-2">
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
        </>
    );
};

export default MobileSidebar;