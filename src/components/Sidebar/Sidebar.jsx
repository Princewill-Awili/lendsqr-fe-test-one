import './sidebar.scss'
import Tab from '../Tab/Tab'






import {MdArrowDropDown} from 'react-icons/md'
import {IoHome} from 'react-icons/io5'

import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import {} from 'react-icons/md'

//FONT AWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBriefcase ,faUsers, faSackDollar, faHandshake, faPiggyBank, faHandHoldingDollar, faUserCheck } from '@fortawesome/free-solid-svg-icons'


const businessTabs = ["Organization","Loan Products","Savings Products","Fees and Charges","Transactions","Services","Service Account","Settlements","Reports"];

const settingsTabs = ["Preferences","Fees and Pricing","Audit Logs"];

const customerTabs = ["Users", "Gurantors", "Loans", "Decision Models", "Savings", "Loan Requests", "Whitelist", "Karma"]





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

        <div className="sidebarSection">
            <span className="sectionTitle">CUSTOMERS</span>
            {customerTabs.map((section,index)=>(
                <Tab key={index} text={section}/>
            ))}
        </div>

        <div className="sidebarSection">
            <span className="sectionTitle">BUSINESS</span>
            {businessTabs.map((section,index)=>(
                <Tab key={index} text={section}/>
            ))}
        </div>

        <div className="sidebarSection">
            <span className="sectionTitle">SETTINGS</span>
            {settingsTabs.map((section,index)=>(
                <Tab key={index} text={section}/>
            ))}
        </div>

        
        

    </div>
  )
}

export default Sidebar