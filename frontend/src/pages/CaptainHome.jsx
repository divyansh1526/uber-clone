import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import LogoutButton from '../components/LogoutButton';
import RideRequestPanel from '../components/RideRequestPanel';
import EarningsPanel from '../components/EarningsPanel';
import RideAcceptedPanel from '../components/RideAcceptedPanel';
import OtpPanel from '../components/OtpPanel';

const CaptainHome = () => {
  const [ridePanel, setRidePanel] = useState(false);
  const [rideAcceptedPanel, setRideAcceptedPanel] = useState(false);
  const [otpPanel, setOtpPanel] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const ridePanelRef = useRef(null);
  const rideAcceptedPanelRef = useRef(null);
  const otpPanelRef = useRef(null);

  /* Ride Request Animation */
  useGSAP(() => {
    if (!ridePanelRef.current) return;

    gsap.to(ridePanelRef.current, {
      y: ridePanel ? 0 : '100%',
      duration: ridePanel ? 0.3 : 0.45,
      ease: ridePanel ? 'power3.out' : 'power3.inOut',
    });
  }, [ridePanel]);

  /* OTP Panel Animation */
  useGSAP(() => {
    if (!otpPanelRef.current) return;

    gsap.to(otpPanelRef.current, {
      y: otpPanel ? 0 : '100%',
      duration: otpPanel ? 0.35 : 0.5,
      ease: otpPanel ? 'power3.out' : 'power3.inOut',
    });
  }, [otpPanel]);

  /* Ride Accepted Animation */
  useGSAP(() => {
    if (!rideAcceptedPanelRef.current) return;

    gsap.to(rideAcceptedPanelRef.current, {
      y: rideAcceptedPanel ? 0 : '100%',
      duration: rideAcceptedPanel ? 0.35 : 0.5,
      ease: rideAcceptedPanel ? 'power3.out' : 'power3.inOut',
    });
  }, [rideAcceptedPanel]);

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-white">
      {/* Map */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://i.redd.it/g2r5ewz4tqk11.jpg"
          alt="map"
        />
      </div>

      {/* Status Toggle */}
      <div className="fixed top-4 left-4 z-50 bg-white shadow-md rounded-full flex overflow-hidden">
        <button
          onClick={() => {
            setRidePanel(true);
            setIsActive(true);
          }}
          className={`px-4 py-2 text-sm font-medium ${
            isActive ? 'bg-green-600 text-white' : 'text-gray-600'
          }`}
        >
          Active
        </button>

        <button
          onClick={() => {
            setRidePanel(false);
            setIsActive(false);
            setOtpPanel(false);
            setRideAcceptedPanel(false);
          }}
          className={`px-4 py-2 text-sm font-medium ${
            !isActive ? 'bg-gray-900 text-white' : 'text-gray-600'
          }`}
        >
          Inactive
        </button>
      </div>

      <LogoutButton />

      {/* Earnings Panel */}
      {!ridePanel && !otpPanel && !rideAcceptedPanel && <EarningsPanel />}

      {/* Ride Request Panel */}
      <div
        ref={ridePanelRef}
        className="absolute bottom-0 left-0 right-0 z-40"
        style={{ transform: 'translateY(100%)' }}
      >
        {ridePanel && (
          <RideRequestPanel
            setRidePanel={setRidePanel}
            setOtpPanel={setOtpPanel}
          />
        )}
      </div>

      {/* OTP Panel */}
      <div
        ref={otpPanelRef}
        className="fixed inset-0 z-[60]"
        style={{ transform: 'translateY(100%)' }}
      >
        {otpPanel && (
          <OtpPanel
            setOtpPanel={setOtpPanel}
            setRideAcceptedPanel={setRideAcceptedPanel}
          />
        )}
      </div>

      {/* Ride Accepted Panel */}
      <div
        ref={rideAcceptedPanelRef}
        className="fixed inset-0 z-100"
        style={{ transform: 'translateY(100%)' }}
      >
        {rideAcceptedPanel && (
          <RideAcceptedPanel
            setRideAcceptedPanel={setRideAcceptedPanel}
          />
        )}
      </div>
    </div>
  );
};

export default CaptainHome;
