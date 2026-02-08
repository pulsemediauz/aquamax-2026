import React from 'react';
import Header from '../components/layout/Header';
import { useTranslation } from 'react-i18next';

const Profile = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <Header title={t('nav.profile')} />
            <div className="p-4 space-y-4">
                <h2 className="text-xl font-bold">Profile Settings</h2>

                <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl">
                    <h3 className="font-bold mb-2">Language</h3>
                    <div className="flex gap-2">
                        <button onClick={() => changeLanguage('en')} className="px-3 py-1 bg-white dark:bg-slate-700 rounded shadow-sm">English</button>
                        <button onClick={() => changeLanguage('ru')} className="px-3 py-1 bg-white dark:bg-slate-700 rounded shadow-sm">Русский</button>
                        <button onClick={() => changeLanguage('uz')} className="px-3 py-1 bg-white dark:bg-slate-700 rounded shadow-sm">O'zbek</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
