import './usersubsection.css'

const UserSubSection = ({subSectionTitle,content}) => {
  return (
    <div className='subSection'>
        <span className='subSectionTitle'>{subSectionTitle}</span>
        <div className="subSectionContainer">
            {
                content.map((item,index)=>(
                    <div className="tile" key={index}>
                        <span className="tileTitle">{item.title}</span>
                        <span className="tileValue">{item.value}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default UserSubSection