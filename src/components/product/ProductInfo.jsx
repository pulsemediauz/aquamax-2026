import React, { useState } from 'react';

const ProductInfo = ({ title, price, oldPrice, rating, reviewCount, category, country }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="bg-white dark:bg-slate-900 px-5 pt-6 pb-6 rounded-b-3xl shadow-sm border-b border-slate-100 dark:border-slate-800 mb-2">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-primary dark:text-blue-300">
                        {category}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                        <span className="text-lg leading-none">{country.flag}</span> {country.name}
                    </div>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                    <span className="material-symbols-outlined filled text-[16px]">star</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white ml-0.5">{rating}</span>
                    <span className="text-xs text-slate-400 font-normal">({reviewCount})</span>
                </div>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight">{title}</h2>

            <div className="flex items-end justify-between">
                <div>
                    <p className="text-3xl font-extrabold text-primary">{price}</p>
                    {oldPrice && <p className="text-sm text-slate-400 line-through">{oldPrice}</p>}
                </div>

                <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                    </button>
                    <span className="px-2 font-semibold text-slate-900 dark:text-white min-w-[20px] text-center">{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
