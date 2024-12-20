import React, { useState, useEffect } from 'react'
import './Login.css'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'


import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'

// Imported Icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';



const Login = () => {

    const [loginuserName, setloginUserName] = useState('');
    const [loginpassword, setloginPassword] = useState('');
    const navigateTo = useNavigate()

    const [loginStatus, setLoginStatus] = useState('');
    const [statusHolder, setStatusHolder] = useState('message');


    const loginUser = async (e) => {
        e.preventDefault();

        // Validación básica
        if (!loginuserName || !loginpassword) {
            setLoginStatus('Por favor complete todos los campos');
            return;
        }

        try {
            const response = await Axios.post('http://localhost:3002/login', {
                loginuserName,
                loginpassword,
            });

            if (response.data.success) {
                // Guardar información del usuario en localStorage si lo deseas
                localStorage.setItem('user', JSON.stringify(response.data.user));
                navigateTo('/dashboard');
            } else {
                setLoginStatus(response.data.message || 'Error al iniciar sesión');
            }
        } catch (error) {
            setLoginStatus(error.response?.data?.message || 'Error al conectar con el servidor');
            console.error('Error:', error);
        }
    };

    // Lets clear the form on submit
    const onSubmit = () => {
        setLoginUserName('');
        setLoginPassword('');
    }


    return (
        <div className='loginPage flex'>
            <div className='container flex'>
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className='title'>Descrubre Lugares y viaja hacia ellos</h2>
                        <p>Llega rapido hacia tu destino!</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">No tienes una cuenta?</span>
                        <Link to={'/register'}>
                            <button className='btn'>Sign Up</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Ingresa!</h3>
                    </div>

                    <form action="" className='form grid' onSubmit={onSubmit}>
                        <span className={statusHolder}>{loginStatus}</span>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='username' placeholder='Enter Username' onChange={(event) => {
                                    setloginUserName(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="password">Contraseña</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon" />
                                <input type="password" id="password" placeholder="Enter Password" onChange={(event) => {
                                    setloginPassword(event.target.value)
                                }} />
                            </div>
                        </div>

                        <button type="submit" className="btn flex" onClick={loginUser}>
                            <span>Login</span>
                            <AiOutlineSwapRight className="icon" />
                        </button>

                        {/* <a href="/dashboard">Dashboard</a> */}

                        <span className="forgotPassword">
                            Olvidaste tu contraseña? <a href="">Click Aquí</a>
                        </span>

                    </form>

                </div>
            </div>
        </div>
    )
}
export default Login;