import  './infotabs.scss'

import Icon1 from '../../assets/infoTabIcon1.svg'
import Icon2 from '../../assets/infoTabIcon2.svg'
import Icon3 from '../../assets/infoTabIcon3.svg'
import Icon4 from '../../assets/InfoTabIcon4.svg'

import { states } from '../../utils/context'
import { useContext, useEffect, useState } from 'react';


const InfoTabs = () => {

    const {userData} = useContext(states);
    const [data, setData] = useState([]);

    let localData;


    useEffect(()=>{
        (
            async()=>{
                const res = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
                const rawData = await res.json();
                if(rawData){
                    localData = rawData;
                    setData(localData);
                }
            }
        )();
    },[userData])

    const totalUsers = data.length;
    const usersWithLoans = data.filter(users => JSON.parse(users.education.loanRepayment)>0).length;


  return (
    <div className='infoTabs'>

        <div className="iTab">
            <div className="iconBg1">
                <img src={Icon1}/>
            </div>
            <span className="tabText">USERS</span>
            <span className="number">{totalUsers}</span>
        </div>

        <div className="iTab">
            <div className="iconBg2">
                <img src={Icon2}/>
            </div>
            <span className="tabText">ACTIVE USERS</span>
            <span className="number">95</span>
        </div>

        <div className="iTab">
            <div className="iconBg3">
                <img src={Icon3} />
            </div>
            <span className='tabText'>USERS WITH LOANS</span>
            <span className="number">{usersWithLoans}</span>
        </div>

        <div className="iTab">
            <div className="iconBg4">
                <img src={Icon4} />
            </div>
            <span className='tabText'>USERS WITH SAVINGS</span>
            <span className="number">87</span>
        </div>
    </div>
  )
}

export default InfoTabs