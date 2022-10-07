import './login.scss'
import Union from '../../assets/Union.png'
import LendSqr from '../../assets/lendsqr.png'
import pablo from '../../assets/pablo.svg'

import { apiFetcher } from '../../utils/fetcher'

import { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    
    

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

            <input type="text" className="input email" placeholder='Email' />
            <div className='inputHolder'>
                <input type="text" className="input password" placeholder='Password'/>
                <span className='show'>SHOW</span>
            </div>
           

            <p className="forgot">FORGOT PASSWORD?</p>

            <p className="loginBtn">LOG IN</p>

        
        </div>
    </div>
  )
}

export default Login