import React from 'react'
import { useParams } from 'react-router-dom';
import Base from '../Base'

const Veiwstaff = ({teachersdata}) => {
  const {Id} = useParams();
  const staff = teachersdata[Id]
  return (
    <Base title="Staff Profile"
    discription="Veiw Staff Profile here">
 <div>
        <h1>Staff-Profile </h1>
        <h2>Staff Name: {staff.Name}</h2>
        <p> Gender: {staff.Gender} </p>
        <p>Age : {staff.Age} years </p>
        <p>Place : {staff.Place} </p>
        <p>Qualification: {staff.Qualification}</p>
      </div>
    </Base>
  )
}

export default Veiwstaff
