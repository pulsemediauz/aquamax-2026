import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ title, price, category, image, isHot, isDiscount, flag, onAdd }) => {
    return (
        <div className="min-w-[160px] max-w-[160px] snap-center flex-col gap-3 rounded-lg border border-gray-100 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900 group hover:shadow-md transition-all">
            <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-50 dark:bg-gray-800">
                {isHot && (
                    <div className="absolute top-2 left-2 z-10 rounded bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white">HOT</div>
                )}
                {isDiscount && (
                    <div className="absolute top-2 left-2 z-10 rounded bg-green-500 px-1.5 py-0.5 text-[10px] font-bold text-white">{isDiscount}</div>
                )}
                {flag && (
                    <div className="absolute top-2 right-2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm text-xs" title="Country">
                        {flag}
                    </div>
                )}

                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover mix-blend-multiply dark:mix-blend-normal transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAdd?.();
                    }}
                    className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-white active:scale-95 transition-transform"
                >
                    <span className="material-symbols-outlined text-[18px]">add</span>
                </button>
            </div>

            <div className="flex flex-col gap-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{category}</p>
                <h4 className="truncate text-sm font-bold text-gray-900 dark:text-white" title={title}>{title}</h4>
                <p className="text-sm font-bold text-primary">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
