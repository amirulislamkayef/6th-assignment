'use client'
import React from 'react';
import { useContext } from 'react';
import { WorkoutContext } from '@/context/WorkoutContext';
import { toast } from 'react-toastify';

const SaveLater = ({workout}) => {

     const { saved, setSaved } = useContext(WorkoutContext)
    
        const handleSaved = () => {
    
            const alreadyAdded = saved.some(
                (item) => item.id === workout.id
            );
            if (alreadyAdded) {
                toast.error("This workout is already in your Saved list");
                return;
            }
    
            setSaved([...saved, workout])
            toast.success(`"${workout.name}" added to Saved list`)
    
        }

    return (
        <div>
            <button className="rounded-lg border border-[#30343d] px-5 py-3 text-sm text-gray-300 hover:bg-[#191c23]" onClick={() => handleSaved()}>
                Save for later
            </button>
        </div>
    );
};

export default SaveLater;