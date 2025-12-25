const ConfirmedRide = (props) => {
  return (
    <div className='w-full'>
      {/* Title */}
      <div className='flex justify-start gap-14 items-center'>
        <i
          onClick={() => {
            props.setvehiclePanel(true);
            props.setconfirmedRidePanel(false);
          }}
          className='ri-arrow-left-line text-2xl pt-0.5'
        ></i>
        <h2 className='text-2xl font-semibold text-gray-900'>
          Confirm Your Ride
        </h2>
      </div>

      <div className='w-full h-px bg-gray-300 my-4'></div>

      <div className='flex flex-col items-center gap-5'>
        {/* Vehicle Image */}
        <img
          className='h-24 object-contain'
          src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMDUxZTYwMi0xMGJiLTRlNjUtYjEyMi1lMzk0ZDgwYTljNDcucG5n'
          alt='uber car'
        />

        {/* Ride Details */}
        <div className='w-full bg-gray-50 rounded-xl p-4 space-y-4'>
          {/* Pickup */}
          <div className='flex items-start gap-3'>
            <i className='ri-map-pin-2-fill text-xl text-green-600 mt-1'></i>
            <div>
              <h3 className='font-medium text-gray-900'>5324/11-A</h3>
              <p className='text-sm text-gray-500'>New York, USA</p>
            </div>
          </div>

          <div className='h-px bg-gray-200'></div>

          {/* Drop */}
          <div className='flex items-start gap-3'>
            <i className='ri-map-pin-2-fill text-xl text-blue-500 mt-1'></i>
            <div>
              <h3 className='font-medium text-gray-900'>221B Baker Street</h3>
              <p className='text-sm text-gray-500'>London, UK</p>
            </div>
          </div>

          <div className='h-px bg-gray-200'></div>

          {/* Fare */}
          <div className='flex items-start gap-3'>
            <i className='ri-currency-line text-xl text-gray-700 mt-1'></i>
            <div>
              <h3 className='font-medium text-gray-900'>₹193.20</h3>
              <p className='text-sm text-gray-500'>Cash Payment</p>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => {
            props.setLookingfordriverPanel(true);
            props.setconfirmedRidePanel(false);
          }}
          className='w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-3 rounded-xl text-lg font-semibold shadow-md'
        >
          Confirm Ride
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
