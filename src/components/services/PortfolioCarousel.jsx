import React from 'react';

const PortfolioCarousel = ({ title, items }) => {
    return (
        <div className="flex flex-col pt-6 pb-2">
            <div className="flex items-center justify-between px-4 mb-3">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">{title}</h3>
                <button className="text-primary text-sm font-bold">See All</button>
            </div>
            <div className="overflow-x-auto flex gap-4 px-4 pb-4 snap-x snap-mandatory no-scrollbar">
                {items.map((item, index) => (
                    <div key={index} className="shrink-0 snap-center w-[240px] flex flex-col gap-0 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-800">
                        <div
                            className="h-[180px] w-full bg-cover bg-center"
                            style={{ backgroundImage: `url("${item.image}")` }}
                        ></div>
                        <div className="p-3">
                            <p className="text-slate-900 dark:text-white text-base font-bold line-clamp-1">{item.title}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-xs">{item.location} • {item.style}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioCarousel;
