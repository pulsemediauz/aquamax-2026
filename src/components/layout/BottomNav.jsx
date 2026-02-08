import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const BottomNav = () => {
    const { t } = useTranslation();

    const navItems = [
        { path: '/', icon: 'home', label: 'Home' },
        { path: '/gallery', icon: 'photo_library', label: 'Gallery' },
        { path: '/catalog', icon: 'grid_view', label: 'Catalog' },
        { path: '/cart', icon: 'shopping_cart', label: 'Cart' },
        { path: '/contact', icon: 'contact_support', label: 'Contact' },
    ];

    return (
        <nav className="fixed bottom-0 z-40 w-full max-w-md mx-auto border-t border-gray-100 bg-white pb-safe pt-2 dark:border-gray-800 dark:bg-background-dark transition-colors">
            <div className="grid h-16 grid-cols-5 items-center justify-items-center">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex w-full flex-col items-center justify-center gap-1 ${isActive ? "text-primary dark:text-primary" : "text-slate-400 dark:text-slate-500 hover:text-primary dark:hover:text-primary"
                            }`
                        }
                    >
                        <span className={`material-symbols-outlined text-[24px] ${item.path === '/gallery' && 'fill-current'}`}>{item.icon}</span>
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default BottomNav;
