import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import ShowroomCarousel from '../components/contact/ShowroomCarousel';
import { useTranslation } from 'react-i18next';

const Showroom = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Header title={t('showroom.title')} showBack={true} />
            <div className="px-6 py-2 pb-6">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal text-center">
                    {t('showroom.intro')}
                </p>
            </div>
            <ShowroomCarousel />
        </div>
    );
};

export default Showroom;
