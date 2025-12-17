import { useNavigate } from "react-router-dom"
import {UserDataContext} from "../context/userContext"
import { useEffect, useState } from "react";
import { useContext } from "react";
import axios from "axios";

const UserProtectedWrapper = ({children}) => {

  const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [user, setuser] = useContext(UserDataContext);
    const [isloading, setisloading] = useState(true);

    useEffect(() => {
        if(!token){
            navigate('/login');
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            setuser(response.data.user);
            setisloading(false);
        }
    }).catch((error) => {
        console.log(error);
        navigate('/login');
    })


    if(isloading){
        return <div>Loading...</div>
    }
    
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper
