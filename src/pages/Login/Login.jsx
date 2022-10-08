import './login.scss'
import Union from '../../assets/Union.png'
import LendSqr from '../../assets/lendsqr.png'
import pablo from '../../assets/pablo.svg'

import { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { states } from '../../utils/context'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const {data, setData,activeUser, setActiveUser} = useContext(states);
    const navigate = useNavigate();
    

    const [fetched,setFetched] = useState(false)

    useEffect(() => {
        fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then(res => res.json())
        .then(rawData =>{
            setData(rawData);
            setActiveUser(rawData.find((profile) => profile.email === email));
        })
        .catch(err => console.log(err))
    },[fetched]);

    useEffect(()=>{
        if(fetched && activeUser !== {}){
            localStorage.setItem('userData',JSON.stringify(data));
            navigate('/users');
        }
    },[data,activeUser])


    const login =()=>{
        setFetched(true);     
    }
  

   return (
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

            <p className="loginBtn" onClick={login}>LOG IN</p>

        
        </div>
    </div>
  )
}

export default Login