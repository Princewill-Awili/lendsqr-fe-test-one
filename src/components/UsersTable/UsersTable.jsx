import './usersTable.css'
import FilterIcon from '../../assets/filterArrow.svg'
import More from '../../assets/more.svg'



import { DataGrid, GridColDef } from '@mui/x-data-grid';

const UsersTable = ({userData}) => {

    

    //const userData = JSON.parse(localStorage.getItem("userData"));

    const currentMonth = new Date().getMonth();



    const columns:GridColDef[] = [
        {
            field:"organization", headerClassName:"colHead", headerName:"ORGANIZATION", width:150, headerAlign:"center", renderHeader:(Params:GridColumnHeaderParams)=>(
                <div>
                    <span>ORGANIZATION</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            ),
        },
        {
            field:"username", headerName:"USERNAME", width:150, headerAlign:"center", renderHeader:(Params:GridColumnHeaderParams)=>(
                <div>
                    <span>USERNAME</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            )
        },
        {
            field:"email", headerName:"EMAIL", width:200, headerAlign:"center", renderHeader:(Params:GridColumnHeaderParams)=>(
                <div>
                    <span>EMAIL</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            )
                
        },
        {
            field:"phoneNumber", headerName:"PHONE NUMBER", width:150, headerAlign:"center", renderHeader:(Params:GridColumnHeaderParams)=>(
                <div>
                    <span>PHONE NUMBER</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            )
                
        },
        {
            field:"dateJoined", headerName:"DATE JOINED", width:150, headerAlign:"center", renderHeader:(Params:GridColumnHeaderParams)=>(
                <div>
                    <span>DATE JOINED</span>
                    <img src={FilterIcon} alt="filter" />
                </div>
            )
        },
        {
            field:"status", headerName:"STATUS", width:150, headerAlign:"center", renderHeader:(Params:GridColumnHeaderParams)=>(
                <div>
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
            field:" ", headerName:"   ", width:50, headerAlign:"center", renderCell:(params)=>(
                <div>
                    <img src={More} alt="more"/>
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
                    rowsPerPageOptions={[9]} 
                    disableSelectionOnClick
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