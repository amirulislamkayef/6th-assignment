import React from 'react';
import WorkoutCard from '../cards/WorkoutCard';


const getWorkout = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data;
}
const Workout = async () => {
    const workouts = await getWorkout()
    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="mb-12 text-left">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Popular Books
                </h2>

                <p className="text-left mt-3 max-w-2xl text-gray-300">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-4'> 
                {
                    workouts.map((workout, ind) => (
                        <WorkoutCard key={ind} workout={workout}></WorkoutCard>
                    ))
                }
            </div>
        </section>
    );
};

export default Workout;
