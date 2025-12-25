import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <div className='flex justify-start gap-4'>
          <i
            onClick={()=>{
              props.setvehiclePanel(false);
              props.setPanelOpen(false);
            }}
          className="ri-arrow-left-line text-2xl pt-0.5"></i>
          <h3 className='text-2xl font-semibold mb-5'>Choose a ride</h3>
        </div>
        <div onClick={()=>{
          props.setvehiclePanel(false)
          props.setconfirmedRidePanel(true);
        }} className='flex border-2 border-gray-300 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img
            className='h-10'
            src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMDUxZTYwMi0xMGJiLTRlNjUtYjEyMi1lMzk0ZDgwYTljNDcucG5n'
            alt='uber car'
          />
          <div className='ml-2 w-1/2'>
            <h4 className='font-semibold text-base gap-1 flex items-center justify-start'>
              UberCar
              <span>
                <i className='ri-user-3-fill text-sm'></i>4
              </span>
            </h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>
              Affordeable Car rides
            </p>
          </div>
          <h2 className='text-xl font-semibold'>₹120</h2>
        </div>
        <div onClick={()=>{
          props.setvehiclePanel(false)
          props.setconfirmedRidePanel(true);
        }} className='flex border border-gray-300 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img
            className='h-10'
            src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n'
            alt='uber bike'
          />
          <div className='ml-2 w-1/2'>
            <h4 className='font-semibold text-base gap-1 flex items-center justify-start'>
              UberBike
              <span>
                <i className='ri-user-3-fill text-sm'></i>1
              </span>
            </h4>
            <h5 className='font-medium text-sm'>5 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>
              Affordeable Bike rides
            </p>
          </div>
          <h2 className='text-xl font-semibold'>₹65</h2>
        </div>
        <div onClick={()=>{
          props.setvehiclePanel(false)
          props.setconfirmedRidePanel(true);
        }} className='flex border border-gray-300 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
          <img
            className='h-10'
            src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n'
            alt='uber auto'
          />
          <div className='ml-2 w-1/2'>
            <h4 className='font-semibold text-base gap-1 flex items-center justify-start'>
              UberAuto
              <span>
                <i className='ri-user-3-fill text text-sm'></i>3
              </span>
            </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>
              Affordeable Auto rides
            </p>
          </div>
          <h2 className='text-xl font-semibold'>₹100</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
