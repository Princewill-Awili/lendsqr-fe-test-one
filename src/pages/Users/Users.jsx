import { useEffect, useContext, useState } from 'react'
import './users.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import InfoTabs from '../../components/InfoTabs/InfoTabs'
import UsersTable from '../../components/UsersTable/UsersTable'
import { states } from '../../utils/context'
import Filter from '../../components/Filter/Filter'

const Users = () => {

  
  const {showFilter,userData, setUserData} = useContext(states);

  const [stored, setStored] = useState(false);
  

  useEffect(()=>{
     (async()=>{
        if(stored){
          return;
        }else{
          const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
          const rawData = await res.json();
           setUserData(rawData);
           localStorage.setItem('storedData',JSON.stringify(rawData));
           setStored(true);
        }
      })();
  },[]);

  return (
    <div className="users">
      <Navbar/>
      <Sidebar/>
      <div className="content">
        <span className="title">Users</span>
        <InfoTabs/>
        <div className="tableWrapper">
          {showFilter && (<Filter data={userData}/>)}
          <UsersTable userData = {userData}/> 
        </div>
        
      </div>
    </div>
  )
}

export default Users