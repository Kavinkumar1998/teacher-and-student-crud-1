import React from 'react'
import Base from '../Base'
import  { useState }  from 'react'
import { useHistory } from 'react-router-dom'
import { Button, TextField } from '@mui/material'

const Addstaff = ({staff,setStaff}) => {

 const history = useHistory();
const [values,setvalues]=useState({
  Id:"",
  Name:"",
  Age:"",
  Gender:"",
  Place:"",
  Qualification:""
});

const {
    Id,
    Name,
    Age,
    Gender,
    Place,
    Qualification
             }=values;


  const handleChange = (name) => (event) =>{
              const value = event.target.value; 
              setvalues({...values, [name]:value})
           }

           //function for adding 
    const adddata=()=>{
      const newStaffs={
        Id,
        Name,
        Age,
        Gender,
        Place,
        Qualification
          
      }
setStaff([...staff,newStaffs])
 setvalues({
    ...values, 
    Id:"",
    Name:"",
    Age:"",
    Gender:"",
    Place:"",
    Qualification:""
   })
   
   history.push("/Staffdashboard")


  };

  return (
    <Base title="Add Staffs Data Here"
    description="You can Add a New Staff Data" >
  <div className="input">
              <TextField fullWidth label="Enter the Id" id="fullWidth" onChange={handleChange("Id")} value={Id} name="Id" />
  
              <TextField fullWidth label="Enter the Name" id="fullWidth" onChange={handleChange("Name")} value={Name}  name="Name"/>
  
              <TextField fullWidth label="Enter the Age" id="fullWidth" onChange={handleChange("Age")} value={Age} name="Age" />
  
              <TextField fullWidth label="Enter the Gender" id="fullWidth" onChange={handleChange("Gender")} value={Gender} name="Gender"/>
  
              <TextField fullWidth label="Enter the Place" id="fullWidth" onChange={handleChange("Place")} value={Place} name="Place" />
  
              <TextField fullWidth label="Enter the Qualification" id="fullWidth" onChange={handleChange("Qualification")} value={Qualification} name="Qualification" />
  
                <Button className="add-btn" onClick={()=>adddata()} variant="contained" color="success">ADD</Button>
          
            
              </div>
    </Base>
  )
}

export default Addstaff
