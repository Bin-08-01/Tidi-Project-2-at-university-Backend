import { useState } from 'react'
import {
    Link,
} from "react-router-dom";
import axios from 'axios'

function Register() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePass, setRePass] = useState('');

    const BASE_URL = "http://localhost:8000"

    function handleSubmit(e) {
        e.preventDefault();
        let data = {
            "firstName": "",
            "lastName": "",
            "username": userName,
            "email": email,
            "gender": 1,
            "password": password
        }
        console.log(data);
        axios.post(`${BASE_URL}/v1/auth/register`,data)
            .then(function (res) {
                console.log(res);
            })
            .then(function (rej) {
                console.log(rej);
            })

    }
    return (
        <>
            <div className=' relative w-2/3 h-auto bg-white bg-opacity-30  shadow-2xl  rounded-lg'>
                <div className='h-full absolute right-0 w-3/5 '>
                    <img className='rounded-r-lg h-full w-full object-cover' alt='imageLogin' src="https://cdn.dribbble.com/users/6228692/screenshots/18531198/media/216f9f699749626e87eed99cdf3bdb59.png?compress=1&resize=768x576&vertical=top">

                    </img>
                </div>
                <div className='h-full w-2/5 flex flex-col justify-around items-center '>
                    <div className='py-4 text-center w-full h-1/5'>
                        <p className=' text-4xl font-bold tracking-wider mb-1 w-full'>Sign Up For Free</p>
                        <p className='font-normal text-gray-800'> Wish you have a nice time</p>
                    </div>
                    <form className='flex flex-col w-4/5' id='form-register' onSubmit={handleSubmit}>
                        <div className='my-2'>
                            <label className='text-lg font-semibold '>Username</label> <br></br>
                            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} className=' w-full py-2 border pr-16 pl-3 my-1 rounded-md focus:outline-0' placeholder='Username here...'></input>
                            <p className='er italic text-sm'></p>
                        </div>
                        <div className='my-2'>
                            <label className='text-lg font-semibold '>Email</label> <br></br>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className=' w-full py-2 border pr-16 pl-3 my-1 rounded-md focus:outline-0' placeholder='Email here...'></input>
                            <p className='er'></p>
                        </div>
                        <div className='my-2'>
                            <label className='text-lg font-semibold '>Password</label> <br></br>
                            <input value={password} type="password" onChange={e => setPassword(e.target.value)} className='w-full py-2 border pr-16 pl-3 my-1 rounded-md focus:outline-0' placeholder='Password here...'></input>
                            <p className='er'></p>
                        </div>
                        <div className='my-2'>
                            <label className='text-lg font-semibold '>Re-Password</label> <br></br>
                            <input value={rePass} type="password" onChange={e => setRePass(e.target.value)} className='w-full py-2 border pr-16 pl-3 my-1 rounded-md focus:outline-0' placeholder='Password here...'></input>
                            <p className='er'></p>
                        </div>
                        <button className=' mt-2 w-full bg-emerald-900 bg-opacity-85 text-yellow-50  rounded-md py-3 shadow-lg hover:shadow '>
                            Register Now
                        </button>
                    </form>
                    <div className='my-3 h-auto w-full text-center'>
                        <p className='inline-block mr-1'>Already have an account? </p>
                        <Link to='/' className='italic underline '>Sign In</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;