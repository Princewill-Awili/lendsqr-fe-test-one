import { useEffect, useState } from 'react'
import './users.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import InfoTabs from '../../components/InfoTabs/InfoTabs'
import UsersTable from '../../components/UsersTable/UsersTable'


const Users = () => {

  const [userData, setUserData] = useState([]);

  useEffect(()=>{
    (async()=>{
       const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
       const rawData = await res.json();
       setUserData(rawData);
    })();
  },[]);

  return (
    <div className="users">
      <Navbar/>
      <Sidebar/>
      <div className="content">
        <span className="title">Users</span>
        <InfoTabs data={userData}/>
        <UsersTable userData = {userData}/>
      </div>
    </div>
  )
}

export default Users