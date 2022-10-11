import  './userdetails.css'
import BackArrow from '../../assets/backArrow.svg'
import Avatar from '../../assets/avatarUser.svg'
import Star1 from '../../assets/star1.svg'
import Star2 from '../../assets/star2.svg'

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserDetails = () => {
    const navigate = useNavigate();
    const [currentSection, setCurrentSection] = useState('general');

    const ratingsNum = Math.floor(Math.random()*4);

    const ratingFunc = (ratingsNum) => {
        const numUnfilled = Math.floor(3 - ratingsNum);
        const numFilled = Math.floor(ratingsNum);
        return [numFilled,numUnfilled];
      }
    
    const [filled,unfilled] = ratingFunc(ratingsNum);

    const moveToSection = (sectionName) =>{
        setCurrentSection(sectionName);
        //navigate('/users/:id/${sectionName}')

    }



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
                                <span className="acctNum">LH2308BDT</span>
                            </div>
                        </div>
                        <div className="ustCenter">
                            <span className="userTierTxt">User's Tier</span>
                            <div className="tierCount">
                                {[...Array(filled)].map((index) => (
                                    <img src={Star1} alt="star" key={index}/>
                                ))}
                                {[...Array(unfilled)].map((index)=>(
                                    <img src={Star2} alt="star" key={index} />
                                ))}
                            </div>

                        </div>
                        <div className="ustRight">
                            <span className="amount">
                                <span className='amount naira'>&#8358;</span>
                                200,000.00
                            </span>
                            <span className="bankDetails">
                                9912345678/Providus Bank
                            </span>
                        </div>
                    </div>
                    <ul className="userSummaryBottom">
                        <li 
                            className={currentSection === 'general'? "usbSectionIem current" : "usbSectionItem"} 
                            onClick={()=> moveToSection('general')}
                        >
                            General Details
                        </li>
                        <li 
                            className={currentSection === 'documents'? "usbSectionIem current" : "usbSectionItem"} 
                            onClick={()=> moveToSection('documents')}
                        >
                            Documents
                        </li>
                        <li 
                            className={currentSection === 'bankDetails'? "usbSectionIem current" : "usbSectionItem"} 
                            onClick={()=> moveToSection('bankDetails')}
                        >
                            Bank Details
                        </li>
                        <li 
                            className={currentSection === 'loans'? "usbSectionIem current" : "usbSectionItem"} 
                            onClick={()=> moveToSection('loans')}
                        >
                            Loans
                        </li>
                        <li 
                            className={currentSection === 'savings'? "usbSectionIem current" : "usbSectionItem"} 
                            onClick={()=> moveToSection('savings')}
                        >
                            Savings
                        </li>
                        <li 
                            className={currentSection === 'appandsystem'? "usbSectionIem current" : "usbSectionItem"} 
                            onClick={()=> moveToSection('appandsystem')}
                        >
                            App and System
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default UserDetails