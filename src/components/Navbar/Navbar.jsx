import './navbar.scss'

import Union from '../../assets/Union.png'
import Lendsqr from '../../assets/lendsqr.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon  from '@mui/icons-material/NotificationsNone';

import { useState } from 'react';

const Navbar = () => {  

    //const [activeUser, setActiveUser] = useState(localStorage.getItem('userData'));
    const activeUser = JSON.parse(localStorage.getItem('userData'));

    //console.log("ACTIVE USER:", activeUser);

    return (
        <div className='navbar'>
            <div className="navLeft">
                <img src={Union} alt="logoImg" className='union'/>
                <img src={Lendsqr} alt="logoImg" className='lendsqr'/>
            </div>

            <div className="navSearch">
                <input type="text" className="searchBar"  placeholder='Search for anything'/>
                <div className="searchIconContainer">
                    <SearchIcon/>
                </div>
            </div>

            <div className="navRight">
                <span className="docs">Docs</span>
                <NotificationsNoneIcon className="notIcon" />

                <div className="userArea">
                    {
                        activeUser && (
                            <>
                                <img src={activeUser.profile.avatar} alt="userAvatar" className="avatar" />
                                <p className="userName">{activeUser.profile.firstName}</p>
                            </>
                        )
                    } 
                </div>
            </div>
        </div>
    )
    }

export default Navbar