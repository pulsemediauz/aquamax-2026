import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const ProductTabs = ({ description, specs }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('description');

    const tabs = [
        { id: 'description', label: t('product.tabs.description') },
        { id: 'specs', label: t('product.tabs.specs') },
        { id: 'reviews', label: t('product.tabs.reviews') }
    ];

    return (
        <div className="bg-white dark:bg-slate-900 mb-2 shadow-sm border-b border-slate-100 dark:border-slate-800">
            <div className="flex border-b border-slate-200 dark:border-slate-800 px-5 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={clsx(
                            "py-4 mr-6 border-b-2 text-sm font-medium transition-colors whitespace-nowrap",
                            activeTab === tab.id
                                ? "border-primary text-primary font-bold"
                                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="p-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed min-h-[150px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'description' && (
                        <motion.div
                            key="description"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    )}
                    {activeTab === 'specs' && (
                        <motion.div
                            key="specs"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <ul className="space-y-2">
                                {specs.map((spec, index) => (
                                    <li key={index} className="flex justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                                        <span className="text-gray-500 dark:text-gray-400">{spec.label}</span>
                                        <span className="font-medium text-gray-900 dark:text-white">{spec.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                    {activeTab === 'reviews' && (
                        <motion.div
                            key="reviews"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-center py-8 text-gray-400"
                        >
                            <span className="material-symbols-outlined text-4xl mb-2">reviews</span>
                            <p>No reviews yet</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProductTabs;
