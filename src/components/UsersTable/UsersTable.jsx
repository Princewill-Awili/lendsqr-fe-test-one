import './usersTable.css'



import { DataGrid, GridColDef } from '@mui/x-data-grid';

const UsersTable = ({userData}) => {

    

    //const userData = JSON.parse(localStorage.getItem("userData"));

    const currentMonth = new Date().getMonth();



    const columns:GridColDef[] = [
        {
            field:"organization", headerName:"ORGANIZATION", width:150
        },
        {
            field:"username", headerName:"USERNAME", width:150,
        },
        {
            field:"email", headerName:"EMAIL", width:200,
                
        },
        {
            field:"phoneNumber", headerName:"PHONE NUMBER", width:200,
                
        },
        {
            field:"dateJoined", headerName:"DATE JOINED", width:150,
        },
        {
            field:"status", headerName:"STATUS", width:100, renderCell: (params) => {
                
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
        }
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