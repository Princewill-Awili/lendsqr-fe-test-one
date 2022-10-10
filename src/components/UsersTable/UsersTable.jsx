import './usersTable.scss'
import ArrowDown from '../../assets/arrowDown.png'
import Capsule from '../Capsule/Capsule';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

const UsersTable = ({userData}) => {

    

    //const userData = JSON.parse(localStorage.getItem("userData"));


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
                return (
                    <>
                        <div 
                            style={{
                                borderRadius:"100px",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                width:"80px",
                                height:"30px",
                                fontSize:"14px",
                                color:params.row.status % 2 !== 0 ? "#39CD62": "#5E6884",
                                background: params.row.status % 2 !== 0 ? "#F3FcF6" :"#F5F5F7"
                            }}
                        >
                            {params.row.status % 2 !== 0 && "Active"}
                            {params.row.status % 2 === 0 && "Inactive"}
                        </div>
                    </>
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
            "status": new Date(user.lastActiveDate).getFullYear(),
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