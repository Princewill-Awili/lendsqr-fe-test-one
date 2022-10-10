import  './infotabs.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup  } from '@fortawesome/free-solid-svg-icons';

import { states } from '../../utils/context'
import { useContext } from 'react';


const InfoTabs = ({data}) => {

    const totalUsers = data.length;
    const usersWithLoans = data.filter(users => JSON.parse(users.education.loanRepayment)>0).length;


  return (
    <div className='infoTabs'>

        <div className="iTab">
            <div className="iconBg1">
                <FontAwesomeIcon icon={faUserGroup} />
            </div>
            <span className="tabText">USERS</span>
            <span className="number">{totalUsers}</span>
        </div>

        <div className="iTab">
            <div className="iconBg2">
                <FontAwesomeIcon icon={faUserGroup} />
            </div>
            <span className="tabText">ACTIVE USERS</span>
            <span className="number">95</span>
        </div>

        <div className="iTab">
            <div className="iconBg3">
                <FontAwesomeIcon icon={faUserGroup} />
            </div>
            <span className='tabText'>USERS WITH LOANS</span>
            <span className="number">{usersWithLoans}</span>
        </div>

        <div className="iTab">
            <div className="iconBg4">
                <FontAwesomeIcon icon={faUserGroup} />
            </div>
            <span className='tabText'>USERS WITH SAVINGS</span>
            <span className="number">87</span>
        </div>
    </div>
  )
}

export default InfoTabs