import React from 'react';
import { Link } from 'react-router-dom';
import FinishRide from '../components/FinishRide';
import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null);

    /* Finish Ride Animation */ 
    useGSAP(() => {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
            y: 0,
            duration: 0.3,
            ease: 'power3.out',
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
            y: '100%',
            duration: 0.3,
            ease: 'power3.in',
        });
      }
    }, [finishRidePanel]);


  return (
    <div className="h-screen w-screen relative bg-white">
      {/* Map Section */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://i.redd.it/g2r5ewz4tqk11.jpg"
          alt="map"
        />
      </div>

      {/* Bottom Ride Panel */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl p-5">
        {/* Drag Indicator */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

        {/* Ride Status */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500">On Trip</p>
            <h4 className="text-lg font-semibold text-gray-900">
              4 km away · Arriving in 3 mins
            </h4>
          </div>

          <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
            <i className="ri-timer-line text-green-600"></i>
            <span className="text-sm font-medium text-green-700">
              Live
            </span>
          </div>
        </div>

        {/* Trip Details */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3 mb-4">
          <div className="flex items-start gap-3">
            <i className="ri-map-pin-fill text-green-600 mt-1"></i>
            <div>
              <p className="text-sm font-medium text-gray-900">Pickup</p>
              <p className="text-sm text-gray-500">
                5324/11-A, New York
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <i className="ri-map-pin-fill text-red-500 mt-1"></i>
            <div>
              <p className="text-sm font-medium text-gray-900">Drop</p>
              <p className="text-sm text-gray-500">
                Times Square, New York
              </p>
            </div>
          </div>
        </div>

        {/* Complete Ride CTA */}
        <button onClick={()=>{
            setFinishRidePanel(true);
        }} className="w-full bg-yellow-400 hover:bg-yellow-500 transition-colors text-gray-900 py-4 rounded-2xl text-lg font-semibold shadow-md">
          Complete Ride
        </button>
      </div>
        {/* Finish Ride Panel */}
        <div ref={finishRidePanelRef} className="fixed inset-0 z-100" style={{transform: 'translateY(100%)'}}>
            <FinishRide/>
        </div>
    </div>
        
  );
};

export default CaptainRiding;
