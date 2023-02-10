import './App.css';
import   Addstudent from './Components/Addstudent';
import   Editstudent from './Components/Editstudent';
import   Veiwstudent from './Components/Veiwstudent';
import   Addstaff from './Components/Addstaff';
import   Editstaff from './Components/Editstaff';
import   Veiwstaff from './Components/Veiwstaff';
import   Welcome from './Components/Welcome';
import Studentdashboard from './Components/Studentdashboard';
import Staffdashboard from './Components/Staffdashboard';
import   { studentsData } from './Data/student'
import   { teachersData } from './Data/teacher'
import NoPage from './Components/NoPage';
import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';


function App() {

const[student,setStudent]= useState(studentsData);
const[staff,setStaff]= useState(teachersData);


  return (
    <div className="App">
        <Switch>
    
    <Route exact path = "/">
    <Welcome/>
    </Route>
     

    <Route path = "/add-Studentdata">
       <Addstudent
       student={student}
       setStudent={setStudent}
         />
     </Route>

     <Route path = "/edit-Studentdata/:Id">
       <Editstudent 
        student={student}
        setStudent={setStudent} />
     </Route>

     <Route path = "/Studentdetails/:Id">
       <Veiwstudent 
       studentsdata={studentsData}/>
     </Route>
      
     <Route exact path = "/Studentdashboard">
    <Studentdashboard
    student={student}
    setStudent={setStudent}/>
    </Route>

     <Route path = "/add-Staffdata">
       <Addstaff
      staff={staff}
      setStaff={setStaff}
         />
     </Route>

     <Route path = "/edit-Staffdata/:Id">
       <Editstaff 
        staff={staff}
        setStaff={setStaff} 
        />
     </Route>

     <Route path = "/Staffdetails/:Id">
       <Veiwstaff 
       teachersdata={teachersData}
         />
     </Route>

     <Route exact path = "/Staffdashboard">
    <Staffdashboard
     staff={staff}
     setStaff={setStaff}/>
    </Route>
    
     <Route path = "**">
       <NoPage/>
     </Route>




  </Switch>

   
    </div>
  );
}

export default App;
