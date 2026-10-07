'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WorkoutContext } from '@/context/WorkoutContext';

const MyPlanPage = () => {
    const { plan, saved, setPlan } = useContext(WorkoutContext);

    const [activeTab, setActiveTab] = useState('plan');
    const [sortBy, setSortBy] = useState('duration');
    const [completed, setCompleted] = useState([]);

    const currentList = activeTab === 'plan' ? plan : saved;

    const sortedWorkouts = [...currentList].sort((a, b) => {
        if (sortBy === 'duration') {
            return Number(a.duration) - Number(b.duration);
        }

        if (sortBy === 'calories') {
            return Number(a.caloriesBurned) - Number(b.caloriesBurned);
        }

        if (sortBy === 'rating') {
            return Number(b.rating) - Number(a.rating);
        }

        return 0;
    });

    const totalMinutes = currentList.reduce(
        (total, workout) => total + Number(workout.duration || 0),
        0
    );

    const totalCalories = currentList.reduce(
        (total, workout) => total + Number(workout.caloriesBurned || 0),
        0
    );

    const removeWorkout = (id) => {
        if (activeTab === 'plan') {
            const remainingWorkouts = plan.filter(
                (workout) => workout.id !== id
            );

            setPlan(remainingWorkouts);

            setCompleted((prev) =>
                prev.filter((item) => item !== id)
            );
        }
    };

    const toggleCompleted = (id) => {
        if (completed.includes(id)) {
            setCompleted(
                completed.filter((item) => item !== id)
            );
        } else {
            setCompleted([...completed, id]);
        }
    };

    return (
        <main className="min-h-screen bg-[#0d0f13] text-white">

            <section className="mx-auto max-w-7xl px-6 py-8">

                <div className="mb-6">
                    <h1 className="text-3xl font-extrabold tracking-tight">
                        MY PLAN
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                <div className="stats grid w-full grid-cols-3 overflow-hidden rounded-xl border border-[#242832] bg-[#12151b] shadow-none">

                    <div className="stat px-5 py-5">
                        <div className="text-xs font-medium text-gray-500">
                            Exercises
                        </div>

                        <div className="mt-2 text-3xl font-extrabold leading-none text-lime-400">
                            {currentList.length}
                        </div>
                    </div>

                    <div className="stat border-l border-[#242832] px-5 py-5">
                        <div className="text-xs font-medium text-gray-500">
                            Minutes
                        </div>

                        <div className="mt-2 text-3xl font-extrabold leading-none">
                            {totalMinutes}
                        </div>
                    </div>

                    <div className="stat border-l border-[#242832] px-5 py-5">
                        <div className="text-xs font-medium text-gray-500">
                            Calories
                        </div>

                        <div className="mt-2 text-3xl font-extrabold leading-none">
                            {totalCalories}
                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-between gap-4">

                    <div className="tabs tabs-boxed h-9 rounded-md border border-[#252932] bg-[#15181e] p-1">

                        <button
                            type="button"
                            onClick={() => setActiveTab('plan')}
                            className={`tab h-7 min-h-0 px-4 text-xs ${activeTab === 'plan'
                                    ? 'rounded bg-[#20242c] font-semibold text-white'
                                    : 'text-gray-500'
                                }`}
                        >
                            Todays Plan
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab('saved')}
                            className={`tab h-7 min-h-0 px-4 text-xs ${activeTab === 'saved'
                                    ? 'rounded bg-[#20242c] font-semibold text-white'
                                    : 'text-gray-500'
                                }`}
                        >
                            Saved
                        </button>

                    </div>

                    <label className="flex items-center gap-2 text-xs text-gray-500">
                        Sort By
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="select select-sm h-8 min-h-0 rounded-md border-[#30343d] bg-[#15181e] px-3 text-xs text-gray-300 outline-none"
                        >
                            <option value="duration">
                                Duration
                            </option>

                            <option value="calories">
                                Calories
                            </option>

                            <option value="rating">
                                Rating
                            </option>
                        </select>
                    </label>
                </div>
                <div className="mt-5 space-y-3">

                    {sortedWorkouts.map((workout) => {

                        const isDone = completed.includes(workout.id);

                        return (
                            <div
                                key={workout.id}
                                className="group flex min-h-22 items-center gap-4 rounded-xl border border-[#242832] bg-[#12151b] px-3 py-3 transition hover:border-[#303640]"
                            >
                                <div className="relative h-14 w-25 shrink-0 overflow-hidden rounded-lg">

                                    <Image
                                        src={workout.image}
                                        alt={workout.name}
                                        fill
                                        sizes="100px"
                                        className="object-cover"
                                    />

                                </div>
                                <div className="min-w-0 flex-1">

                                    <h2 className="truncate text-sm font-extrabold uppercase tracking-wide">
                                        {workout.name}
                                    </h2>

                                    <p className="mt-0.5 truncate text-[11px] text-gray-500">
                                        {workout.equipment}
                                    </p>

                                    <div className="mt-2 flex items-center gap-3 text-[10px] text-gray-400">

                                        <div className="flex items-center gap-1.5">
                                            <span className="text-lime-400">
                                                ◷
                                            </span>

                                            <span>
                                                {workout.duration} min
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <span className="text-lime-400">
                                                ◉
                                            </span>

                                            <span>
                                                {workout.caloriesBurned} kcal
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <span className="text-lime-400">
                                                ★
                                            </span>

                                            <span>
                                                {workout.rating}
                                            </span>
                                        </div>

                                    </div>

                                </div>

                                <div className="flex shrink-0 items-center gap-2">

                                    <Link
                                        href={`/workout/${workout.id}`}
                                        className="btn btn-sm h-8 min-h-0 rounded-full border border-[#303640] bg-transparent px-4 text-[10px] font-normal text-gray-300 shadow-none hover:border-gray-500 hover:bg-[#191c22] hover:text-white"
                                    >
                                        View Details
                                    </Link>

                                    {activeTab === 'plan' && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                toggleCompleted(workout.id)
                                            }
                                            className="btn btn-sm h-8 min-h-0 rounded-full border-none bg-lime-400 px-4 text-[10px] font-bold text-black shadow-none hover:bg-lime-300"
                                        >
                                            <span className="text-sm">
                                                ✓
                                            </span>

                                            {isDone
                                                ? 'Done'
                                                : 'Mark as Done'}
                                        </button>
                                    )}

                                    <button
                                        type="button"
                                        aria-label={`Remove ${workout.name}`}
                                        onClick={() =>
                                            removeWorkout(workout.id)
                                        }
                                        className="btn btn-ghost btn-sm h-8 min-h-0 w-8 rounded-full p-0 text-lg font-normal text-gray-500 hover:bg-transparent hover:text-white"
                                    >
                                        x
                                    </button>

                                </div>

                            </div>
                        );
                    })}

                    {sortedWorkouts.length === 0 && (
                        <div className="rounded-xl border border-dashed border-[#292d35] bg-[#111419] py-14 text-center">

                            <p className="text-base font-semibold text-gray-400">
                                {activeTab === 'plan'
                                    ? "No workouts in today's plan"
                                    : 'No saved workouts'}
                            </p>

                            <p className="mt-2 text-sm text-gray-600">
                                Add workouts to see them here.
                            </p>

                        </div>
                    )}

                </div>

            </section>

        </main>
    );
};

export default MyPlanPage;