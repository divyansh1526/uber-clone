
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/captainContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const CaptainSignup = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setfirstName] = useState("")
  const [lastname, setlastName] = useState("")
  const [vehicleColor, setvehicleColor] = useState("")
  const [vehiclePlate, setvehiclePlate] = useState("")
  const [vehicleCapacity, setvehicleCapacity] = useState("")
  const [vehicleType, setvehicleType] = useState("")

  const navigate = useNavigate()
  const [captain, setcaptain] = useContext(CaptainDataContext);

  const submitHandle = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }


    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if(response.status === 201){
      alert("Captain registered successfully");
      const data = response.data;
      setcaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate('/captain-home')
    }

    setcaptain(captainData)
    setEmail("");
    setPassword("");
    setfirstName("");
    setlastName("");
    setvehicleColor("");
    setvehiclePlate("");
    setvehicleCapacity("");
    setvehicleType("");
  }

  return (
    <div className='p-7 flex flex-col'>
      <div>
        <img
          className='w-16'
          src='https://pngimg.com/d/uber_PNG24.png'
          alt='uber logo'
        />
        <form className='mt-7' onSubmit={(e)=>{
          submitHandle(e);
        }}>
          <h3 className='text-xl mb-2 font-medium'>What's our Captain's Name</h3>
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
          <h3 className='text-xl mb-2 font-medium'>What's our Captain's Email</h3>
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
          <h3 className='text-xl font-medium mb-2'>Enter Your Password</h3>
          <input
            type='password'
            className='bg-[#eeeeee] mb-7 rounded px-4 border  pt-2 pb-3 w-full text-lg placeholder:text-sm'
            placeholder='password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <h3 className='text-xl mb-2 font-medium'>Vehicle Information</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 border pt-2 pb-3 text-lg placeholder:text-sm'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setvehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 border pt-2 pb-3 text-lg placeholder:text-sm'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setvehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 border pt-2 pb-3 text-lg placeholder:text-sm'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setvehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 border pt-2 pb-3 text-lg placeholder:text-sm'
              value={vehicleType}
              onChange={(e) => {
                setvehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
          </div>

          <button className='bg-[#111] text-white font-semibold mb-7 mt-2 rounded px-4 py-2 w-full text-lg placeholder:text-sm'>
            Create Captain's Account
          </button>
          <p className='text-center mb-6'>
            Already a partner?{' '}
            <Link to='/captain-login' className='text-blue-600'>
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link to='/signup' className='bg-[#1edbdb] text-black flex justify-center items-center font-semibold rounded px-4 py-2 w-full text-lg placeholder:text-sm'>
          Sign up as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainSignup
