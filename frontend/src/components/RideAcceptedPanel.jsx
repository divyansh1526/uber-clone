import { Link } from 'react-router-dom';

const RideAcceptedPanel = (props) => {
  return (
    <div className="fixed inset-0 z-100 bg-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
        <h3 className="text-xl font-semibold text-center">
          Ride Accepted
        </h3>
        <p className="text-center text-sm text-gray-500 mt-1">
          Head to pickup location
        </p>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-4  py-13 space-y-6">
        {/* Rider Profile */}
        <div className="bg-gray-50 rounded-xl p-4 flex justify-between items-center">
          <div className="flex gap-3">
            <div className="h-14 w-14 rounded-full bg-gray-300 flex items-center justify-center text-xl font-semibold">
              R
            </div>
            <div>
              <p className="font-medium text-lg">Rahul Verma</p>
              <p className="text-sm text-gray-500">⭐ 4.6 · 128 rides</p>
              <p className="text-xs text-green-600">✔ Phone verified</p>
            </div>
          </div>

          <button className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <i className="ri-phone-fill text-green-600 text-xl"></i>
          </button>
        </div>

        {/* Trip Details */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-4">
          <div className="flex gap-3">
            <i className="ri-map-pin-fill text-green-600 mt-1"></i>
            <div>
              <p className="font-medium">Pickup</p>
              <p className="text-sm text-gray-600">5324/11-A, New York</p>
            </div>
          </div>

          <div className="flex gap-3">
            <i className="ri-map-pin-fill text-red-500 mt-1"></i>
            <div>
              <p className="font-medium">Drop</p>
              <p className="text-sm text-gray-600">Times Square</p>
            </div>
          </div>

          <div className="flex gap-3">
            <i className="ri-timer-line text-blue-600 mt-1"></i>
            <div>
              <p className="font-medium">ETA to pickup</p>
              <p className="text-sm text-gray-600">5 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom actions */}
      <div className="p-4 border-t flex justify-evenly items-center gap-3">
        <button
          onClick={()=>{
            props.setRideAcceptedPanel(false);
            props.setRidePanel(false);
          }}
          className="flex-1 justify-center items-center bg-red-100 text-red-600 py-3 rounded-xl font-medium"
        >
          Cancel Ride
        </button>
        <Link to="/captain-riding" className="flex-1 bg-green-600 text-white py-3 rounded-xl font-medium text-center">
          Start Navigation
        </Link>
      </div>
    </div>
  );
};

export default RideAcceptedPanel;
