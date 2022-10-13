import React from './filter.css'
import { useContext,  useState } from 'react';
import { states } from '../../utils/context';

const Filter = ({data}) => {

     const{ setUserData, showFilter,setShowFilter} = useContext(states);

     const [org,setOrg] = useState('')
     const [username,setUsername] = useState('');
     const [userEmail, setUserEmail] = useState('');
     const [userDate,setUserDate] = useState('');
     const [userPhoneNum, setUserPhoneNum] = useState('');
    
     const companies = data.map(user=> user.orgName);


     const filter = () => {
       
        const storedData = JSON.parse(localStorage.getItem('storedData'));

        if(org || username || userEmail || userPhoneNum || userDate){
            let newData = [];

            if(org) newData.push(storedData.filter(item => item.orgName === org));
            if(username) newData.push(storedData.filter(item => item.userName === username));
            if(userEmail) newData.push(storedData.filter(item => item.email === userEmail));
            if(userPhoneNum) newData.push(storedData.filter(item => item.phoneNumber === userPhoneNum));
            if(userDate) newData.push(storedData.filter(item => item.createdAt === new Date(userDate).toJSON()));

            const bloatedList = newData.flat();

            const filteredList = bloatedList.filter((c,index) => {
                return bloatedList.indexOf(c) === index;
            } )

            setUserData(filteredList);
            setShowFilter(!showFilter);

        }else{

            const storedData = JSON.parse(localStorage.getItem('storedData'));
            setUserData(storedData);
            setShowFilter(!showFilter);
        }

        

     }


     const reset = () => {

        const storedData = JSON.parse(localStorage.getItem('storedData'));
        setUserData(storedData);
        setShowFilter(!showFilter);
     }


     

    

   

    

  return (
    <div className='filter'>
        <div className="inputHolder">
            <label>Organization</label>
            <select name="org" id="org" value={org} onChange={(e)=> setOrg(e.target.value)}>
                <option value="Select">Select</option>
                {companies.map((company,index)=>(
                    <option value={company} key={index}>{company}</option>
                ))}
                
            </select>
        </div>

        <div className="inputHolder">
            <label>Username</label>
            <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="inputHolder">
            <label>Email</label>
            <input type="email" id='username' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
        </div>

        <div className="inputHolder">
            <label>Date</label>
            <input type="date" id='username' value={userDate} onChange={(e) => setUserDate(e.target.value)} />
        </div>

        <div className="inputHolder">
            <label>Phone Number</label>
            <input type="text" id='username' value={userPhoneNum} onChange={(e) => setUserPhoneNum(e.target.value)} />
        </div>

        <div className="inputHolder">
            <label>Status</label>
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