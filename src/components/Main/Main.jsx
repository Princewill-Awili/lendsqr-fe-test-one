import { Routes, Route } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import Users from '../../pages/Users/Users'
import UserDetails from '../../pages/UserDetails/UserDetails'
import { useEffect } from 'react'

import { useContext } from 'react'
import { states } from '../../utils/context'

const Main = () => {

  return (
    <div className='main'>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/users' element={ <Users/>}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
      </Routes>
    </div>
  )
}

export default Main