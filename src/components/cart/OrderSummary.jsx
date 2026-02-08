import React from 'react';
import { useTranslation } from 'react-i18next';

const OrderSummary = ({ subtotal, installationCost, tax, total, hasInstallation }) => {
    const { t } = useTranslation();

    return (
        <div className="px-4 py-2 mt-2">
            <div className="rounded-xl bg-gray-50 dark:bg-[#23303e] p-4">
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">{t('cart.summary.title')}</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                        <span>{t('cart.summary.subtotal')}</span>
                        <span>€{subtotal.toFixed(2)}</span>
                    </div>

                    {hasInstallation && (
                        <div className="flex justify-between text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                                {t('cart.summary.installation')}
                                <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                            </span>
                            <span>€{installationCost.toFixed(2)}</span>
                        </div>
                    )}

                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                        <span>{t('cart.summary.shipping')}</span>
                        <span className="text-green-600 dark:text-green-400 font-medium">{t('cart.summary.free')}</span>
                    </div>

                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                        <span>{t('cart.summary.tax')}</span>
                        <span>€{tax.toFixed(2)}</span>
                    </div>

                    <div className="my-3 border-t border-gray-200 dark:border-gray-600"></div>

                    <div className="flex justify-between items-center">
                        <span className="text-base font-bold text-gray-900 dark:text-white">{t('cart.summary.total')}</span>
                        <span className="text-xl font-extrabold text-gray-900 dark:text-white">€{total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;
