import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LoactionSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const [confirmedRidePanel, setconfirmedRidePanel] = useState(false);
  const [lookingfordriverPanel, setLookingfordriverPanel] = useState(false);
  const [waitingfordriverPanel, setwaitingfordriverPanel] = useState(false);
  const tl = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const lookingfordriverPanelRef = useRef(null);
  const waitingfordriverPanelRef = useRef(null);


  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: '100%',
        duration: 0.7,
        ease: 'power3.out',

      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      });

    } else {
      gsap.to(confirmedRidePanelRef.current, {
        y: '100%',
        duration: 0.7,
        ease: 'power3.out',
      });
    }
  }, [confirmedRidePanel]);


  // Create animation ONCE
  useGSAP(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(panelRef.current, {
        height: '70%',
        padding: 24,
        duration: 0.4,
        ease: 'power3.out',
      })
      .to(
        panelCloseRef.current,
        {
          opacity: 1,
          duration: 0.2,
          pointerEvents: 'auto',
        },
        '<'
      );
  }, []);

  useGSAP(() => {
    if (lookingfordriverPanel) {
      gsap.to(lookingfordriverPanelRef.current, {
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      });
    } else {
      gsap.to(lookingfordriverPanelRef.current, {
        y: '100%',
        duration: 0.7,
        ease: 'power3.out',
      });
    }
  }, [lookingfordriverPanel]);

  useGSAP(() => {
    if (waitingfordriverPanel) {
      gsap.to(waitingfordriverPanelRef.current, {
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      });
    } else {
      gsap.to(waitingfordriverPanelRef.current, {
        y: '100%',
        duration: 0.7,
        ease: 'power3.out',
      });
    }
  }, [waitingfordriverPanel]);

  // Control animation via state
  React.useEffect(() => {
    if (panelOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [panelOpen]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className='h-screen relative overflow-hidden'>
      {/* Background Map */}
      <div className='h-screen w-screen'>
        <img
          className='h-full w-full object-cover'
          src='https://i.redd.it/g2r5ewz4tqk11.jpg'
          alt='uber map'
        />
      </div>
      {/* Search UI */}
      <div
        className='flex flex-col justify-end h-screen absolute w-full top-0'
      >
        <div className='h-[30%] relative p-6 bg-white'>
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='absolute right-7 top-7 text-2xl opacity-0 pointer-events-none'
          >
            <i className='ri-arrow-down-wide-line'></i>
          </h5>

          <h4 className='text-xl font-semibold'>Find a Trip</h4>

          <form onSubmit={submitHandler} className='relative'>
            <div className='line absolute h-16 w-1 top-[33%] left-6 bg-gray-800 rounded-full'></div>

            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type='text'
              placeholder='Add a pick-up location'
              value={pickup}
              onFocus={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
            />

            <input
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              type='text'
              placeholder='Enter your destination'
              value={destination}
              onFocus={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>

        {/* Sliding Panel */}
        <div ref={panelRef} className='bg-white h-0 overflow-hidden'>
          <LoactionSearchPanel
            setPanelOpen={setPanelOpen}
            setvehiclePanel={setvehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'
      >
        <VehiclePanel setvehiclePanel={setvehiclePanel} setPanelOpen={setPanelOpen} setconfirmedRidePanel={setconfirmedRidePanel} />
      </div>
      <div
        ref={confirmedRidePanelRef}
        className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'
      >
        <ConfirmedRide 
          setLookingfordriverPanel={setLookingfordriverPanel}
          setconfirmedRidePanel={setconfirmedRidePanel}
          setvehiclePanel={setvehiclePanel}
        />
      </div>
      <div
        ref={lookingfordriverPanelRef}
        className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'
      >
        <LookingForDriver 
          setLookingfordriverPanel={setLookingfordriverPanel}
          setconfirmedRidePanel={setconfirmedRidePanel}
        />
      </div>
      <div
        ref={waitingfordriverPanelRef}
        className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'
      >
        <WaitingForDriver setwaitingfordriverPanel={setwaitingfordriverPanel} setLookingfordriverPanel={setLookingfordriverPanel}
        />
      </div>
    </div>
  );
};

export default Home;
