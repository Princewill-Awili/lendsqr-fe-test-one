import  './userdetails.css'
import BackArrow from '../../assets/backArrow.svg'
import Avatar from '../../assets/avatarUser.svg'

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

import { Link } from 'react-router-dom'

const UserDetails = () => {
  return (
    <div className='userdetails'>
        <Navbar/>
        <Sidebar/>

        <div className="userInfo">
            <div className="userInfoTopbar">
                <div className="backNav">
                    <Link to='/users'>
                        <img src= {BackArrow} alt="back" />
                        <span className='back'>Back to users</span>
                    </Link>
                </div>
                <div className="topbarTabs">
                    <span className="title">User Details</span>
                    <div className="topbarOptions">
                        <span className="blacklistUser">Blacklist User</span>
                        <span className="activateUser">Activate User</span>
                    </div>
                </div>
                <div className="userSummary">
                    <div className="userSummaryTop">
                        <div className="ustLeft">
                            <img src={Avatar} alt="" className='userImg' />
                            <div className="ustNameArea">
                                <span className="userName">Grace Effiom</span>
                                <span className="serialNum">Lg2308BDT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default UserDetails