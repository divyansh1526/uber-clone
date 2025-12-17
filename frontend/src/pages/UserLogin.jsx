import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserDataContext);

  const submitHandle = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status === 200){
      alert('User logged in successfully');
      const data = response.data;
      localStorage.setItem('token', data.token);
      setUser(data.user);
      navigate('/home');
    }

    setemail('');
    setPassword('');
  };
  return (
    <div className='p-7 flex flex-col'>
      <div>
        <img
          className='w-16 mb-10 mt-3'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1280px-Uber_logo_2018.png'
          alt='uber logo'
        />
        <form
          className='mt-15'
          onSubmit={(e) => {
            submitHandle(e);
          }}
        >
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
            New here?{' '}
            <Link to='/signup' className='text-blue-600'>
              Create new account
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to='/captain-login'
          className='bg-[#e7e310] text-black flex justify-center items-center font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
        >
          Log in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
