const RideRequestPanel = (props) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-4 z-40">
      {/* Drag handle */}
      <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

      {/* Header */}
      <h3 className="text-lg font-semibold mb-4">New Ride Request</h3>

      {/* Rider Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
            R
          </div>
          <div>
            <p className="font-medium text-gray-900">Rahul Verma</p>
            <p className="text-sm text-gray-500">⭐ 4.6 · Rider</p>
          </div>
        </div>

        {/* Call Rider */}
        <button className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
          <i className="ri-phone-fill text-green-600 text-lg"></i>
        </button>
      </div>

      <div className="space-y-3">
        {/* Pickup */}
        <div className="flex items-start gap-3">
          <i className="ri-map-pin-fill text-green-600 mt-1"></i>
          <p className="text-sm text-gray-700">5324/11-A, New York</p>
        </div>

        {/* Drop */}
        <div className="flex items-start gap-3">
          <i className="ri-map-pin-fill text-red-500 mt-1"></i>
          <p className="text-sm text-gray-700">Times Square, New York</p>
        </div>

        {/* Fare */}
        <div className="flex items-start gap-3">
          <i className="ri-currency-line mt-1"></i>
          <p className="text-sm text-gray-700">₹193.20 · Cash</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-5">
        <button onClick={()=>{
            props.setRidePanel(false);
        }} className="flex-1 bg-gray-200 py-3 rounded-xl font-medium">
          Ignore
        </button>
        <button onClick={()=>{
            props.setOtpPanel(true);
            props.setRidePanel(false);
        }} className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium">
          Accept
        </button>
      </div>
    </div>
  );
};

export default RideRequestPanel;
