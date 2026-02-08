import React from 'react';

const ConstructionPhases = ({ title, phases }) => {
    return (
        <div className="px-4 py-6 bg-gray-50 dark:bg-gray-900/50">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight mb-6">{title}</h3>
            <div className="relative pl-4 space-y-8 before:absolute before:left-[27px] before:top-2 before:h-[calc(100%-20px)] before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                {phases.map((phase, index) => (
                    <div key={index} className="relative flex gap-4 items-start">
                        <div className={`z-10 flex items-center justify-center shrink-0 w-8 h-8 rounded-full ${phase.active ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-white dark:bg-gray-800 border-2 border-primary text-primary'}`}>
                            <span className="material-symbols-outlined text-[18px]">{phase.icon}</span>
                        </div>
                        <div className="flex flex-col pt-0.5">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white">{phase.title}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{phase.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConstructionPhases;
