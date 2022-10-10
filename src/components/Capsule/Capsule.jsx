import React, {useState} from 'react'

const Capsule = ({year}) => {
    const [inactive,setInactive] = useState(false);
    const [active,setActive] = useState(false);
    

    if(year % 2 === 0)  setActive(true);
    if(year % 2 !== 0)  setInactive(true);
    
  return (
    <div className="capsule"
    style={{
        borderRadius:"100px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:"80px",
        height:"30px",
        fontSize:"14px",
    }} 
    >
        {
            active && (
                <div 
                    style={{
                        borderRadius:"100px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        width:"100%",
                        height:"100%",
                        fontSize:"14px",
                        background: "#F3FcF6",
                        color:"#39CD62",
                    }}
                >
                    Active
                </div>
            )
        }
        {
            inactive && (
                <div 
                    style={{
                        borderRadius:"100px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        width:"100%",
                        height:"100%",
                        fontSize:"14px",
                        background: "#F5F5F7",
                        color:"#5E6884",
                    }}
                    >
                    Inactive
                </div>
            )
        }
        
    </div>
  )
}

export default Capsule