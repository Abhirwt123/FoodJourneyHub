import React, { useState } from 'react';
import { AppContext } from './AppContext';

const AppStore = ({ children }) => {
    const [letter, setLetter] = useState();
    return (
        <AppContext.Provider value={{ letter, setLetter}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppStore;
