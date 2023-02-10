import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import Base from '../Base'
import { useHistory } from 'react-router-dom'

const Staffdashboard = ({staff,setStaff}) => {

    const history= useHistory();

 //function for deleting data
 const deletedata=(Id)=>{
    
    const removestaff = staff.filter((staff)=>staff.Id !== Id);
    setStaff(removestaff);
       }


  return (
    <Base
    title = "Staff Details"
    description= "Veiw Staff Details Here"
    >
  <div className="card-container"> 
              {staff.map((staff,index)=>(
                       <Card sx={{ maxWidth: 345 }} key ={staff.Id} className="card">
                       <CardContent className="card-comp">
  
                         <Typography gutterBottom variant="h5" component="div">
                         Name : {staff.Name}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         Age : {staff.Age}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         Gender : {staff.Gender}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         PLace : {staff.Place}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         Qualification : {staff.Qualification}
                         </Typography>
  
                       </CardContent>
                       <CardActions className="Cardactions">
                       <Button onClick={()=>history.push(`/edit-Staffdata/${staff.Id}`)} variant="contained" color="secondary">EDIT</Button>
                       <Button onClick={()=>deletedata(staff.Id)}  variant="contained" color="error">DELETE</Button>
                       <Button onClick={()=>history.push(`/Staffdetails/${staff.Id}`)} variant="contained" color="secondary">VEIW STUDENT</Button>
                       </CardActions>
                     </Card>
              ))}
        </div>
  
  </Base>
  
  )
}

export default Staffdashboard
