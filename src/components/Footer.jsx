import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-[#202329] bg-[#101114]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                <div className="flex items-center gap-2">
                    <span className="text-xs font-black tracking-wide text-white">
                        FITLOG
                    </span>
                </div>

                <p className="text-[9px] text-gray-500">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
};

export default Footer;