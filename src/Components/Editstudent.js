import React from 'react'
import Base from '../Base'
import {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const Editstudent = ({student,setStudent}) => {

               const history = useHistory();
             const {Id} = useParams();
             const studentdata = student[Id] 
             const[editId,seteditId]= useState("");
             const[Idx,setIdx]= useState("");
             const[Name,setName]= useState("");
             const[Age,setAge]= useState("");
             const[Gender,setGender]= useState("");
             const[Place,setPlace]= useState("");
             const[Qualification,setQualification]= useState("");


             useEffect(() => {
              seteditId(studentdata.Id);
              setIdx(studentdata.Id);
              setName(studentdata.Name);
              setAge(studentdata.Age);
              setGender(studentdata.Gender);
               setPlace(studentdata.Place);
               setQualification(studentdata.Qualification);
            },[]);  

            //updation
  const updatedata=()=>{
    
const editstud= student.findIndex((stud)=>stud.Id===editId)
const updated={
Id,
Name,
Age,
Gender,
Place,
Qualification

}
student[editstud]=updated;
setStudent([...student]);
setIdx("")
setName("")
setAge("")
setGender("")
 setPlace("")
 setQualification("")
 history.push("/Studentdashboard")

}


  return (
    <Base
    title = "Edit Form"
    description= "Edit student detail here">
<div className="input">
            <TextField fullWidth label="Enter the Id" id="fullWidth" onChange={(event)=>setIdx(event.target.value)} value={Idx} />

            <TextField fullWidth label="Enter the Name" id="fullWidth" onChange={(event)=>setName(event.target.value)} value={Name} />

            <TextField fullWidth label="Enter the Age" id="fullWidth" onChange={(event)=>setAge(event.target.value)} value={Age} />

            <TextField fullWidth label="Enter the Gender" id="fullWidth" onChange={(event)=>setGender(event.target.value)} value={Gender}/>

            <TextField fullWidth label="Enter the Place" id="fullWidth" onChange={(event)=>setPlace(event.target.value)} value={Place} />

            <TextField fullWidth label="Enter the Qualification" id="fullWidth" onChange={(event)=>setQualification(event.target.value)} value={Qualification} />

           <Button className="add-btn" onClick={()=>updatedata()} variant="contained" color="primary">UPDATE</Button>
          
            </div>
            </Base>
  )
}

export default Editstudent
