import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import ContactForm from '../components/contact/ContactForm';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24">
            <Header title={t('contact.title')} showBack={true} />

            <div className="px-5 pt-6 pb-2">
                <h2 className="text-slate-900 dark:text-white tracking-tight text-[28px] font-bold leading-tight">{t('contact.hero_title')}</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">{t('contact.hero_subtitle')}</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-3 p-5">
                <button className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-primary/5 dark:bg-primary/10 p-4 transition-all active:scale-95 hover:bg-primary/10 dark:hover:bg-primary/20 border border-transparent hover:border-primary/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-md shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
                        <span className="material-symbols-outlined text-[24px]">call</span>
                    </div>
                    <span className="text-slate-900 dark:text-white text-xs font-bold leading-tight">{t('contact.support')}</span>
                </button>
                <button className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-green-50 dark:bg-green-900/20 p-4 transition-all active:scale-95 hover:bg-green-100 dark:hover:bg-green-900/30 border border-transparent hover:border-green-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md shadow-green-500/20 group-hover:shadow-green-500/40 transition-shadow">
                        <span className="material-symbols-outlined text-[24px]">chat</span>
                    </div>
                    <span className="text-slate-900 dark:text-white text-xs font-bold leading-tight">{t('contact.whatsapp')}</span>
                </button>
                <button className="group flex flex-col items-center justify-center gap-3 rounded-xl bg-sky-50 dark:bg-sky-900/20 p-4 transition-all active:scale-95 hover:bg-sky-100 dark:hover:bg-sky-900/30 border border-transparent hover:border-sky-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-md shadow-sky-500/20 group-hover:shadow-sky-500/40 transition-shadow">
                        <span className="material-symbols-outlined text-[24px]">send</span>
                    </div>
                    <span className="text-slate-900 dark:text-white text-xs font-bold leading-tight">{t('contact.telegram')}</span>
                </button>
            </div>

            {/* Map & Info */}
            <div className="mx-5 mb-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
                <div className="relative h-48 w-full bg-gray-200">
                    {/* Placeholder map image */}
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDW-2G2g8h4QEngQyW4z5JRiAxB6yVqYRsmVjNDaQNfOpSbZx_rkB7IVpK_Y2PaqBIqf0rGsZbSwp8TvCDckWrTmHzL7bb-sEnHotLf-NJ8A2w6FpZ1qn8JP8O6QiawxhSVwveeSnIXUv3wLegNKNxgJ1bA5K0bqfnVZqkdGDd5Jv631GF1ZSJrQLVSx4OeLydxgMUN5159oPWSGxlc-aviCDMAWpdpiuif0h99yukSfBzqHYru-h3xElPq8AnWx_e-rK6finMXxps")' }}></div>
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                        <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                            <span className="text-xs font-bold text-slate-900 dark:text-white">Aquamax HQ</span>
                        </div>
                    </div>
                </div>
                <div className="p-4 space-y-4">
                    <div className="flex items-start gap-3 cursor-pointer" onClick={() => navigate('/showroom')}>
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-sm">storefront</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">{t('contact.showroom')}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">123 Aqua Blvd, Pool City</p>
                            <p className="text-xs text-primary mt-1">Tap to view all locations</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-bold text-slate-900 dark:text-white">{t('contact.hours')}</p>
                                <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-700 dark:bg-green-900/30 dark:text-green-400">Open Now</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Mon - Fri: 08:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm onSuccess={(submitted) => setIsFormSubmitted(submitted !== false)} />

            {!isFormSubmitted && (
                <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 z-50">
                    <button form="contact-form" type="submit" className="w-full rounded-xl bg-primary py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-blue-600 hover:shadow-primary/50 active:scale-[0.98]">
                        {t('contact.form.submit')}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Contact;
