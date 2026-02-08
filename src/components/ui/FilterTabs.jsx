import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const FilterTabs = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar snap-x">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={clsx(
                        "snap-start shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all active:scale-95",
                        activeTab === tab.id
                            ? "bg-primary text-white shadow-md shadow-primary/20 font-bold"
                            : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                    )}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default FilterTabs;
