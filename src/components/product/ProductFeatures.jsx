import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductFeatures = ({ features }) => {
    const { t } = useTranslation();

    return (
        <div className="bg-white dark:bg-slate-900 p-5 mb-2 shadow-sm border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-sm uppercase tracking-wider">{t('product.features')}</h3>
            <div className="grid grid-cols-3 gap-3">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                        <div className={`h-10 w-10 rounded-full ${feature.bgColor} ${feature.textColor} flex items-center justify-center`}>
                            <span className="material-symbols-outlined">{feature.icon}</span>
                        </div>
                        <span className="text-xs font-semibold leading-tight text-slate-700 dark:text-slate-300">{feature.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductFeatures;
