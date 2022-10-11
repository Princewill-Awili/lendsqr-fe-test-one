import './main.scss'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import Users from '../Users/Users'
import UserDetails from '../UserDetails/UserDetails'

const Main = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
      </Routes>
    </div>
  )
}

export default Main