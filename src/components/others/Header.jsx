import React, { useContext, useState } from 'react';
import { setLocalStorage } from '../../utils/localStorage';
import { AuthContext } from '../../context/AuthProvider';

function Header(props) {
    
    
    
    // const [username, setUsername] = useState('');

    // if(!props){
    //     setUsername('Admin')
    // }else{
    //     setUsername(props.firstName)
    // }

    // Get the user's first name from props.data
    const firstName = props.data?.firstName || 'Admin';

    const logOutUser =()=>{
        localStorage.setItem('loggedInUser','')
        props.changeUser('')
        // console.log(props.changeUser)
        //window.location.reload()
    }
    
    return (  
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{firstName} 👋</span> </h1>
            <button onClick={logOutUser} className='bg-red-600 text-white px-5 py-2 rounded-small text-lg font-medium'>Log Out</button>
        </div>
    );
}

export default Header
