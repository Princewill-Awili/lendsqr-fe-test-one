import './usersTable.css'
import FilterIcon from '../../assets/filterArrow.svg'
import BlacklistIcon from '../../assets/BlacklistIcon.svg'
import ViewIcon from '../../assets/viewIcon.svg'
import ActivateIcon from '../../assets/ActivateIcon.svg'
import More from '../../assets/more.svg'


import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { states } from '../../utils/context'
import { useContext } from 'react'





const UsersTable = ({userData}) => {

    const { showFilter,setShowFilter } = useContext(states);
    
    const navigate = useNavigate();

    const handleUser = async (userID) =>{
        const res = await fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userID}`);
        const rawData = await res.json();
        localStorage.setItem('userDetails', JSON.stringify(rawData));
        navigate(`/users/${userID}`);
    }

    const columns = [
        {
            field:"organization", headerClassName:"colHead", headerName:"ORGANIZATION", width:150,align:"left", headerAlign:"left", renderHeader:(Params)=>(
                <div className='headerCell'>
                    <span>ORGANIZATION</span>
                    <img src={FilterIcon} alt="filter" onClick={()=> setShowFilter(!showFilter)} />
                </div>
            ),
        },
        {
            field:"username", headerName:"USERNAME", width:150,align:"left", headerAlign:"left", renderHeader:(Params)=>(
                <div className='headerCell'>
                    <span>USERNAME</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            )
        },
        {
            field:"email", headerName:"EMAIL", width:200,align:"left", headerAlign:"left", renderHeader:(Params)=>(
                <div className='headerCell'>
                    <span>EMAIL</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            )
                
        },
        {
            field:"phoneNumber", headerName:"PHONE NUMBER", width:150,align:"left", headerAlign:"left", renderHeader:(Params)=>(
                <div className='headerCell'>
                    <span>PHONE NUMBER</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            )
                
        },
        {
            field:"dateJoined", headerName:"DATE JOINED", width:150,align:"left", headerAlign:"left", renderHeader:(Params)=>(
                <div className='headerCell'>
                    <span>DATE JOINED</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            )
        },
        {
            field:"status", headerName:"STATUS", width:130, align:"left", headerAlign:"left", renderHeader:(Params)=>(
                <div className='headerCell'>
                    <span>STATUS</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            ),
            
            renderCell: (params) => {
                
                if( params.row.status === 0 ){
                    return(
                        <div className="status pending">
                            Pending
                        </div>
                    )
                }
                if(params.row.status === 1){
                    return(
                        <div className="status inactive">
                            Inactive
                        </div>
                    )
                }

                if(params.row.status === 2){
                    return(
                        <div className="status active">
                            Active
                        </div>
                    )
                }
                
                return(
                    <div className="status blacklist">
                        Blacklisted
                    </div>
                    )
    
            }
            
        },
        {
            field:" ", headerName:"", width:30, headerAlign:"center", renderCell:(params)=>(
                <div className='moreOptions' key={params.row.id}>
                    <img src={More} alt="more" className='more'/>
                    <div className="menuOptions" >
                        <span 
                            className="option" 
                            onClick={()=>handleUser(params.row.id)}
                        >
                            <img src={ViewIcon} alt="view" className='optionIcon'/>
                            View Details
                        </span>
                        <span className="option">
                            <img src={BlacklistIcon} alt="view" className='optionIcon'/>
                            Blacklist User
                        </span>
                        <span className="option">
                            <img src={ActivateIcon} alt="view" className='optionIcon'/>
                            Activate User
                            </span>
                    </div>
                </div>
            )
        },
    ]

    const userRows = userData.map(user =>{
        return {
            id:user.id,
            "organization": user.orgName,
            "username": user.userName,
            "email": user.email,
            "phoneNumber":user.phoneNumber,
            "dateJoined": new Date(user.createdAt),
            "status": Math.floor(Math.random()*4),
            "details":""
        } 
    } )

    
    const DataTable = () =>{
        return (
            <div style={{ height:640, width: '100%' }}>
                <DataGrid
                    rows={userRows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[8]} 
                    disableSelectionOnClick
                    editMode="cell"
                    sx={{'.MuiDataGrid-columnSeparator':{
                        display:'none',
                    },'&.MuiDataGrid-root':{
                        border:'none',
                    }
                }}
                   
                />
            </div>
        )
    }


  return (
    <div>
        <DataTable/>
    </div>
  )
}

export default UsersTable