import { createContext, useState } from 'react';


export const CaptainDataContext = createContext();

const captainContext = ({ children }) => {

    const [captain, setcaptain] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:'',
        }
    })

  return (
    <div>
      <CaptainDataContext.Provider value={[ captain, setcaptain ]}>
        {children}
        </CaptainDataContext.Provider>
    </div>
  );
};

export default captainContext;
