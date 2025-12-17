import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import {CaptainDataContext} from "../context/captainContext"
import axios from "axios";

const CaptainProtectedWrapper = ({children}) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [captain, setcaptain] = useContext(CaptainDataContext);
    const [isloading, setisloading] = useState(true);

    useEffect(() => {
        if(!token){
            navigate('/captain-login');
        }
    }, [token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((response) => {
        if(response.status === 200){
            setcaptain(response.data.captain);
            setisloading(false);
        }
    }).catch((error) => {
        console.log(error);
        navigate('/captain-login');
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

export default CaptainProtectedWrapper
