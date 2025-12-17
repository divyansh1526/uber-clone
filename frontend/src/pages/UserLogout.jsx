import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            alert('User logged out successfully');
            localStorage.removeItem('token');
            navigate('/login');
        }
    }).catch((error) => {
        console.log(error);
    })

  return (
    <div>
      userlogout
    </div>
  )
}

export default UserLogout
