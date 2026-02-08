import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import PortfolioCarousel from '../../components/services/PortfolioCarousel';
import ConstructionPhases from '../../components/services/ConstructionPhases';
import RequestVisitForm from '../../components/services/RequestVisitForm';
import { useTranslation } from 'react-i18next';

const Construction = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const portfolioItems = [
        {
            title: 'The Infinity Edge',
            location: 'Beverly Hills',
            style: 'Luxury',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZLrx0QgAXB0VtQGyn0apZ7CofV_YL6X7LrmgU5DdPNqVXfnlwAmz5pPLdlMIqn3wgxxjp-rbHYq1-3-SL2O9eihgrWIirXPChuxLWb7PwMpBSjP9SLyws6J264W0-Y8fPUxRuqHA8kNMAXuF9zkhz4-JTdyJHxiCdaHztXa8Mn5zbkf02tmCYfycVM6fVXCbuqkzKY3yvr0KyNZ8QFN_GIyPzMaRLHzfV0SMGpJLQoZw_iYwzIUOvzIQU-9sDby3VLpcmeG8x95w'
        },
        {
            title: 'Mediterranean Retreat',
            location: 'Santa Barbara',
            style: 'Classic',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRsIYc6TEK51IcGrTd-KOgLR2b8z8Ar3xQKmKOg37Z92mc9J3iaJF2adRZN3GzIFQIDM1jsOhBXCkIUAWY2M-FMC3bk0Oy-Djk88NaSLRMM_7uohYvQ2K2Ly8H1B45mso6wjHMiD2SBw_qVVWxzKf7EfzPtZogdyrY69jy1jLxBqPJbgjc2sRrCjbzKpWVqJkvlqDMIEVnQEksaZMRNVaVCjnsbW2aBaz7n9PYWh7ORSmEWVXO-LlRGvn5ZcPCpMaYZ5duMtTdB5U'
        },
        {
            title: 'Family Fun Zone',
            location: 'San Diego',
            style: 'Family',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_20DsEZO4plFI9b0Yjww46YhyrV_4wq2IQGHAn4gGN_Q2X-DiNR5jEHi7qRof6Hs0gkFhqXkpVuNBEtf4aId2Ah8V6RtJX2_nBdjYFHnGxj9dc4OE4vibI69CS7VVtzGOB-HgCGNrxYQPPonNNTEFSeQwiO2-m3qvgFsXfjZeseC_IZkb-zPSC2qaGmMXHp-pQ4q5lMkqRN_VT8ZxLitF6fDT0KWXl53-NHcfMAR8xdWalwDaHbfsswFp3sYtscc90Lg6spKUOTA'
        }
    ];

    const phases = [
        {
            title: t('services.construction.phases.design'),
            description: 'We meet to visualize your dream and create blueprints.',
            icon: 'design_services',
            active: true
        },
        {
            title: t('services.construction.phases.excavation'),
            description: 'Ground breaking, digging, and laying the steel foundation.',
            icon: 'construction',
            active: false
        },
        {
            title: t('services.construction.phases.systems'),
            description: 'Installing pumps, filters, heaters, and all piping networks.',
            icon: 'plumbing',
            active: false
        },
        {
            title: t('services.construction.phases.finishing'),
            description: 'Tiling, decking, landscaping, and filling the pool.',
            icon: 'water_drop',
            active: false
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Header title={t('services.construction.title')} showBack={true} />

            {/* Hero */}
            <div className="p-4">
                <div className="flex min-h-[420px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-end p-6 pb-10 relative overflow-hidden text-center shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3aGmTWCO2ZWcoJ6lJcN6Hpvbbvcd5tfjPkNBWVVAjGK-pBrCFcPm2GBtcgErcgdocKgmZ4NnVnzMbSCzqeMje0o1UOVc8-MKMN6wEFevb4ob2rzCWTOeLRN1VJWe7ffVk60nk4jgyJ_F9Vv8I1qMpnhb93XLlsLy41Qw1_74wYmLWgjxLoZILXM6yR0oZ8om9AzAJ_NRD4zkHfUD3q2t0440GaD4bpo4yEmp3dFCvA39v6BH-BrhxTKKLqBDlxDr-G3CK2NWs01U")' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="relative z-10 w-full flex flex-col gap-2">
                        <h1 className="text-white text-4xl font-extrabold leading-tight tracking-tight drop-shadow-sm">{t('services.construction.hero_title')}</h1>
                        <p className="text-gray-200 text-sm font-medium max-w-[300px] mx-auto">{t('services.construction.hero_subtitle')}</p>
                    </div>
                    <button className="relative z-10 flex w-full max-w-[320px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold shadow-lg">
                        {t('services.construction.cta')}
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="flex justify-between px-6 py-6 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#101922]">
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-primary">15+</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{t('services.construction.stats.years')}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-primary">500+</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{t('services.construction.stats.projects')}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-primary">100%</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{t('services.construction.stats.satisfaction')}</span>
                </div>
            </div>

            <PortfolioCarousel title={t('services.construction.portfolio')} items={portfolioItems} />

            <ConstructionPhases title={t('services.construction.phases.title')} phases={phases} />

            <RequestVisitForm />
        </div>
    );
};

export default Construction;
