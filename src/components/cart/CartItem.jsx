import React from 'react';
import { motion } from 'framer-motion';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="group relative flex flex-col border-b border-gray-100 dark:border-gray-800 p-4"
        >
            <div className="flex gap-4">
                <div className="relative aspect-square size-[88px] shrink-0 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover mix-blend-multiply dark:mix-blend-normal"
                    />
                </div>

                <div className="flex flex-1 flex-col justify-between py-1">
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-base leading-snug pr-4 text-slate-900 dark:text-white line-clamp-2">{item.title}</h3>
                            <button
                                onClick={() => onRemove(item.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            >
                                <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.subtitle}</p>
                    </div>

                    <div className="flex items-end justify-between mt-2">
                        <p className="font-bold text-lg text-gray-900 dark:text-white">€{item.price.toFixed(2)}</p>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                className="flex size-7 items-center justify-center rounded-md bg-white dark:bg-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-all text-gray-600 dark:text-gray-300 disabled:opacity-50"
                            >
                                <span className="material-symbols-outlined text-[16px]">remove</span>
                            </button>
                            <span className="w-8 text-center text-sm font-semibold tabular-nums text-slate-900 dark:text-white">{item.quantity}</span>
                            <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="flex size-7 items-center justify-center rounded-md bg-white dark:bg-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600 transition-all text-primary"
                            >
                                <span className="material-symbols-outlined text-[16px]">add</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CartItem;
