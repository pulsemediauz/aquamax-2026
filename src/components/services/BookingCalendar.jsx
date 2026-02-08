import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const BookingCalendar = () => {
    const { t } = useTranslation();
    const [selectedDay, setSelectedDay] = useState(8);

    const days = [
        { label: '1', active: false }, { label: '2', active: false }, { label: '3', active: false }, { label: '4', active: false },
        { label: '5', active: false }, { label: '6', active: false }, { label: '7', active: false }, { label: '8', active: true },
        { label: '9', active: false }, { label: '10', active: false }, { label: '11', active: false }
    ];

    return (
        <div className="mt-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark">
            <div className="px-4 pt-6 pb-2">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{t('services.maintenance.calendar_title')}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Select a date for your technician to arrive.</p>
            </div>
            <div className="p-4">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                        <button className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <span className="font-bold text-slate-900 dark:text-white">October 2023</span>
                        <button className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                    {/* Simplified Week View for demo */}
                    <div className="grid grid-cols-7 gap-1 text-center">
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                            <div key={d} className="text-xs font-medium text-slate-400">{d}</div>
                        ))}
                        <div className="p-2"></div><div className="p-2"></div>
                        {days.map((d, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedDay(parseInt(d.label))}
                                className={`h-9 w-9 mx-auto flex items-center justify-center rounded-full text-sm ${d.active || selectedDay === parseInt(d.label) ? 'bg-primary text-white shadow-md font-bold' : 'text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                            >
                                {d.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-4 pb-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Available Time Slots</h3>
                <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                    {['09:00 AM', '11:00 AM', '02:00 PM', '04:30 PM'].map((time, i) => (
                        <button key={i} className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm ${i === 1 ? 'bg-primary text-white font-bold shadow-md' : 'border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 font-medium text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary'}`}>
                            {time}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookingCalendar;
