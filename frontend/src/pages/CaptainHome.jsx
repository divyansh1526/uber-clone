import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import LogoutButton from '../components/LogoutButton';
import RideRequestPanel from '../components/RideRequestPanel';
import EarningsPanel from '../components/EarningsPanel';

const CaptainHome = () => {
  const [ridePanel, setRidePanel] = useState(false);
  const ridePanelRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  // Animate ride request panel
  useEffect(() => {
    if (!ridePanelRef.current) return;

    if (ridePanel) {
      gsap.fromTo(
        ridePanelRef.current,
        { y: '100%' },
        {
          y: '0%',
          duration: 0.4,
          ease: 'power3.out',
        }
      );
    } else {
      gsap.to(ridePanelRef.current, {
        y: '100%',
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [ridePanel]);

  return (
    <div className='h-screen w-screen relative bg-white'>
      {/* Map */}
      <div className='absolute inset-0'>
        <img
          className='h-full w-full object-cover'
          src='https://i.redd.it/g2r5ewz4tqk11.jpg'
          alt='map'
        />
      </div>

      {/* Status Toggle */}
      <div className='fixed top-4 left-4 z-50 bg-white shadow-md rounded-full flex overflow-hidden'>
        <button
          onClick={() => {
            setRidePanel(true);
            setIsActive(true);
          }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            isActive ? 'bg-green-600 text-white' : 'text-gray-600'
          }`}
        >
          Active
        </button>

        <button
          onClick={() => {
            setRidePanel(false);
            setIsActive(false);
          }}
          className={`px-4 py-2 text-sm font-medium transition-colors ${
            !isActive ? 'bg-gray-900 text-white' : 'text-gray-600'
          }`}
        >
          Inactive
        </button>
      </div>

      <LogoutButton />

      {/* Earnings Panel (Default) */}
      {!ridePanel && <EarningsPanel />}

      {/* Ride Request Panel (Animated) */}
      <div
        ref={ridePanelRef}
        className='absolute bottom-0 left-0 right-0 z-40'
        style={{ transform: 'translateY(100%)' }}
      >
        {ridePanel && <RideRequestPanel onReject={() => setRidePanel(false)} />}
      </div>
    </div>
  );
};

export default CaptainHome;
