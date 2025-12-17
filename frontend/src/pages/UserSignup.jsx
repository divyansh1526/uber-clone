import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import {UserDataContext} from '../context/userContext';


const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setfirstName] = useState('');
  const [lastname, setlastName] = useState('');

  const navigate = useNavigate();
  const [user, setUser] = useContext(UserDataContext);

  const submitHandle = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const resposne = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if(resposne.status === 201){
      alert('User registered successfully');
      const data = resposne.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate('/home');
    }

    setEmail('');
    setPassword('');
    setfirstName('');
    setlastName('');
  };

  return (
    <div className='p-7 flex flex-col'>
      <div>
        <img
          className='w-16 mb-10'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1280px-Uber_logo_2018.png'
          alt='uber logo'
        />
        <form
          className='mt-10'
          onSubmit={(e) => {
            submitHandle(e);
          }}
        >
          <h3 className='text-xl mb-2 font-medium'>Enter your name</h3>
          <div className='flex gap-4 mb-6'>
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 border pt-2 pb-3 text-lg placeholder:text-sm'
              required
              type='firstname'
              value={firstname}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              placeholder='First name'
            />
            <input
              className='bg-[#eeeeee] w-1/2 rounded px-4 border pt-2 pb-3 text-lg placeholder:text-sm'
              required
              type='lastname'
              value={lastname}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              placeholder='Last name'
            />
          </div>
          <h3 className='text-xl mb-2 font-medium'>Enter email</h3>
          <input
            className='bg-[#eeeeee] mb-6 rounded px-4 border pt-2 pb-3 w-full text-lg placeholder:text-sm'
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='email'
            placeholder='email@example.com'
          />
          <h3 className='text-xl font-medium mb-2'>Enter Password</h3>
          <input
            type='password'
            className='bg-[#eeeeee] mb-7 rounded px-4 border  pt-2 pb-3 w-full text-lg placeholder:text-sm'
            placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className='bg-[#111] text-white font-semibold mb-7 mt-2 rounded px-4 py-2 w-full text-lg placeholder:text-sm'>
            Create Account
          </button>
          <p className='text-center mb-6'>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-600'>
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to='/captain-signup'
          className='bg-[#e7e310] text-black flex justify-center items-center font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-sm'
        >
          Sign up as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;
