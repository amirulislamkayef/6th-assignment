'use client'
import React from 'react';
import { useContext } from 'react';
import { WorkoutContext } from '@/context/WorkoutContext';
import { toast } from 'react-toastify';

const AddToPlan = ({ workout }) => {

    const { plan, setPlan } = useContext(WorkoutContext)

    const handleAddToPlan = () => {

        const alreadyAdded = plan.some(
            (item) => item.id === workout.id
        );
        if (alreadyAdded) {
            toast.error("This workout is already in your plan");
            return;
        }

        setPlan([...plan, workout])
        toast.success(`"${workout.name}" added to your plan`)

    }
    return (
        <div>
            <button className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold text-black hover:bg-lime-300" onClick={() => handleAddToPlan()}>
                Add to todays plan
            </button>
        </div>
    );
};

export default AddToPlan;