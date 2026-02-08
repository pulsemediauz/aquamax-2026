import React from 'react';
import { useTranslation } from 'react-i18next';

const RequestVisitForm = () => {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="p-6 bg-white dark:bg-[#101922] pb-24">
                <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 p-6 text-center border border-green-100 dark:border-green-900/30">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300">
                        <span className="material-symbols-outlined text-[32px]">check_circle</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{t('services.construction.form.success_title')}</h3>
                    <p className="text-gray-500 dark:text-gray-300">{t('services.construction.form.success_message')}</p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 text-sm font-bold text-primary hover:text-primary/80"
                    >
                        Request another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 bg-white dark:bg-[#101922] pb-24">
            <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">{t('services.construction.form.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t('services.construction.form.subtitle')}</p>
            </div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-900 dark:text-white">{t('services.construction.form.name')}</label>
                    <div className="relative">
                        <input required disabled={isSubmitting} className="w-full h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 text-base text-slate-900 dark:text-white focus:border-primary focus:ring-0 placeholder:text-gray-400 disabled:opacity-50" placeholder="John Doe" type="text" />
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-900 dark:text-white">{t('services.construction.form.address')}</label>
                    <div className="relative">
                        <input required disabled={isSubmitting} className="w-full h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 text-base text-slate-900 dark:text-white focus:border-primary focus:ring-0 placeholder:text-gray-400 disabled:opacity-50" placeholder="123 Pool Lane" type="text" />
                        <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 pointer-events-none">location_on</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-slate-900 dark:text-white">{t('services.construction.form.date')}</label>
                        <div className="relative">
                            <input disabled={isSubmitting} className="w-full h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 text-base text-slate-900 dark:text-white focus:border-primary focus:ring-0 disabled:opacity-50" type="date" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-bold text-slate-900 dark:text-white">{t('services.construction.form.phone')}</label>
                        <input required disabled={isSubmitting} className="w-full h-12 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 text-base text-slate-900 dark:text-white focus:border-primary focus:ring-0 placeholder:text-gray-400 disabled:opacity-50" placeholder="(555) 000-0000" type="tel" />
                    </div>
                </div>
                <button disabled={isSubmitting} className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg h-14 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20 transition-all active:scale-[0.98]" type="submit">
                    {isSubmitting ? 'Sending...' : t('services.construction.form.submit')}
                </button>
            </form>
        </div>
    );
};

export default RequestVisitForm;
