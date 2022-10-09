import './users.scss'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import InfoTabs from '../../components/InfoTabs/InfoTabs'

const Users = () => {
  return (
    <div className="users">
      <Navbar/>
      <Sidebar/>
      <div className="content">
        <span className="title">Users</span>
        <InfoTabs/>
      </div>
    </div>
  )
}

export default Users