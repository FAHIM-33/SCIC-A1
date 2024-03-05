import { BsGithub, BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="bg-[#111] pt-5 pb-4 text-white">
            <div className="text-center flex justify-center items-center gap-1">
                <figure className="">
                    <img src="/logo.png" className="mx-auto -m-2 w-6" alt="" /> 
                </figure>
                <p className="font-semibold md:text-sm text-xs pb-1">
                    Ocean <span className="text-crim">Book</span>
                </p>
            </div>
            <div className="flex justify-center items-center mt-4 text-sm">
            </div>
            <p className="text-center md:text-base text-xs">
                Address: 1234 Al-Elm Street, Cityville, UAE, Qatar
            </p>
            <p className="text-center mt-4 mb-3 md:text-base text-sm">Social</p>
            <div className="flex justify-center gap-4 md:text-xl text-sm">
                <BsFacebook />
                <BsInstagram />
                <BsTwitter />
                <BsLinkedin />
                <BsGithub />
            </div>
            <small className="text-center block text-gray-500 mt-4">Service Policy & Terms and conditions</small>
            <small className="text-gray-400 text-center block mt-2">All rights reserved from Brandify</small>
        </footer>
    );
};

export default Footer;