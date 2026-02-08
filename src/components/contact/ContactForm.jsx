import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm = ({ onSuccess }) => {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            if (onSuccess) onSuccess();
        }, 1500);
    };

    if (isSubmitted) {
        return (
            <div className="px-5 pb-6">
                <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 p-6 text-center border border-green-100 dark:border-green-900/30">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300">
                        <span className="material-symbols-outlined text-[32px]">check_circle</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{t('contact.form.success_title')}</h3>
                    <p className="text-gray-500 dark:text-gray-300">{t('contact.form.success_message')}</p>
                    <button
                        onClick={() => { setIsSubmitted(false); if (onSuccess) onSuccess(false); }}
                        className="mt-6 text-sm font-bold text-primary hover:text-primary/80"
                    >
                        Send another message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="px-5 pb-6">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">{t('contact.form.title')}</h3>
            <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 ml-1" htmlFor="name">{t('contact.form.name')}</label>
                    <div className="relative">
                        <input required disabled={isSubmitting} className="w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 disabled:opacity-50" id="name" placeholder="John Doe" type="text" />
                        <span className="material-symbols-outlined absolute right-3 top-3 text-gray-400 text-[20px]">person</span>
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 ml-1" htmlFor="subject">{t('contact.form.subject')}</label>
                    <div className="relative">
                        <select disabled={isSubmitting} className="w-full appearance-none rounded-lg border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white disabled:opacity-50" id="subject">
                            <option>General Inquiry</option>
                            <option>New Construction Quote</option>
                            <option>Maintenance Service</option>
                            <option>Equipment Warranty</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-3 pointer-events-none text-gray-400 text-[20px]">expand_more</span>
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 ml-1" htmlFor="message">{t('contact.form.message')}</label>
                    <textarea required disabled={isSubmitting} className="w-full rounded-lg border-gray-200 bg-gray-50 p-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 resize-none disabled:opacity-50" id="message" placeholder="Tell us how we can help..." rows="4"></textarea>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
