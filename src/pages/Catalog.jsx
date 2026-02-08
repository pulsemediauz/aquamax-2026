import React, { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import FilterTabs from '../components/ui/FilterTabs';
import ProductCard from '../components/ui/ProductCard';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const Catalog = () => {
    const { t } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeFilter, setActiveFilter] = useState(searchParams.get('category') || 'all');
    const [searchQuery, setSearchQuery] = useState('');

    const filters = [
        { id: 'all', label: t('catalog.filters.all') },
        { id: 'pumps', label: t('catalog.filters.pumps') },
        { id: 'filters', label: t('catalog.filters.filters') },
        { id: 'heating', label: t('catalog.filters.heating') },
        { id: 'chemistry', label: t('catalog.filters.chemistry') },
        { id: 'lighting', label: t('catalog.filters.lighting') },
        { id: 'robots', label: t('catalog.filters.robots') },
    ];

    // Mock Data from equipment.html analysis
    const products = [
        {
            id: 1,
            category: 'pumps',
            title: 'Hayward Variable Speed Pump',
            subtitle: 'High efficiency motor',
            price: '€850.00',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJBFzeGtwKpdE_mrEc2QYjd0wDeZlR6LmC-SP5t4NiquSDHetsNJkvwXxGVAuDs_NaZ2KGL0RLQMHph4zmjiohesQSaNCHNgULqekJNO79PO1hO0lxfFszd_86U_sB_rny44kKnzgCX5dA0e3wJZSt3h9BhEfVDsfcPJZoD0q7eZBQBPnk2hc8GlJHmxhiPIEJ-uyuHcqE1pe34SIVAqUM-Wd97iyWksjCQW03MofJEVSs-iYUfGfx_eWCrJEnCo2Oak10D5MTMxc',
            flag: '🇩🇪'
        },
        {
            id: 2,
            category: 'filters',
            title: 'AstralPool Sand Filter',
            subtitle: 'Durable polyester tank',
            price: '€420.00',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByb-1fc_TuH5ZCkI6eUCHXhbXnb5cJeIQkml0JlxnUqL8a5etWUb8SIoJKN0jZIjviZhpA0Mkkw8b0LxL6CLPALOWqSSdguxO-j9bY_jRV5Zde2ZK1d3LIIBNgoncZFqvFb8Yt3a-DlTSzXK-g2JcZmggYTDHhq3ZvzocvMHb0NA-6whGBXzfIYnAfjFJVCoxh4niXvcc6yKAEA0jHU8jzWgCGVRtrFjGaOWrcxASUks2yLbDsTrsajRADSXiE0ZmqHMwJ-CzEUrg',
            flag: '🇪🇸'
        },
        {
            id: 3,
            category: 'heating',
            title: 'Zodiac Heat Pump Z400',
            subtitle: 'Silent & Full Inverter',
            price: '€2,100.00',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiZyW6tMKH3mjvVKQtU5GxhSsc6iGIkITj4CjPU6H2Eo24PFOx3-k7QGbswmGcliQTwDjZfYxjQ8ahkcb_NyryU4soR_SsC_i2GdJkC05Mumh7YGrowd9oNxDPUJvRXcWoS2FUR9G1UZnlIg8xJZmCl82QfuD_ihBNRKd-qAkMLKI6Hbvc2wiJ6dXAg8NJedxsXAmk2O0Rn1xpU9hpt8fyH1MwCJ1R2U6GY8ABfgJAuSCW-td3OSaTlyYhEnUAnxFJqeOqON0AbRQ',
            flag: '🇫🇷'
        },
        {
            id: 4,
            category: 'chemistry',
            title: 'Bayrol Dosing Station',
            subtitle: 'Auto pH/Redox control',
            price: '€1,550.00',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkg2QVtyaYGeUaKuh0vuVgzUnps3hs46FiLvSPtHItS4I4kZiQqp3x29Mfzt-kmlp94hQ4iTHEUExK0tXYk4fxz-weKbDF9ffpYSbplGh8rNgzv9iiNc70y2ZEGIVt8r9zLzS71Hw7pUVV9uEPEo6m52sVkj1T8rb3UYlmEuEqAwyxYrwFK00PmjbIlDd4D1e70iAzOsqpXqoss6jhhB6PiMEenw4vUwdshpg4pNZhz0LZgkAm1QMxOyvBuXjcE3phUc-FZtPE3qw',
            flag: '🇩🇪'
        },
        {
            id: 5,
            category: 'lighting',
            title: 'LumiPlus LED Light',
            subtitle: 'RGB 1.11 Wireless',
            price: '€299.00',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFxv4q84zshggxJD0N-xFx8ycMt5tEvNoGcupmYrOAwn7f9wZtqPdGxO_LDNV0XTEGBJDg3lu5IvvGVRsqSuU3rjFn9V8SxxaxVycAg-o9zyr1tanxmVdTNhDnWrP3Ldxm-egLnhDkQq_vTd3KDaTEEZ66fxcMm8r8o5h1uHwydYh5a1uo2c9hTszADgM2Atn0w5nwUnOi9WWF2s5JYaXbuiMme4mNCQp8xONCejS105VTYXjQUKeu0eEY92cxvAmdjbYU5qx8S58',
            flag: '🇮🇹'
        },
        {
            id: 6,
            category: 'robots',
            title: 'Polaris 280 Cleaner',
            subtitle: 'Pressure side cleaner',
            price: '€580.00',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-2aF3G2Ciq-L_qhwtoaqMfIKOCqbxHrIPzXUhVbv1kaJVe3WL7DtOxY7tB39N9DfzxmbiKTdF_Y0oeIBcdD5rnvs7j366vKloTBLnYGiOCM-YRsgi7zpJiU4vDxxK8lf7qfYjY_qOsllOvLj69_vZ6Ky2vID9Icov3btL6uxnSrbt0QAk3_-EhGsrYa07__aPfBkqczwZjAQvYqLd4P57VbdtkE7_27Wt4Dltay4kJ-QuDehqwXdpamgzNKT7774_1x-UbFsAKkY',
            flag: '🇪🇸'
        }
    ];

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesFilter = activeFilter === 'all' || product.category === activeFilter;
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

    return (
        <>
            <Header title={t('catalog.title')} />

            {/* Search Bar */}
            <div className="px-4 pb-2 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md sticky top-[65px] z-30 pt-2">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </div>
                    <input
                        className="block w-full rounded-xl border-none bg-slate-100 dark:bg-slate-800 py-3 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 transition-all shadow-sm outline-none"
                        placeholder={t('catalog.search_placeholder')}
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <FilterTabs
                tabs={filters}
                activeTab={activeFilter}
                onTabChange={(id) => {
                    setActiveFilter(id);
                    setSearchParams({ category: id });
                }}
            />

            <div className="p-4 grid grid-cols-2 gap-4 pb-24 min-h-[500px]">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                        onAdd={() => console.log('Add to cart', product.id)}
                        // Map subtitle to category prop for display logic reuse
                        category={product.subtitle}
                    />
                ))}
                {filteredProducts.length === 0 && (
                    <div className="col-span-2 flex flex-col items-center justify-center p-8 text-center text-gray-500">
                        <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
                        <p>No products found</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Catalog;
