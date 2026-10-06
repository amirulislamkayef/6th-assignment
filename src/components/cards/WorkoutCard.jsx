import Image from "next/image";

const WorkoutCard = ({ workout }) => {
    return (
        <div>
            <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c] text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-2xl">
                <div className="relative h-52 w-full overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-5">

                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.slice(0, 2).map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h2 className="mt-5 text-xl font-bold uppercase tracking-wide">
                        {workout.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mt-1 text-sm text-gray-400">
                        {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-5 grid grid-cols-3 border border-gray-800 bg-[#17191f]">

                        {/* Duration */}
                        <div className="flex items-center gap-2 border-r border-gray-800 px-3 py-3">
                            <span className="text-gray-300">◯</span>

                            <div>
                                <p className="text-xs text-gray-300">
                                    {workout.duration} min
                                </p>
                            </div>
                        </div>

                        {/* Calories */}
                        <div className="flex items-center gap-2 border-r border-gray-800 px-3 py-3">
                            <span className="text-gray-300">●</span>

                            <div>
                                <p className="text-xs text-gray-300">
                                    {workout.caloriesBurned} Kcal
                                </p>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 px-3 py-3">
                            <span className="text-gray-300">☆</span>

                            <p className="text-xs text-gray-300">
                                {workout.rating}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;