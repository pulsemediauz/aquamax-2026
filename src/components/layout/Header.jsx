import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ title, showBack = false, rightAction }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { t } = useTranslation();

    const isHome = location.pathname === '/';

    return (
        <header className="sticky top-0 z-40 flex items-center justify-between bg-white/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 border-b border-gray-100 dark:border-gray-800 transition-colors">
            <div className="flex items-center gap-3">
                {showBack ? (
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                ) : (
                    <button className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                )}
            </div>

            <div className="flex-1 flex justify-center">
                {isHome ? (
                    <h1 className="text-xl font-extrabold tracking-tight text-primary">Aquamax</h1>
                ) : (
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white truncate max-w-[200px] text-center">
                        {title}
                    </h2>
                )}
            </div>

            <div className="flex items-center gap-2 justify-end min-w-[40px]">
                {rightAction || (
                    <button className="relative flex items-center justify-center w-10 h-10 -mr-2 rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <span className="absolute top-2 right-2 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-red-500 ring-2 ring-white dark:ring-background-dark"></span>
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
