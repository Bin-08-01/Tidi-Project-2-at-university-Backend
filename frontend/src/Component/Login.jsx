import { useState } from 'react'
import {
    Link, useLocation, useNavigate,
} from "react-router-dom";
import axios from 'axios'


function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate= useNavigate();
    const location = useLocation()
    const BASE_URL ="http://localhost:8000"
    function handleLogin(e) {
        e.preventDefault();
        let data = {
            username: userName,
            password
        }
        console.log(data);
        // axios.post(`${BASE_URL}/v1/auth/login`, data)
        //     .then(function (res) {
        //         localStorage.setItem('token',res.data.token.accessToken);
        //         localStorage.setItem('userID', res.data.user._id);    

        //         navigate("/home");        
        //     })
        //     .catch(function (rej) {
        //         console.log(rej);
        //     })
    }

    return (
        <div className=' relative w-2/3 h-5/6  bg-white bg-opacity-30  shadow-2xl  rounded-lg'>
            <div className='h-full w-3/5  float-right'>
                <img className='rounded-r-lg h-full w-full object-cover' alt='imageLogin' src="https://cdn.dribbble.com/users/6228692/screenshots/18531198/media/216f9f699749626e87eed99cdf3bdb59.png?compress=1&resize=768x576&vertical=top">

                </img>
            </div>
            <div className='h-full w-2/5 absolute flex flex-col justify-center items-center '>
                <div className='py-4 text-center w-full'>
                    <h2 className=' text-5xl font-bold tracking-wider mb-1 '>Welcome!</h2>
                    <p className='font-normal text-gray-800'> Wish you have a nice time</p>
                </div>
                <form className='flex flex-col w-4/5' id='form-login' onSubmit={handleLogin}>
                    <div className='pt-4'>
                        <label className='text-lg font-semibold '>UserName</label> <br></br>
                        <input type="text" value={userName} onChange={e => setUserName(e.target.value)} className=' w-full py-3 pr-10 pl-3 my-1 rounded-md focus:outline-0' placeholder='Username here...'></input>
                        <p className='er'></p>
                    </div>
                    <div className='pt-4'>
                        <label className='text-lg font-semibold '>Password</label> <br></br>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='w-full py-3 pr-10 pl-3 my-1 rounded-md focus:outline-0' placeholder='Password here...'></input>
                        <p className='er'></p>
                    </div>
                    <div className='pt-2 '>
                        <div className='inline-block m-3 float-left'>
                            <input type='checkbox' className='h-4 w-4 mr-1'></input>
                            <label>Remember me</label>
                        </div>
                        <div className='inline-block m-3 underline italic float-right'>
                            <Link to={'/forgotPass'}>Forgot Password</Link>
                        </div>
                    </div>
                    <button className=' mt-1 w-full bg-emerald-900 bg-opacity-85 text-yellow-50  rounded-md py-3 shadow-lg hover:shadow '>Login</button>
                </form>
                <div className='mt-4 w-full text-center'>
                    <p className='inline-block'>Don't have an account?</p>
                    <Link to='/register' className='italic underline '>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
