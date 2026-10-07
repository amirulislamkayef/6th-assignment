'use client';
import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';


export const WorkoutContext = createContext({})

const WorkoutProvider = ({ children }) => {
    const [plan, setPlan] = useState([])
    const [saved, setSaved] = useState([])

    const sharedData = {
        plan,
        setPlan,
        saved,
        setSaved,
    }
    return (
        <WorkoutContext.Provider value={sharedData}>
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;
