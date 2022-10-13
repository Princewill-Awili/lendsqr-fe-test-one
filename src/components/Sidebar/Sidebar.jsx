import './sidebar.scss'
import {useState} from 'react'


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

import SaveProds from '../../assets/businessIcons/Group.svg'
import FeesIcon from '../../assets/businessIcons/coins-solid.svg'
import Trans from '../../assets/businessIcons/icon.svg'
import ServIcon from '../../assets/businessIcons/galaxy.svg'
import ServAcct from '../../assets/businessIcons/user-cog.svg'
import Scroll from '../../assets/businessIcons/Vector.svg'
import SettleIcon from '../../assets/businessIcons/chart-bar.svg'

import Prefs from '../../assets/businessIcons/sliders.svg'
import Badge from '../../assets/businessIcons/badge.svg'
import Report from '../../assets/businessIcons/clipboard-list.svg'













const Sidebar = () => {

    const [current, setCurrent] = useState('users');


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
            <div className={current==='users'? 'current tab' : 'tab'} onClick={()=>setCurrent('users')}>
                <img src={UsersIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Users</span>
            </div>
            <div className={current==='gurantor'? 'current tab' : 'tab'} onClick={()=>setCurrent('gurantor')}>
                <img src={GurantorIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Gurantor</span>
            </div>
            <div className={current==='loans'? 'current tab' : 'tab'} onClick={()=>setCurrent('loans')}>
                <img src={LoansIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Loans</span>
            </div>
            <div className={current==='decision'? 'current tab' : 'tab'} onClick={()=>setCurrent('decision')}>
                <img src={DecisionIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Decision Models</span>
            </div>
            <div className={current==='savings'? 'current tab' : 'tab'} onClick={()=>setCurrent('savings')}>
                <img src={SavingsIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Savings</span>
            </div>
            <div className={current==='loanreqs'? 'current tab' : 'tab'} onClick={()=>setCurrent('loanreqs')}>
                <img src={LoanReqs}  alt="icon" className='tabIcon'/>
                <span className="text">Loan Requests</span>
            </div>
            <div className={current==='whitelist'? 'current tab' : 'tab'} onClick={()=>setCurrent('whitelist')}>
                <img src={WhitelistIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Whitelist</span>
            </div>
            <div className={current==='karma'? 'current tab' : 'tab'} onClick={()=>setCurrent('karma')}>
                <img src={KarmaIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Karma</span>
            </div>
        </div>

        <div className="sidebarSection">
            <span className="sectionTitle">BUSINESS</span>
            <div className={current==='org'? 'current tab' : 'tab'} onClick={()=>setCurrent('org')}>
                <img src={Briefcase}  alt="icon" className='tabIcon'/>
                <span className="text">Organization</span>
            </div>
            <div className={current==='loanprods'? 'current tab' : 'tab'} onClick={()=>setCurrent('loanprods')}>
                <img src={LoansIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Loan Products</span>
            </div>
            <div className={current==='savprods'? 'current tab' : 'tab'} onClick={()=>setCurrent('savprods')}>
                <img src={SaveProds}  alt="icon" className='tabIcon'/>
                <span className="text">Savings products</span>
            </div>
            <div className={current==='fees'? 'current tab' : 'tab'} onClick={()=>setCurrent('fees')}>
                <img src={FeesIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Fees and Charges</span>
            </div>
            <div className={current==='trans'? 'current tab' : 'tab'} onClick={()=>setCurrent('trans')}>
                <img src={Trans}  alt="icon" className='tabIcon'/>
                <span className="text">Transactions</span>
            </div>
            <div className={current==='servs'? 'current tab' : 'tab'} onClick={()=>setCurrent('servs')}>
                <img src={ServIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Services</span>
            </div>
            <div className={current==='servAcct'? 'current tab' : 'tab'} onClick={()=>setCurrent('servAcct')}>
                <img src={ServAcct}  alt="icon" className='tabIcon'/>
                <span className="text">Service Account</span>
            </div>
            <div className={current==='settlements'? 'current tab' : 'tab'} onClick={()=>setCurrent('settlements')}>
                <img src={Scroll}  alt="icon" className='tabIcon'/>
                <span className="text">Settlements</span>
            </div>
            <div className={current==='reports'? 'current tab' : 'tab'} onClick={()=>setCurrent('reports')}>
                <img src={SettleIcon}  alt="icon" className='tabIcon'/>
                <span className="text">Reports</span>
            </div>
        </div>

        <div className="sidebarSection">
            <span className="sectionTitle">SETTINGS</span>
            <div className={current==='preferences'? 'current tab' : 'tab'} onClick={()=>setCurrent('preferences')}>
                <img src={Prefs}  alt="icon" className='tabIcon'/>
                <span className="text">Preferences</span>
            </div>
            <div className={current==='fees'? 'current tab' : 'tab'} onClick={()=>setCurrent('fees')}>
                <img src={Badge}  alt="icon" className='tabIcon'/>
                <span className="text">Fees and Pricing</span>
            </div>
            <div className={current==='audit'? 'current tab' : 'tab'} onClick={()=>setCurrent('audit')}>
                <img src={Report}  alt="icon" className='tabIcon'/>
                <span className="text">Audit Logs</span>
            </div>
        </div>

        
        

    </div>
  )
}

export default Sidebar