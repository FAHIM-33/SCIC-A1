import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {
    let { login, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    let nav = useNavigate()



    const handleLogin = (e) => {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        let toastID = toast.loading("Loggin in...")
        login(email, password)
            .then(() => {
                location?.state ?
                    nav(location.state.from)
                    :
                    nav('/')

                toast.success("Login Successful", { id: toastID })
            })
            .catch((error) => {
                toast.error(`${error.code}`, { id: toastID })
            })
    }
    const handleGoogleLogin = (e) => {
        e.preventDefault()
        let toastID = toast.loading("Logging in with Google")
        googleLogin()
            .then(() => {
                location?.state ?
                    nav(location.state.from)
                    :
                    nav('/')
                toast.success("Logged in with Google", { id: toastID })
            })
            .catch(() => {
                toast.error("Failed to login with Google", { id: toastID })
            })
    }

    return (
        <div className="">
            <form onSubmit={handleLogin} className="lg:w-2/5 md:4/5 m-4 md:mx-auto p-4 border border-low rounded-md">
                <div className=''>
                    <span className="block whitespace-nowrap text-3xl md:text-5xl text-center" >Login Here</span>
                </div>
                <div className='md:mt-12 mt-8'>
                    <label htmlFor="email"
                        className=''
                    >Enter Your Email Address:</label>
                    <br />
                    <input type="text" name="email" id="email" placeholder="Email"
                        className="" />
                </div>
                <div className='md:mt-8 mt-4'>
                    <label htmlFor="email"
                        className=''
                    >Enter Your Password:</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="Password_"
                        className="" />
                </div>
                <button className='btn p-2 bg-low w-full rounded-md mt-4 text-xl md:text-2xl tracking-widest text-background '>Login</button>
                <div className='flex items-center gap-2'>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                    <div className='text-lg my-2 text-low'>or</div>
                    <div className='w-full h-[1px] bg-gray-400'></div>
                </div>
                <button onClick={handleGoogleLogin} className='btn p-2 bg-low text-xl w-full rounded-md text-background flex  justify-center items-center'><span className='text-2xl md:text-3xl'><FcGoogle></FcGoogle></span>oogle</button>
            </form>
            <p className='text-center'>Don&apos;t have and account? <Link to="/register" className='text-blue-600'>Register Now.</Link></p>
        </div>
    );
};

export default Login;