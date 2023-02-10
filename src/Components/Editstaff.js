import React from 'react'
import Base from '../Base'
import {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const Editstaff = ({staff,setStaff}) => {

  const history = useHistory();
  const {Id} = useParams();
  const staffdata = staff[Id] 
  const[editId,seteditId]= useState("");
  const[Idx,setIdx]= useState("");
  const[Name,setName]= useState("");
  const[Age,setAge]= useState("");
  const[Gender,setGender]= useState("");
  const[Place,setPlace]= useState("");
  const[Qualification,setQualification]= useState("");


  useEffect(() => {
   seteditId(staffdata.Id);
   setIdx(staffdata.Id);
   setName(staffdata.Name);
   setAge(staffdata.Age);
   setGender(staffdata.Gender);
    setPlace(staffdata.Place);
    setQualification(staffdata.Qualification);
 },[]);  

            //updation
            const updatedata=()=>{
    
              const editstud= staff.findIndex((staff)=>staff.Id===editId)
              const updated={
              Id,
              Name,
              Age,
              Gender,
              Place,
              Qualification
              
              }
              staff[editstud]=updated;
              setStaff([...staff]);
              setIdx("")
              setName("")
              setAge("")
              setGender("")
               setPlace("")
               setQualification("")
               history.push("/Staffdashboard")
              
              }


  return (
    <Base
    title = "Edit Form"
    description= "Edit staff detail here">
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

export default Editstaff
