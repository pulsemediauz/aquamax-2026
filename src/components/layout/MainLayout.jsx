import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const MainLayout = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col mx-auto max-w-md bg-white dark:bg-background-dark shadow-2xl overflow-hidden">
            <main className="flex-1 pb-20 overflow-y-auto no-scrollbar">
                <Outlet />
            </main>
            <BottomNav />
        </div>
    );
};

export default MainLayout;
