import './main.scss'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import Users from '../Users/Users'

const Main = () => {
  return (
    <div className='main'>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  )
}

export default Main