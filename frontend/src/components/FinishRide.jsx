import React from 'react';
import { Link } from 'react-router-dom';

const FinishRide = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Header */}
      <header className="shrink-0 px-4 py-3 border-b">
        <h2 className="text-xl font-semibold text-center text-gray-900">
          Ride Completed
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Collect payment from the rider
        </p>
      </header>

      {/* Scrollable Content */}
      <main className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-md mx-auto space-y-4">
          
          {/* Trip Summary */}
          <section className="bg-gray-50 rounded-xl p-4 space-y-3">
            <div className="flex gap-3 items-start">
              <i className="ri-map-pin-fill text-green-600 text-lg mt-0.5"></i>
              <div>
                <p className="text-sm font-medium text-gray-900">Pickup</p>
                <p className="text-sm text-gray-600">
                  5324/11-A, New York
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <i className="ri-map-pin-fill text-red-500 text-lg mt-0.5"></i>
              <div>
                <p className="text-sm font-medium text-gray-900">Drop</p>
                <p className="text-sm text-gray-600">
                  Times Square, New York
                </p>
              </div>
            </div>
          </section>

          {/* Rider Info */}
          <section className="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 shrink-0 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
                R
              </div>
              <div>
                <p className="font-medium text-gray-900">Rahul Verma</p>
                <p className="text-sm text-gray-500">⭐ 4.6 · Rider</p>
              </div>
            </div>
            <i className="ri-user-line text-xl text-gray-500"></i>
          </section>

          {/* Payment Summary */}
          <section className="bg-green-50 border border-green-200 rounded-xl p-4 space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-900">Total Fare</p>
              <p className="text-lg font-semibold text-gray-900">₹193.20</p>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-900">
                Payment Method
              </p>
              <div className="flex items-center gap-2">
                <i className="ri-cash-line text-green-600"></i>
                <span className="text-sm text-gray-700">Cash</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm font-medium text-gray-900">Status</p>
              <span className="text-sm font-medium text-green-700">
                Pending Collection
              </span>
            </div>
          </section>

          {/* Warning */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <p className="text-sm text-yellow-800 leading-relaxed">
              Please collect the cash amount from the rider before completing
              the trip.
            </p>
          </section>
        </div>
      </main>

      {/* Bottom Action */}
      <footer className="shrink-0 px-4 py-3 border-t bg-white">
        <Link to="/captain-home" className="w-full max-w-md mx-auto block bg-green-600 hover:bg-green-700 transition-colors text-white py-4 rounded-2xl text-lg font-semibold text-center ">
          Confirm Payment Received
        </Link>
      </footer>
    </div>
  );
};

export default FinishRide;
