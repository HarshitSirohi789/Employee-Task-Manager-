import React, { useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';


function App() {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  const [userData,SetUserData] = useContext(AuthContext)
  // console.log(authData.employees)
  // console.log(authData)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  },[])

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      // console.log("this is admin")
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      // console.log(user);
    }else if(userData){
        const employee =  userData.find((e)=> email == e.email && e.password==password)
        if(employee){
          setUser('employee')
          setloggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
        }
        // console.log("this is user")
        
        
        // console.log(user);
    }
    else{
      alert("invalid credentials")
    }
    // console.log(email,password) 
  }



  // useEffect(()=>{
  //   //setLocalStorage()
  //   getLocalStorage()

    
  // },)



  return ( 
    <>
    { !user ? <Login handleLogin = {handleLogin}/> : ''}
    {user== 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data = {loggedInUserData}/> : null)}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard /> */}
    </>
   );
}

export default App;