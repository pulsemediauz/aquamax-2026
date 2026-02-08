import React from 'react';
import { motion } from 'framer-motion';

const CategoryCard = ({ title, icon, image, onClick, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.4 }}
            onClick={onClick}
            className="group relative flex flex-col justify-end overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm border border-gray-100 dark:border-gray-700 h-[140px] transition-all hover:shadow-md active:scale-95 cursor-pointer"
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10"></div>
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${image}')` }}
            ></div>

            <div className="relative z-20 flex flex-col items-start gap-1">
                <div className="rounded-full bg-white/20 p-1.5 backdrop-blur-md">
                    <span className="material-symbols-outlined text-white text-[20px]">{icon}</span>
                </div>
                <span className="font-bold text-white text-sm">{title}</span>
            </div>
        </motion.div>
    );
};

export default CategoryCard;
