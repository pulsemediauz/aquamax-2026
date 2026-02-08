import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';

const NotFound = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-slate-100 dark:bg-slate-800 p-8 rounded-full mb-6">
                <span className="material-symbols-outlined text-6xl text-slate-400 dark:text-slate-500">error_outline</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{t('nav.not_found.title')}</h1>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto">
                {t('nav.not_found.message')}
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-8 rounded-xl shadow-lg shadow-primary/30 transition-all active:scale-95"
            >
                {t('nav.not_found.button')}
            </button>
        </div>
    );
};

export default NotFound;
