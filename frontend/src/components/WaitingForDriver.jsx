const WaitingForDriver = (props) => {
  return (
    <div className="w-full p-4">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold text-gray-900">
        Driver is on the way
      </h2>

      <div className="w-full h-px bg-gray-300 my-4"></div>

      <div className="flex flex-col items-center gap-6">
        {/* Vehicle Image */}
        <img
          className="h-20 object-contain"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8zMDUxZTYwMi0xMGJiLTRlNjUtYjEyMi1lMzk0ZDgwYTljNDcucG5n"
          alt="driver on the way"
        />

        {/* Driver Card */}
        <div className="w-full bg-gray-50 rounded-xl p-4 space-y-4">
          {/* Driver Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
                A
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Amit Sharma</h3>
                <p className="text-sm text-gray-500">⭐ 4.8 · 2,134 rides</p>
              </div>
            </div>

            <i className="ri-phone-fill text-xl text-green-600"></i>
          </div>

          <div className="h-px bg-gray-200"></div>

          {/* Vehicle Info */}
          <div className="flex items-start gap-3">
            <i className="ri-car-fill text-xl text-gray-700 mt-1"></i>
            <div>
              <h3 className="font-medium text-gray-900">
                Hyundai Swift · White
              </h3>
              <p className="text-sm text-gray-500">DL 01 AB 2345</p>
            </div>
          </div>

          <div className="h-px bg-gray-200"></div>

          {/* ETA */}
          <div className="flex items-start gap-3">
            <i className="ri-timer-line text-xl text-blue-600 mt-1"></i>
            <div>
              <h3 className="font-medium text-gray-900">
                Arriving in 4 minutes
              </h3>
              <p className="text-sm text-gray-500">
                Driver is heading to your pickup location
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="w-full flex gap-3">
          <button
            onClick={() => {
              props.setwaitingfordriverPanel(false);
              props.setLookingfordriverPanel(true);
            }}
            className="flex-1 bg-gray-200 hover:bg-gray-300 transition-colors text-gray-900 py-3 rounded-xl font-medium">
            Cancel
          </button>
          <button className="flex-1 bg-green-600 hover:bg-green-700 transition-colors text-white py-3 rounded-xl font-medium">
            Call Driver
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
