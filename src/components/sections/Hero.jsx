import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = ({ onCtaClick }) => {
    const { t } = useTranslation();

    return (
        <div className="px-4 pt-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative flex min-h-[420px] w-full flex-col justify-end overflow-hidden rounded-xl bg-gray-200 shadow-lg"
                style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.8) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAIQfosIEdrBIPxhlHXSufxkEl5oht57EUhmVNXm8_YE-95LKp9lXWJzVzB2-4TntXQigO7HaeelpOAC9NaqacpFwZsgqAFIAFo15ZmK2c5M2ILDILpIaQIV_qxUrQh3DgAA7WuBhIAM5aDSCw9q8OXOOHtwQH5eC2JdGI4JiXZk2EKb_966NwRxHa6LY2W_VmIniaN4x7xZakdfTkx9qmdtvLRCsCbUD6Cdb1h1Q3f7mU-P54Yzb28CjoKcgVlAJz8twCrQn_Ts0')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="relative z-10 flex flex-col gap-3 p-6">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex w-fit items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm"
                    >
                        {t('home.hero.badge')}
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl font-extrabold leading-tight tracking-tight text-white shadow-sm"
                        dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-4 text-base font-medium text-gray-100/90 shadow-sm"
                    >
                        {t('home.hero.subtitle')}
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        onClick={onCtaClick}
                        className="group flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-base font-bold text-gray-900 transition-transform active:scale-95 shadow-md"
                    >
                        <span>{t('home.hero.cta')}</span>
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Hero;
