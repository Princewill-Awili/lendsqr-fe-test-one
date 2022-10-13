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
            if(email === 'admin@lendsqr.com' && password.length > 0){
            
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
                <div className="loginLeft">
                    <img src={Union} alt="logo" className='union' />
                    <img src={LendSqr} alt="logo" className='lendsqr' />
                    <img src={pablo} alt="doodle"  className='pablo'/>
                </div>

                <div className="loginRight">
                    <p className="welcomeTxt">Welcome!</p>
                    <p className="smallTxt">Enter details to login</p>

                    <input type="text" className="input email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    
                    <div className='inputHolder'>
                        <input type={showPassword ? "text" : "password"} className="input password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <span className='show' onClick={ ()=> setShowPassword(!showPassword) }>SHOW</span>
                    </div>
                

                    <p className="forgot">FORGOT PASSWORD?</p>

                    <div className="loginBtn" onClick={login}>{fetching ? "LOADING" : "LOG IN"}</div>

                
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