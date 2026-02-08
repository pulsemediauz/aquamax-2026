import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import BrandGrid from '../components/about/BrandGrid';
import TeamGrid from '../components/about/TeamGrid';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const team = [
        { name: 'Alex D.', role: 'Lead Architect', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChnVTVXY28xeLPzYHCp58YIhZh4tMbRET7_N67Q8koAD-F0WKpU0NOS6aQQ4CrPpp_kLp3py20bcSCd2p3Hk4AS5uibpQ-Aka6uQE2PJciLLQBt9rztnevDl-LWnEojeVhkQmsPQgeP4uGCxdzS34N2W32brS0zS3q6wYJz2KBWAApgYVRFdVcq6FI0UA_s1LcDGuJLun93U6ISkZvyGfQupQIJ1kg0i_aqe_tRFTsHEQ97cII4DqxM4l2pwY2bDUlSSIGdWIeBd0' },
        { name: 'Sarah M.', role: 'Project Manager', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEOFASmkESPlnxeopWKbGgGgIfyZK9EWuePncv5URfw21g9npR0dgEPa1LuMPBZuZNqq6Nmcv2WHkkB6hDe2fW9bTIKsGwbmInmJ68mCuVCfB1YExlAaFQFWEPYjZrhqOl4Py0P-0_Wqxk4LV5_njwNvB5lBzXXPTRfheyjXGH_XelBqKuJpzlVUl0PcgmJgSML6QDrcB0QmhS2NqOfOQTpQtDuVsPyGjrFIeh5SK4EMZ3J5E_pG3qUSuWgeVNBfFZug1sucXjDBI' },
        { name: 'James K.', role: 'Senior Engineer', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDELLN-aKIo0aJhlW-grd-1y5OlVru7nXiVamBUnT_WGBOHGWzQ7AaNSH770oOaxbQDpFjHQHktCGvgFEM958mF_dQD5FgB7yUYZ3EnaD0isPTkJ3aZSiAHY_xh4PmJ2VIUmortCY6ORdJ75U-hIPXN8HUsotBJurrSfbUAOchlVP5STrwq348oyUYOV5irTffAuoSj-2tUMMkFGtZ49Cc8QEAVK2K1Mdto53JoIZN6lNGPtzkb2kM2qOfCBx43MYXPPuYtPVREolY' },
        { name: 'Emily R.', role: 'Pool Designer', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTQl7qYCOj8ZReaoqCSBi7oPVAsB1TGm-wOlqGPnkpb4MnltJk-1kLHxK2P3fzGmp9i7nUxseZImSuWQI0MO9JrMZq7MN4WWjlywZ-aZWt-5KahWJFX93TNXDvE-69cgSaN2YdBKj0bcrkR2UM5_Ud8PzekMB6kujxY_dbyCbY3cHr1cJ5Ruu1J3EGY7GnLj3dRhLk1iCEhho8rbAl0EX_qH4saqr7OntzDXdBdOQnpCJGWofrDmLabsbWTCJ9xq5sxdC0OYBkgt0' }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24">
            <Header title={t('about.title')} showBack={true} />

            {/* Hero */}
            <div className="p-4">
                <div className="relative bg-cover bg-center flex flex-col justify-end overflow-hidden w-full h-80 rounded-lg shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmKMJ1QRMY4rfZNRUF2HBpd7t6BF1QuKmpcaRFcsEbkm4bq4GWS4BmP2G56p43J7P5Es_KP-MeSXF7GEWBQeg0e0zpd-hfn9TBg3qeB_wmLsTdLH2GTVh99lPgxEyXpZHQlxgkyMtUIe48v8apvwnk1rHF-P3yDZhy0F19cRyvldtAvOB9vnlR1lXdtH7twNbDk639znMPIeCQesymEzxvqtsHV99Wr3Z5Y_gOJe3FfNZgSndlLJgjTEUzlJohUMVrP2jOPeYzk0g")' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="relative z-10 p-6">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white uppercase bg-primary rounded-full">{t('about.since', { year: 2012 })}</span>
                        <h1 className="text-white tracking-tight text-3xl font-bold leading-tight drop-shadow-sm" dangerouslySetInnerHTML={{ __html: t('about.hero_title') }}></h1>
                    </div>
                </div>
            </div>

            {/* Story */}
            <div className="px-5 py-6">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight mb-3">{t('about.story.title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed">
                    {t('about.story.text')}
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 px-5 py-2">
                <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                    <span className="text-primary tracking-tight text-2xl font-bold leading-tight">12</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs font-medium text-center uppercase tracking-wide">{t('services.construction.stats.years')}</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                    <span className="text-primary tracking-tight text-2xl font-bold leading-tight">500+</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs font-medium text-center uppercase tracking-wide">{t('services.construction.stats.projects')}</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm border border-gray-100 dark:border-gray-700">
                    <span className="text-primary tracking-tight text-2xl font-bold leading-tight">100%</span>
                    <span className="text-gray-500 dark:text-gray-400 text-xs font-medium text-center uppercase tracking-wide">{t('services.construction.stats.satisfaction')}</span>
                </div>
            </div>

            {/* Values */}
            <div className="px-5 py-8">
                <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight mb-5">{t('about.values.title')}</h3>
                <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-[28px]">verified</span>
                        </div>
                        <div>
                            <h4 className="text-slate-900 dark:text-white text-lg font-bold mb-1">{t('about.values.quality')}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-normal">We source only the finest materials, ensuring your pool stands the test of time.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brands */}
            <div className="px-5 pb-8">
                <div className="mb-4">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">{t('about.distributor')}</h3>
                </div>
                <BrandGrid />
            </div>

            {/* Team */}
            <div className="px-5 pb-8">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">{t('about.team')}</h3>
                </div>
                <TeamGrid team={team} />
            </div>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 z-40 max-w-md mx-auto">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                    Request a Consultation
                </button>
            </div>
        </div>
    );
};

export default About;
