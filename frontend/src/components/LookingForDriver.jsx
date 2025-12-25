const LookingForDriver = (props) => {
  return (
    <div className='w-full p-4'>
      {/* Title */}
      <h2 className='text-center text-2xl font-semibold text-gray-900'>
        Looking for nearby drivers
      </h2>

      <div className='w-full h-px bg-gray-300 my-4'></div>

      <div className='flex flex-col items-center gap-6'>
        {/* Animated Loader */}
        <div className='relative flex items-center justify-center'>
          <div className='absolute h-24 w-24 rounded-full border-4 border-gray-200'></div>
          <div className='h-24 w-24 rounded-full border-4 border-black border-t-transparent animate-spin'></div>
        </div>

        {/* Vehicle */}
        <img
          className='h-20 object-contain opacity-90'
          src='https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMDUxZTYwMi0xMGJiLTRlNjUtYjEyMi1lMzk0ZDgwYTljNDcucG5n'
          alt='searching driver'
        />

        {/* Status Card */}
        <div className='w-full bg-gray-50 rounded-xl p-4 space-y-4'>
          <div className='flex items-start gap-3'>
            <i className='ri-map-pin-2-fill text-xl text-green-600 mt-1'></i>
            <div>
              <h3 className='font-medium text-gray-900'>Pickup location</h3>
              <p className='text-sm text-gray-500'>5324/11-A, New York, USA</p>
            </div>
          </div>

          <div className='h-px bg-gray-200'></div>

          <div className='flex items-start gap-3'>
            <i className='ri-timer-line text-xl text-gray-700 mt-1'></i>
            <div>
              <h3 className='font-medium text-gray-900'>
                Connecting you to a driver
              </h3>
              <p className='text-sm text-gray-500'>
                This usually takes less than a minute
              </p>
            </div>
          </div>
        </div>

        {/* Cancel Button */}
        <button
          onClick={() => {
            props.setLookingfordriverPanel(false);
            props.setconfirmedRidePanel(true);
          }}
          className='w-full bg-red-500 text-white py-3 rounded-xl text-lg font-medium'
        >
          Cancel Ride
        </button>
      </div>
    </div>
  );
};

export default LookingForDriver;
