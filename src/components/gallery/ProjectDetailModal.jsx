import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
    const { t } = useTranslation();

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
                    />
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 500 }}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#101922] rounded-t-3xl shadow-2xl h-[85vh] flex flex-col overflow-hidden max-w-md mx-auto"
                    >
                        {/* Drag Handle */}
                        <div className="flex justify-center pt-3 pb-1" onClick={onClose}>
                            <div className="w-12 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        </div>

                        {/* Image Header */}
                        <div className="relative h-64 shrink-0 bg-slate-200">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 bg-white/30 backdrop-blur-md rounded-full p-2 text-white hover:bg-white/40"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{project.title}</h2>
                                    <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm">
                                        <span className="material-symbols-outlined text-[18px] mr-1">location_on</span>
                                        {project.location}
                                    </div>
                                </div>
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">{project.category}</span>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 mt-4">
                                {project.description}
                            </p>

                            <div className="space-y-4">
                                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b border-slate-100 dark:border-slate-700 pb-2">{t('gallery.details.specs')}</h3>
                                {project.specs && project.specs.map((spec, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined">{spec.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{spec.title}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">{spec.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Footer CTA */}
                        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-[#101922] pb-8">
                            <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/25 active:scale-[0.98]">
                                <span>{t('gallery.details.request')}</span>
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailModal;
