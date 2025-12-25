import HomeButton from "../components/HomeButton";

const Riding = () => {
  return (
    <div className="h-screen w-screen relative bg-white">
      {/* Map Section */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://i.redd.it/g2r5ewz4tqk11.jpg"
          alt="live map"
        />
      </div>
        <HomeButton />
      {/* Bottom Ride Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-4">
        {/* Drag Indicator */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

        {/* Driver Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
              A
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Amit Sharma</h3>
              <p className="text-sm text-gray-500">⭐ 4.8 · Hyundai Swift</p>
            </div>
          </div>

          <i className="ri-phone-fill text-xl text-green-600"></i>
        </div>

        <div className="h-px bg-gray-200 mb-4"></div>

        {/* Trip Info */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <i className="ri-map-pin-fill text-green-600 text-lg mt-1"></i>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Pickup Location
              </p>
              <p className="text-sm text-gray-500">
                5324/11-A, New York, USA
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="ri-map-pin-fill text-red-500 text-lg mt-1"></i>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Drop Location
              </p>
              <p className="text-sm text-gray-500">
                Times Square, New York
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="ri-timer-line text-blue-600 text-lg mt-1"></i>
            <div>
              <p className="text-sm font-medium text-gray-900">
                Estimated Time
              </p>
              <p className="text-sm text-gray-500">12 minutes remaining</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-200 my-4"></div>

        {/* Fare & Payment */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">Total Fare</p>
            <p className="text-xl font-semibold text-gray-900">₹193.20</p>
          </div>

          <div className="flex items-center gap-2">
            <i className="ri-cash-line text-xl text-gray-700"></i>
            <p className="text-sm font-medium text-gray-700">Cash</p>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white py-3 rounded-xl text-lg font-semibold">
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
