import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { CaptainDataContext } from '../context/captainContext'

const CaptainLogin = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [captain, setcaptain] = useContext(CaptainDataContext);

  const submitHandle = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      alert('Captain logged in successfully');
      const data = response.data;
      setcaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    
    setemail('');
    setPassword('');
  };
  return (
    <div className='p-7 flex flex-col'>
      <div>
        <img
          className='w-16 mb-8'
          src='https://pngimg.com/d/uber_PNG24.png'
          alt='uber logo'
        />
        <form className='mt-8' onSubmit={(e)=>{
          submitHandle(e);
        }}>
          <h3 className='text-xl mb-2 font-medium'>What's your email</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 border pt-2 pb-3 w-full text-lg placeholder:text-sm'
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type='email'
            placeholder='email@example.com'
          />
          <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
          <input
            type='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='bg-[#eeeeee] mb-7 rounded px-4 border  pt-2 pb-3 w-full text-lg placeholder:text-sm'
            placeholder='password'
          />
          <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-sm'>
            Login
          </button>
          <p className='text-center mb-5'>
            Join a fleet?{' '}
            <Link to='/captain-signup' className='text-blue-600'>
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/login' className='bg-[#1edbdb] text-black flex justify-center items-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-sm'>
          Log in as User
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin
