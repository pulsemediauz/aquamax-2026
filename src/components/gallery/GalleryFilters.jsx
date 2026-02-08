import React from 'react';
import { useTranslation } from 'react-i18next';

const GalleryFilters = ({ activeFilter, onFilterChange }) => {
    const { t } = useTranslation();

    const filters = [
        { id: 'all', label: t('gallery.filters.all') },
        { id: 'private', label: t('gallery.filters.private') },
        { id: 'public', label: t('gallery.filters.public') },
        { id: 'mosaic', label: t('gallery.filters.mosaic') },
        { id: 'indoor', label: t('gallery.filters.indoor') }
    ];

    return (
        <div className="sticky top-[60px] z-10 bg-white/95 dark:bg-[#101922]/95 backdrop-blur-md pt-2 pb-4">
            <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar snap-x">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        onClick={() => onFilterChange(filter.id)}
                        className={`snap-start flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-all active:scale-95 ${activeFilter === filter.id
                                ? 'bg-primary text-white shadow-lg shadow-primary/20 font-bold'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium'
                            }`}
                    >
                        <span className="text-sm leading-normal whitespace-nowrap">{filter.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GalleryFilters;
