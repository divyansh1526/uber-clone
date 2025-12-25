const EarningsPanel = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-4 z-40">
      <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-lg">Today’s Earnings</h3>
          <p className="text-sm text-gray-500">You are currently offline</p>
        </div>
        <p className="text-xl font-bold text-green-600">₹325.00</p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="bg-yellow-100 rounded-xl p-3 flex flex-col items-center gap-1">
          <i className="ri-time-line text-xl text-gray-700"></i>
          <p className="text-lg font-semibold">10.2</p>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>

        <div className="bg-yellow-100 rounded-xl p-3 flex flex-col items-center gap-1">
          <i className="ri-route-line text-xl text-gray-700"></i>
          <p className="text-lg font-semibold">30 KM</p>
          <p className="text-xs text-gray-600">Distance</p>
        </div>

        <div className="bg-yellow-100 rounded-xl p-3 flex flex-col items-center gap-1">
          <i className="ri-briefcase-line text-xl text-gray-700"></i>
          <p className="text-lg font-semibold">20</p>
          <p className="text-xs text-gray-600">Jobs Done</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsPanel;
