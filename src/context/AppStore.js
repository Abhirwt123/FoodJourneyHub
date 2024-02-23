import React, { useState } from 'react';
import { AppContext } from './AppContext';

const AppStore = ({ children }) => {
    const [letter, setLetter] = useState();
    const [cardId,setCardId]=useState();
    return (
        <AppContext.Provider value={{ letter, setLetter,cardId,setCardId}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppStore;
