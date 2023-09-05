import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../componenet";
const arr = [
    {
        Username: 'nusrat',
        Password: 'nusrat313',
    }
]

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const navigation = useNavigate();
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [text, settext] = useState('')
    const [text1, settext1] = useState('')
    const [admin, setadmin] = useState([
        {
            Username: 'nusrat',
            Password: 'nusrat313',
        }
    ])

    const Gotologin = (e) => {
        e.preventDefault()
        admin.filter((e) => {
            if (e.Username === Username && e.Password === Password) {
                navigation('/page1');
            } else {
                if (e.Username !== Username) {
                    alert('Username is incorrect');
                    settext1('Username is incorrect');
                } else {
                    if (e.Username === '') {
                        alert('Username is required');
                        settext1('Username is required');
                    }
                }
                if (e.Password !== Password) {
                    alert('Password is incorrect');
                    settext('Password is incorrect');
                } else {
                    if (e.Password === '') {
                        alert('password is required');
                        settext('password is required');
                    }
                }
            }

        })
    }

    return (
        <div className='flex justify-center items-center text-center h-screen py-10'>
            <div className="w-full max-w-md">
                <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                    <h3 className="m-14 text-2xl font-medium">Log In</h3>
                    <div className="mb-4">
                        <Input id="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={Username} />
                        <p className="text-red-500">{text1}</p>
                    </div>
                    <div className="mb-6 relative">
                        <Input id="password" type={showPass ? "text" : "password"} placeholder="Password" className='mb-8' value={Password} onChange={(e) => setPassword(e.target.value)} />
                        <span onClick={() => setShowPass(!showPass)} className="absolute top-0 right-0 mt-2 mr-3 cursor-pointer text-black">{showPass ? "Hide" : "Show"}</span>
                        <p className="text-red-500">{text}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="h-12 rounded-full w-full bg-gray-900 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={Gotologin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
