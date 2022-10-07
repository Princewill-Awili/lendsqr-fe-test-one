import './login.scss'
import Union from '../../assets/Union.png'
import LendSqr from '../../assets/lendsqr.png'
import pablo from '../../assets/pablo.svg'

import { useState, useEffect, useContext } from 'react'
import { states } from '../../utils/context'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {data, setData} = useContext(states);

    const [showPassword, setShowPassword] = useState(false);

    

    //1. Search local storage for users data. If unavailable then update local storage.
    useEffect(()=>{
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if(!storedData || storedData === null){
            //Fetch data from API
            fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users').then(res=>res.json()).then(data => {
                localStorage.setItem('userData',JSON.stringify(data));
            }).catch( err => console.log(err));
        }
    },[]);

    //2. Update our data state the from local storage.

    const userData = localStorage.getItem("userData");
    if(userData){
        setData(userData);
       

    }

    //3. Authenticate and Validate User

    if(data.length>0){
        const myUser = userData.filter(user => user.profile.firstName === "Adedeji");
        console.log(myUser);
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

            <p className="loginBtn">LOG IN</p>

        
        </div>
    </div>
  )
}

export default Login