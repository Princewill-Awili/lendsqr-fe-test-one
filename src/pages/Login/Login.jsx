import './login.scss'
import Union from '../../assets/Union.png'
import LendSqr from '../../assets/lendsqr.png'
import pablo from '../../assets/pablo.svg'

import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { states } from '../../utils/context'

import Users from '../Users/Users'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {setUserData, activeUser, setActiveUser,isLoggedIn, setIsLoggedIn} = useContext(states);
    const navigate = useNavigate();
    const [fetching,setFetching] = useState(false);

    const login = async (e) =>{
        e.preventDefault();
        setFetching(true);
        let user = {};

        await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then(res => res.json())
        .then(rawData =>{
            if(email.length > 0 && password.length > 0){

                setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn',JSON.stringify(true))
                user = {defaultName:"Adedeji"}
                setUserData(rawData);
                setActiveUser(user);
                localStorage.setItem('admin',JSON.stringify(user));
                navigate('/users',{activeUser});
            }else{
                console.log("ERROR: User  not found!");
            }

        })
        .catch(err => console.log(err))

        setFetching(false);
    }


   return (
    <>
        {!isLoggedIn ?
        (
            <div className='login'>
                <div className="loginSection loginLeft">
                    <div className="logo">
                        <img src={Union} alt="logo-union" className="union" />
                        <img src={LendSqr} alt="logo-lendsqr" className="lendsqr" />
                    </div>
                    <img src={pablo} alt="Illustration"  className='illustration'/>
                </div>

                <div className="loginSection loginRight">
                    <div className="content">
                        <h1>Welcome!</h1>
                        <p className="subtitle">Enter details to login</p>

                        <div className="loginForm">
                            <div className='inputGroup'>
                                <input type="text" className="input email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className='inputGroup'>
                                <input type={showPassword ? "text" : "password"} className="input password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                <div className="actions">
                                    <span className='button textButton' onClick={ ()=> setShowPassword(!showPassword) }>Show</span>
                                </div>
                            </div>

                            <a href="/" className="button textButton forgotPassword">Forgot Password?</a>

                            <button className="button primaryButton loginButton" onClick={login}>{fetching ? "Loading" : "Log In"}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        :
        (
            <Users/>
        )
    }
    </>


  )
}

export default Login