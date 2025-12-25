import React from 'react';

const LocationSearchPanel = (props) => {
  const locations = [
    'New York, USA',
    'Los Angeles, USA',
    'Chicago, USA',
    'Houston, USA',
    'Phoenix, USA',
  ];

  return (
    <div
      onClick={() => {
        props.setvehiclePanel(true);
        props.setPanelOpen(false); 
      }}
      className='flex flex-col justify-center items-start gap-5'
    >
      {locations.map((location, index) => (
        <div key={index} className='flex p-2 w-full gap-4 border-2 border-gray-300 active:border-black items-center justify-start'>
          <h2 className='bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full'>
            <i className='ri-map-pin-fill text-lg'></i>
          </h2>
          <h4 className='font-medium'>{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
