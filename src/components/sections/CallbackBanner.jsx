import React from 'react';
import { useTranslation } from 'react-i18next';

const CallbackBanner = () => {
    const { t } = useTranslation();

    return (
        <div className="px-4 py-8">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-600 p-6 shadow-md">
                {/* Abstract Background Pattern */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white opacity-10 blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white opacity-10 blur-xl"></div>

                <div className="relative z-10 flex flex-col items-start">
                    <div className="mb-3 rounded-full bg-white/20 p-2 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-white text-[24px]">support_agent</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-white">{t('home.callback.title')}</h3>
                    <p className="mb-5 text-sm font-medium text-blue-100 opacity-90">{t('home.callback.text')}</p>
                    <button className="w-full rounded-lg bg-white py-3 text-sm font-bold text-primary transition-colors hover:bg-gray-50 active:scale-[0.98] shadow-sm">
                        {t('home.callback.button')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CallbackBanner;
