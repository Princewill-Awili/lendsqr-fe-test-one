import './sidebar.scss'
import './tab.scss'

import Briefcase from '../../assets/SidebarTopIcons/briefcase 1.svg'
import Home from '../../assets/SidebarTopIcons/home.png'
import ArrowDown from '../../assets/SidebarTopIcons/arrow.png'

import UsersIcon from '../../assets/SidebarIcons/users.svg'
import GurantorIcon from '../../assets/SidebarIcons/gurantor.svg'
import LoansIcon from '../../assets/SidebarIcons/loans.svg'
import DecisionIcon from '../../assets/SidebarIcons/decision.svg'
import SavingsIcon from '../../assets/SidebarIcons/savings.svg'
import LoanReqs from '../../assets/SidebarIcons/loanReqs.svg'
import WhitelistIcon from '../../assets/SidebarIcons/whitelist.svg'
import KarmaIcon from '../../assets/SidebarIcons/karma.svg'







const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="switch">
            <img src={Briefcase} alt="bcase" className="briefcase" />
            <span>Switch Organization</span>
            <img src={ArrowDown} alt="arrow" />
        </div>

        <div className="dashB">
            <img src={Home} alt="home" />
            <span>Dashboard</span>
        </div>

        <div className="sidebarSection">
            <span className="sectionTitle">CUSTOMERS</span>
            <div className='tab'>
                <img src={UsersIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Users</span>
            </div>
            <div className='tab'>
                <img src={GurantorIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Gurantor</span>
            </div>
            <div className='tab'>
                <img src={LoansIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Loans</span>
            </div>
            <div className='tab'>
                <img src={DecisionIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Decision Models</span>
            </div>
            <div className='tab'>
                <img src={SavingsIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Savings</span>
            </div>
            <div className='tab'>
                <img src={LoanReqs}  alt="icon" className='tabIcon'/>
                <span className="text">Loan Requests</span>
            </div>
            <div className='tab'>
                <img src={WhitelistIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Whitelist</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
        </div>

        <div className="sidebarSection">
            <span className="sectionTitle">BUSINESS</span>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
        </div>

        <div className="sidebarSection">
            <span className="sectionTitle">SETTINGS</span>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
            <div className='tab'>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
        </div>

        
        

    </div>
  )
}

export default Sidebar