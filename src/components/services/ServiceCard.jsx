import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, subtitle, image, link }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(link)}
            className="group relative overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-[4/3] md:aspect-[3/4] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
        >
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url("${image}")` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div className="flex flex-col gap-1 pr-4">
                    <p className="text-white/80 text-xs font-medium uppercase tracking-wider">{subtitle}</p>
                    <h3 className="text-white text-xl font-bold leading-tight">{title}</h3>
                </div>
                <div className="flex items-center justify-center size-10 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-primary transition-colors text-white">
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
