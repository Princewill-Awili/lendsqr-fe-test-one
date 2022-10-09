import './tab.scss'


import React from 'react'

const Tab = ({icon,text}) => {

  return (
    <div className='tab'>
        {icon}
        <span className="text">{text}</span>
    </div>
  )
}

export default Tab