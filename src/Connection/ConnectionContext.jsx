
import { useState } from 'react';
import { SeeContext } from './ConnectionProvide';



const ConnectionContext = ({children}) => {
     const [action, setAction] = useState([]);

     const data = {
        action, setAction
     }
    return <SeeContext.Provider value={data}>{children}</SeeContext.Provider>
};

export default ConnectionContext;