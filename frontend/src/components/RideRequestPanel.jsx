const RideRequestPanel = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-4 z-40">
      <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

      <h3 className="text-lg font-semibold mb-3">New Ride Request</h3>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <i className="ri-map-pin-fill text-green-600"></i>
          <p className="text-sm text-gray-700">5324/11-A, New York</p>
        </div>

        <div className="flex items-start gap-3">
          <i className="ri-map-pin-fill text-red-500"></i>
          <p className="text-sm text-gray-700">Times Square, New York</p>
        </div>

        <div className="flex items-start gap-3">
          <i className="ri-currency-line"></i>
          <p className="text-sm text-gray-700">₹193.20 · Cash</p>
        </div>
      </div>

      <div className="flex gap-3 mt-5">
        <button
          className="flex-1 bg-gray-200 py-3 rounded-xl font-medium"
        >
          Ignore
        </button>
        <button className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium">
          Accept
        </button>
      </div>
    </div>
  );
};

export default RideRequestPanel;
