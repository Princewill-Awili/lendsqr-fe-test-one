import './navbar.scss'

import Union from '../../assets/Union.png'
import LendSqr from '../../assets/lendsqr.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon  from '@mui/icons-material/NotificationsNone';
import Avatar from '../../assets/adminImg.svg';
import Arrow from '../../assets/SidebarTopIcons/arrow.png';

import {useContext, useState} from 'react';
import { states } from '../../utils/context';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const activeUser = JSON.parse(localStorage.getItem('admin'));

    const navigate = useNavigate();

    const {setIsLoggedIn} = useContext(states);

    const [showLogout, setShowLogout] = useState(false);

    const logout = () => {
        setShowLogout(!showLogout);
        localStorage.setItem('isLoggedIn',JSON.stringify(false));
        setIsLoggedIn(false);
        navigate('/');
    }



    return (
        <div className='navbar'>
            <div className="navLeft">
                <div className="logo">
                    <img src={Union} alt="logo-union" className="union" />
                    <img src={LendSqr} alt="logo-lendsqr" className="lendsqr" />
                </div>
            </div>
            <div className="navRight">
                <div className="navSearch">
                    <input type="text" className="searchBar"  placeholder='Search for anything'/>
                    <div className="searchIconContainer">
                        <SearchIcon/>
                    </div>
                </div>

                <div className="navOptions">
                    <span className="docs">Docs</span>
                    <NotificationsNoneIcon className="notIcon"/>
                    <div className="userArea">
                        {
                            activeUser && (
                                <>
                                    <img src={Avatar} alt="userAvatar" className="avatar" />
                                    <p className="userName">{activeUser.defaultName}</p>
                                    <img src={Arrow} alt="arrow"  onClick={()=> setShowLogout(!showLogout)} className="arrow"/>
                                    {showLogout && <div className="logOut" onClick={logout}>Log Out</div>}

                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar