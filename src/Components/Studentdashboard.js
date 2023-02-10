import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'
import Base from '../Base'
import { useHistory } from 'react-router-dom'


const Studentdashboard = ({student,setStudent}) => {

    const history= useHistory();

 //function for deleting data
 const deletedata=(Id)=>{
    
    const removestud = student.filter((student)=>student.Id !== Id);
    setStudent(removestud);
       }


  return (
    <Base
    title = "Student Details"
    description= "Veiw Student Details Here"
    >
  <div className="card-container"> 
              {student.map((stud,index)=>(
                       <Card sx={{ maxWidth: 345 }} key ={stud.Id} className="card">
                       <CardContent className="card-comp">
  
                         <Typography gutterBottom variant="h5" component="div">
                         Name : {stud.Name}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         Age : {stud.Age}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         Gender : {stud.Gender}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         PLace : {stud.Place}
                         </Typography>
  
                         <Typography variant="body2" color="text.secondary">
                         Qualification : {stud.Qualification}
                         </Typography>
  
                       </CardContent>
                       <CardActions className="Cardactions">
                       <Button onClick={()=>history.push(`/edit-Studentdata/${stud.Id}`)} variant="contained" color="secondary">EDIT</Button>
                       <Button onClick={()=>deletedata(stud.Id)}  variant="contained" color="error">DELETE</Button>
                       <Button onClick={()=>history.push(`/Studentdetails/${stud.Id}`)} variant="contained" color="secondary">VEIW STUDENT</Button>
                       </CardActions>
                     </Card>
              ))}
        </div>
  
  </Base>
  
  )
}

export default Studentdashboard
