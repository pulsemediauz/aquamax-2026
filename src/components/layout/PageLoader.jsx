import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PageLoader = () => {
    const { t } = useTranslation();

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-background-dark">
            <div className="pool-loader-container mb-6 relative">
                <div className="pool-water"></div>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-primary font-extrabold text-sm tracking-widest uppercase underline underline-offset-4 decoration-2 decoration-primary/30"
            >
                {t('loader.text')}
            </motion.p>
        </div>
    );
};

export default PageLoader;
