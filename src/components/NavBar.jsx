'use client'
import React from "react";
import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";
import { useContext } from 'react';
import { WorkoutContext } from '@/context/WorkoutContext';

const NavBar = () => {
  const { plan, saved } = useContext(WorkoutContext)
  const items = (
    <>
      <li>
        <Link
          href="/"
          className=" text-gray-400 hover:text-white px-4 py-1 text-1xl font-medium"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className="text-1xl text-gray-400 hover:text-white"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="border-b border-gray-800">
      <div className="mx-auto flex h-12 max-w-7xl items-center px-5">

        {/* Left - Logo */}
        <Image src={logo} alt="logo"></Image>
        <div className="navbar-start">
          <Link
            href="/"
            className="font-black tracking-wide text-white text-2xl ml-2"
          >
            FITLOG
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-3">
            {items}
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-10 mt-3 w-40 rounded-lg border border-gray-800 bg-[#111214] p-2 shadow-xl"
            >
              {items}
            </ul>
          </div>
        </div>
        <div className="navbar-end lg:flex">
          <div className="flex items-center gap-5 text-1xl">

            {/* Plan */}
            <div className="flex items-center gap-1 text-white">
              <span className="text-semibold">Plan</span>
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-lime-400 text-4 font-bold text-black">
                {plan.length}
              </span>
            </div>

            {/* Saved */}
            <div className="flex items-center gap-1 text-white">
              <span>Saved</span>
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-gray-600 text-4 text-gray-300">
                {saved.length}
              </span>
            </div>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default NavBar;