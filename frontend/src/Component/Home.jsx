import React from "react";
import {
    useNavigate,
} from "react-router-dom";
import axios from 'axios'


function Home() {
    const navigate = useNavigate();
    function handleLogOut() {
        let config = { 
            headers:{
                "token": "Bearer " +localStorage.getItem('token'),
            }
        }

        axios.post("http://localhost:8000/v1/auth/logout","",config)
            .then(function (res) {
                localStorage.clear();
                navigate("/");
            })
            .then(function (rej) {
                localStorage.clear();
                console.log(1);
            })
    }
    return (
        <>
            <div className=' bg-emerald-800 bg-opacity-60 w-full h-screen flex justify-center items-center' >
                trang home sau khi da login <br></br>
                <button onClick={handleLogOut}>Log out</button>
            </div>
        </>
    );
}

export default Home;
