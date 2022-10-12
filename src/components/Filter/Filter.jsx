import React from './filter.css'
import { useContext, useState } from 'react';
import { states } from '../../utils/context';

const Filter = ({data}) => {

     const{ setUserData, showFilter,setShowFilter} = useContext(states)
     const [username,setUsername] = useState('');
     const [userEmail, setUserEmail] = useState('');
    
     const companies = data.map(user=> user.orgName);


     const filter = () => {
        
        setUserData(data.filter((item)=>item.userName === username))
        console.log(data.filter((item)=>item.userName === username))
        setShowFilter(!showFilter)
     }


     const reset = () => {
        const storedData = JSON.parse(localStorage.getItem('storedData'));
        setUserData(storedData);
     }

   

    

  return (
    <div className='filter'>
        <div className="inputHolder">
            <label for="org">Organization</label>
            <select name="org" id="org">
                <option value="Select">Select</option>
                {companies.map((company,index)=>(
                    <option value={company} key={index}>{company}</option>
                ))}
                
            </select>
        </div>

        <div className="inputHolder">
            <label for="username">Username</label>
            <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="inputHolder">
            <label for="email">Email</label>
            <input type="email" id='username' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </div>

        <div className="inputHolder">
            <label for="username">Date</label>
            <input type="date" id='username' />
        </div>

        <div className="inputHolder">
            <label for="username">Phone Number</label>
            <input type="text" id='username' />
        </div>

        <div className="inputHolder">
            <label for="username">Status</label>
            <input type="text" id='username' />
        </div>

        <div className="buttonContainer">
            <button className="resetBtn" type='submit' onClick={reset}>Reset</button>
            <button className="filterBtn" type='submit' onClick={()=>filter()}>Filter</button>
        </div>
    </div>
  )
}

export default Filter