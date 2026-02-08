import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import MaintenanceServiceList from '../../components/services/MaintenanceServiceList';
import BookingCalendar from '../../components/services/BookingCalendar';
import { useTranslation } from 'react-i18next';

const Maintenance = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const serviceList = [
        {
            title: t('services.maintenance.vacuuming'),
            description: 'Weekly debris removal and deep surface cleaning.',
            price: '$80 / visit',
            icon: 'sell',
            cta: t('services.maintenance.book'),
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3zqHNyfWbsoKV3CNLPH4u7fSSycmMz9Cr8PVvNyAlcFCu0zTIIYQnyOIGq1RecsKyP7vXigynJdcvC2Ph7YxVnMKg6zxpIkJ4UgCh9pyZqiQA1laclnjjoiLEHMq51oBvWHfKZ65uH45AF9qtDd9LpbpsZ_vTPst4GFtODb2iI5nVHFF_ZfYcIPHvh_Q1nfVJIxJWl4aoga4yDMaTGq0WDL3o7GU4ATFv82zjiZdMcJcziz2v3r0X-r_zFW3TuUQb8wM685aQXVo'
        },
        {
            title: t('services.maintenance.chemical'),
            description: 'Full water analysis, pH testing, and chemical treatment.',
            price: 'Custom Quote',
            icon: 'request_quote',
            cta: t('services.maintenance.quote'),
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj8kiMbqhQFFsEAd1pWLU7hB1RAPJuc_2cINhi-XN1cZHkPj5i_r9zCxxhCOkvAN7bocNk3ps4KD6UqbgRCnsnqWPBVKfKSvMJs8Hq_xU7cxyHO7i1GITCwdKzdrEs_oLgUHEC4Y2JukRU4pYwHq7X-RLxS9AKk0BxCPQDX2F-mm8IiJ4oMiU77kAkD02eLCgUbThN0OTRn2Iiat3Q9S1MeIBC_zF3MYiusn0NMyS85XXsMqsucvWZa1UJ5uUfXkUjGusvRps2aDA',
            priceTagClass: 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300',
            buttonClass: 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
        },
        {
            title: t('services.maintenance.diagnostics'),
            description: 'Comprehensive pump, heater, and filter inspection.',
            price: '$120 / visit',
            icon: 'sell',
            cta: t('services.maintenance.book'),
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_0kythL57d47EREmFUSrmHy8lYIc_j4-lDGlOf63CGJr2IiPOs8Swd4E2Bxh3zif-81CdwXjsYqR8KFsYyxLMIHLEXDOY09CUrRK1FNDz-lbf91ck0lezu3vVITsdwKvHfaS6Zw9i9s2xspezznIg78Y1ldkaNAolFSDROs0NGEjt24qkIuqHO-WQp_2sUpLUCgUvE_Ar7iCY0NqW0JEx-9uY5j9Ge-CbrhcbA58c5kUxxPBpncPiduEfP7zXfv7-mnw4XZDnD2A'
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Header title={t('services.maintenance.title')} showBack={true} />
            <div className="px-4 pt-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t('services.title')}</h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{t('services.maintenance.subtitle')}</p>
            </div>
            <MaintenanceServiceList services={serviceList} />
            <BookingCalendar />

            {/* Technician */}
            <div className="px-4 pb-24">
                <div className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    <div className="relative">
                        <div className="h-12 w-12 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-800 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuASfp2etLQqKoumxI16IXuRextD_I8uyA8lu83xqEWd4uz8Y-4Ec58a9ZGl1LLIggxnfwKw5YS8vDdycrEfPPd9FqxI1I0TGG3WN0d3bESYf8qCPnR40Ch5xp3bh7gZOJ4t3AeLsNOawu0TlMxK14YFHSG8EQ1y5FMHcUJiLoy7Qd1x4crVDNZZut1xHKitXbhQul4RFtt4g7N60cHbaGVutgeKRvLRlglp2W0vwJ-ETAgCremZczNLrxR6nL2z9Ka8ElEiuKJUn8k")' }}></div>
                        <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-slate-800"></div>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-primary mb-0.5">YOUR TECHNICIAN</p>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Mike Richardson</p>
                        <div className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px] text-yellow-500 filled">star</span>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">4.9 (124 reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
