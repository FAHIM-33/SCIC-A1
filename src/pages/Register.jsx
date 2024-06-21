import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    let { createUser, updateNameImg, googleLogin } = useContext(AuthContext)
    let nav = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value 
        let name = e.target.name.value
        let url = e.target.url.value

        let patC = /[A-Z]/
        let patS = /[!@#$%^&*_/+=:;,.~'"]/;

        if (password.length < 6) {
            return toast.error("Password must be 6 characters or long")
        }
        if (!patC.test(password)) {
            return toast('Must have a capital character')
        }
        if (!patS.test(password)) {
            return toast('Must contain special character')
        }

        const toastID = toast.loading("Registering new user...")
        createUser(email, password)
            .then(() => {
                toast.success("Registration Successfully", { id: toastID })
                updateNameImg(name, url)
                    .then(() => {
                        nav('/')
                    })
                    .catch(() => toast.error('Could not add username & img'))

            })
            .catch((error) => {
                toast.error(`error is: ${error.code}`, { id: toastID })
            })
    }

    const handleGoogleLogin = (e) => {
        e.preventDefault()
        let toastID = toast.loading("Logging in with Google")
        googleLogin()
            .then(() => {
                nav('/')
                toast.success("Sign in with Google", { id: toastID })
            })
            .catch(() => {
                toast.error("Failed to login with Google", { id: toastID })
            })
    }

    return (
        <div className="pb-16">
            <form onSubmit={handleRegister} className="lg:w-2/5 md:4/5 m-4 md:mx-auto p-4 border border-low rounded-lg">
                <div className=''>
                    <span className="block whitespace-nowrap text-3xl md:text-5xl text-center" >Register Now</span>
                </div>
                <div className='md:mt-12 mt-8'>
                    <label htmlFor="name"
                        className=''
                    >Enter Your Name:</label>
                    <br />
                    <input type="text" name="name" id="name" placeholder="Username"
                        className="" />
                </div>

                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Enter Your Email Address:</label>
                    <br />
                    <input type="text" name="email" id="email" placeholder="Email"
                        className="" />
                </div>
                <div className='md:mt-8 mt-4'>
                    <label htmlFor="url"
                        className=''
                    >Image URL:</label>
                    <br />
                    <input type="text" name="url" id="url" placeholder="Image URL"
                        className="" />
                </div>

                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Create New Password:</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password"
                        className="" />
                </div>
                <button className='btn p-2 bg-low w-full rounded-md mt-8 text-xl md:text-2xl tracking-widest text-background '>Register</button>
                <div className='flex items-center gap-2'>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                    <div className='text-lg my-2 text-low'>or</div>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                </div>
                <button onClick={handleGoogleLogin} className='btn p-2 bg-low text-xl w-full rounded-md text-background flex  justify-center items-center'><span className='text-2xl md:text-3xl'><FcGoogle></FcGoogle></span>oogle</button>
            </form>
            <p className='text-center'>Already have an account? <Link to="/login" className='text-blue-600'>Login Here.</Link></p>
        </div>
    );
};

export default Register;