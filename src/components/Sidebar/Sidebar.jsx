import './sidebar.scss'
import Tab from '../Tab/Tab'


import {MdArrowDropDown} from 'react-icons/md'
import {IoHome} from 'react-icons/io5'

import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import {} from 'react-icons/md'

//FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBriefcase ,faUsers, faSackDollar, faHandshake, faPiggyBank, faHandHoldingDollar, faUserCheck } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="switch">
            <FontAwesomeIcon icon={faBriefcase} className='briefcase' swapOpacity/>
            <span>Switch Organization</span>
            <MdArrowDropDown/>
        </div>

        <div className="dashB">
            <IoHome/>
            <span>Dashboard</span>
        </div>

        <div className="customersSection">
            <p className="customers">CUSTOMERS</p>
            <Tab icon={<PeopleOutlineOutlinedIcon/>} text="Users"/>
            <Tab 
                icon={<FontAwesomeIcon  icon={faUsers}/>}
                text="Guarantors"
            />
            <Tab 
                icon={<FontAwesomeIcon icon={faSackDollar}/>} 
                text="Loans"
            />
            <Tab 
                icon={<FontAwesomeIcon icon={faHandshake}/>} 
                text="Decision Models"
            />
            <Tab icon={<FontAwesomeIcon icon={faPiggyBank}/>} text="Savings"/>
            <Tab icon={<FontAwesomeIcon icon={faHandHoldingDollar}/>} text="Loan Requests"/>
            <Tab icon={<FontAwesomeIcon icon={faUserCheck}/>} text="Whitelist"/>
            <Tab icon={<PeopleOutlineOutlinedIcon/>} text="Karma"/>
        </div>

        <div className="customersSection">
            <p className="customers">CUSTOMERS</p>
            <Tab icon={<PeopleOutlineOutlinedIcon/>} text="Users"/>
            <Tab 
                icon={<FontAwesomeIcon  icon={faUsers}/>}
                text="Guarantors"
            />
            <Tab icon={<PeopleOutlineOutlinedIcon/>} text="Users"/>
            <Tab 
                icon={<FontAwesomeIcon  icon={faUsers}/>}
                text="Guarantors"
            />
        </div>

        
        

    </div>
  )
}

export default Sidebar