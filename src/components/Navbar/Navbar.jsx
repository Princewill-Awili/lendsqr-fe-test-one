import './navbar.scss'

import Union from '../../assets/Union.png'
import Lendsqr from '../../assets/lendsqr.png'


import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
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

        <div className="navLeft">
            <span className="docs">Docs</span>
        </div>
    </div>
  )
}

export default Navbar