import  './userdetails.css'
import BackArrow from '../../assets/backArrow.svg'
import Avatar from '../../assets/avatarUser.svg'
import Star1 from '../../assets/star1.svg'
import Star2 from '../../assets/star2.svg'

import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import UserSubSection from '../../components/UserSubSections/UserSubSection'

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import {dummyUser} from '../../utils/dummyData'




const UserDetails = () => {

    const [user,setUser] = useState(dummyUser);

    const maritalStatus = () => {
        const stats = ['Married', 'Not Married'];
        return stats[Math.floor(Math.random()*2)]
    }

    
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

    useEffect(()=>{
        const details = JSON.parse(localStorage.getItem('userDetails'));
        setUser(details);
    },[])



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
                            <img src={user.profile.avatar} alt="" className='userImg' />
                            <div className="ustNameArea">
                                <span className="userName">{`${user.profile.firstName} ${user.profile.lastName}`}</span>
                                <span className="acctNum">{user.accountNumber}</span>
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
                                {user.accountBalance}
                            </span>
                            <span className="bankDetails">
                                {user.profile.bvn}/Providus Bank
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
                <div className="sectionArea">
                    {
                        currentSection === 'general' && (
                            <>
                                <UserSubSection 
                                    subSectionTitle= "Personal Information" 
                                    content={
                                        [
                                        {title:"Full name", value:`${user.profile.firstName} ${user.profile.lastName}`},
                                        {title:"Phone Number", value:user.profile.phoneNumber},
                                        {title: "Email Address", value: user.email},
                                        {title:"BVN", value:user.profile.bvn},
                                        {title: "Gender", value: user.profile.gender},
                                        {title: "Marital Satus", value: maritalStatus()},
                                        {title:"Children" , value:"None"},
                                        {title:"Type of Residence", value:"Apartment Block"}

                                    ]
                                }
                                />
                                <UserSubSection
                                    subSectionTitle="Education and Employment"
                                    content={
                                        [
                                            {title:"Level of Education", value:user.education.level },
                                            {title:"Sector of employment", value: user.education.sector},
                                            {title:"Duration of Employment", value:user.education.duration},
                                            {title:"Office Email", value: user.education.officeEmail},
                                            {title:"Monthly Income",value: `₦${user.education.monthlyIncome[1]} - ₦${user.education.monthlyIncome[0]}`},
                                            {title:"loan Repayment" , value:user.education.loanRepayment}
                                        ]
                                    }
                                />
                                <UserSubSection
                                    subSectionTitle="Socials"
                                    content={
                                        [
                                            {title:"Twitter", value:user.socials.twitter},
                                            {title:"Facebook", value:user.socials.facebook},
                                            {title:"Instagram", value:user.socials.instagram}
                                    ]
                                }
                                />
                                <UserSubSection
                                    subSectionTitle="Gurantor"
                                    content={
                                        [
                                            {title:"Full name", value:`${user.guarantor.firstName} ${user.guarantor.lastName}`},
                                            {title:"Phone Number", value:user.guarantor.phoneNumber},
                                            {title:"Email Address", value:"debby@gmail.com"},
                                            {title:"Relationship", value:'Sister'}
                                    ]
                                }
                                />

                            </>
                        )
                    }
                </div>
            </div>
        </div>  
    </div>
  )
}

export default UserDetails