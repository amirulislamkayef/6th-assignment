import React from 'react';
import Image from 'next/image';
import AddToPlan from '@/components/buttons/AddToPlan';
import SaveLater from '@/components/buttons/SaveLater';


const getWorkout = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await res.json()
    return data;
}

const WorkoutsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const workoustdata = await getWorkout()
    const workout = workoustdata.find((workout) => workout.id === Number(id))
    return (
        <main className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-2xl bg-[#101217] lg:grid-cols-2">
                <div className="h-125 lg:h-auto">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        height={100}
                        width={100}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-7 lg:p-8">
                    <h1 className="text-3xl font-extrabold uppercase">
                        {workout.name}
                    </h1>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                        {workout.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 overflow-hidden rounded-xl border border-[#242832] bg-[#151820]">

                        <div className="flex items-center justify-between border-b border-[#242832] px-4 py-3">
                            <span className="text-[10px] font-bold tracking-wider text-gray-500">
                                EQUIPMENT
                            </span>

                            <span className="text-xs text-gray-300">
                                {workout.equipment}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#242832] px-4 py-3">
                            <span className="text-[10px] font-bold tracking-wider text-gray-500">
                                DIFFICULTY
                            </span>

                            <span className="text-xs text-gray-300">
                                {workout.difficulty}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#242832] px-4 py-3">
                            <span className="text-[10px] font-bold tracking-wider text-gray-500">
                                SETS
                            </span>

                            <span className="text-xs text-gray-300">
                                {workout.sets}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#242832] px-4 py-3">
                            <span className="text-[10px] font-bold tracking-wider text-gray-500">
                                REPS
                            </span>

                            <span className="text-xs text-gray-300">
                                {workout.reps}
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#242832] px-4 py-3">
                            <span className="text-[10px] font-bold tracking-wider text-gray-500">
                                DURATION
                            </span>

                            <span className="text-xs text-gray-300">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex items-center justify-between border-b border-[#242832] px-4 py-3">
                            <span className="text-[10px] font-bold tracking-wider text-gray-500">
                                CALORIES
                            </span>

                            <span className="text-xs text-gray-300">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-[10px] font-bold tracking-wider text-gray-500">
                                RATING
                            </span>

                            <span className="text-xs text-gray-300">
                                {workout.rating}
                            </span>
                        </div>

                    </div>

                    <div className="mt-6">
                        <h2 className="text-sm font-extrabold">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-3 space-y-3">
                            {workout.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="flex gap-3 text-sm leading-5 text-gray-400"
                                >
                                    <span className="text-gray-500">
                                        {index + 1}.
                                    </span>

                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex flex-wrap gap-3">
                        <AddToPlan workout={workout}></AddToPlan>
                        <SaveLater workout={workout}></SaveLater>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WorkoutsDetailsPage;
