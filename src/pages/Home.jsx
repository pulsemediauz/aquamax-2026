import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import PageLoader from '../components/layout/PageLoader';
import Hero from '../components/sections/Hero';
import CallbackBanner from '../components/sections/CallbackBanner';
import CategoryCard from '../components/ui/CategoryCard';
import ProductCard from '../components/ui/ProductCard';

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading for the water fill effect
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <PageLoader />;

    const categories = [
        {
            id: 'equipment',
            title: t('home.categories.equipment'),
            icon: 'water_pump',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj36XyPb7FBVisQEA2HLOHtUiPKEWjLontFt3EAtbicsqYhuaQC8TP-VJ_OzdImnHaHNgR7EffUr-S384ZO4o9PrWnyWIGXRUV1yxbTzlD2JbBmTmkRSEz_A-LuUUcT_DFTZ-0ZIdQl1LKnVFaGX9k6ttVIowr8qBUyMWlcCDD-xDVx6-EYvFpDMllzwrovb3I-o2iDQjWEJ_qhD0l9ELQHrrlcY3w5qeABSgGkWJIK8IpRTuwNiBUw04G_0Mjl34eo7Ei4ratyM0',
            path: '/catalog?category=equipment'
        },
        {
            id: 'mosaic',
            title: t('home.categories.mosaic'),
            icon: 'grid_view',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3XbxrBUPOHi2UZoNRGFObO7Are_GfS8KzPvXbODbjUGFmjUqXNWRb-MVSCC8a3CRVwTXFVA-s6VAde2Wytcp2rCRAjN2wUSgcaBTDdlLfVhrMbi4ivL0fcqEgOKBWyKfCk-LSCGNFSTwmY2tRqILxxGYOK6UaamlJFqo7J7LXV8YYj_mBbb4lm2bmzwd9lATpC7AGknsnJ0vUVfBg4OzO_iC0rn7LwUAc18TbapWmo7SjEGHHOssWzmiVPw3OaeGt-uCQeprHmEg',
            path: '/catalog?category=mosaic'
        },
        {
            id: 'construction',
            title: t('home.categories.construction'),
            icon: 'engineering',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDC6WIhAABnaA_MyKB6KcZddTKo3v0jouSQtESVs5zd45uTF0Wc_6R3luvufVbEgs8_UWDeFtcc8Ms8J0oqlg8v7kPpCB75Y8a_IiOqZVsN4HjntTJGt04OulYqY9yJs9ZhsVee87MyeWZmGE3VuJP2DG9EvCcukExzwSvQZufEEjL9NZpCvJqFrCBicYDAPj4cJl98ioZjZCGlpeSYN0PSGIDSlyWHB43QksiAqwquB_bV3CZ0CHungbvt4Ajb7Y_CS2a4dFYabs',
            path: '/services/construction'
        },
        {
            id: 'service',
            title: t('home.categories.service'),
            icon: 'build_circle',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-7zB5u-1VNBrdpdqCeQXxMsG_N6DLLW9lEXmlmqEsyYLrlcMRemDgT8WmQ25OBPss75Wej8CZ4wzjl1Igez5s6Z2XJU0sYpnwwWcGQPR8L91C6Ct8H8yLM78eq6KYsea6M7295E9JBIwNMiM_2JQ_UKuhajunfc9AVLnTPE9HsM8EEru4q6wc1b-OB54QgGzFnisqxLg1wPIZf8RSerdRvJlJjhY_SlUYH6PMOloZoo0-tygV16J7bar24pl_ojhWarKQgdVug0U',
            path: '/services/maintenance'
        }
    ];

    const products = [
        {
            id: 1,
            title: 'AstralPool Victoria',
            price: '$420.00',
            category: 'Pumps',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpPnfBTneNSKev7ybS0RkiSYJOVf0f4MrcZeWHdSzFd6cC6iSyZ7qcGzuiqHqd7_qi965QPW6ipR2aaih3q4KNmfFElzWCP1N-kan6Z7hrZWZN7uY2j8dYTGhOi5IKMf8rgSv5HYVZvuNJSTelVvj1cgzYsJSuG3paer_qso6vTjPAQFh1aNvqCkyNtPr5J9gP651TdOyXu-vQJFuK2wNuBpXws7GwBfLncXuKas_f_KB7hvastQzTpXlGUNUsjZce7ySJXJyzz-I',
            isHot: true
        },
        {
            id: 2,
            title: 'Zodiac MX8 Elite',
            price: '$850.00',
            category: 'Cleaners',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpTO4FF59MbQv5oBIV6Yg9OTfOXrL8pfeSjbaiplXiCAQrxLiEgX7LdtW3HPEHKuXfKzrCJwUpXHxI-8TraNUKXjjM2alNsP2OM_B3-K5SJArZEighIGXCdf-0BwaSAcR6RbkH8wrptxaW8evfRXYGIk9UjbBOnnx35Hg5VIINstC0DaixR7usiYWHgQp72RCB9tFcwNOv_0J3xhjQ8Si7lvJ1TuQD6jNKwtmsi85LDYxJ0hgVWMwA3hROMVUIgSDvlzLDZV2mZd0'
        },
        {
            id: 3,
            title: 'Sand Filter Pro',
            price: '$315.00',
            category: 'Filters',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwLEynK7TgyatokST9FpXhSbUs0B5QnFxIwGiDx0cqtzbiFK9w2OYL0aqsJhUbIFjYsrs-0xRHsH0FIs8yCZmYRjXa09uZDBSu44OsmeZA06LaAbJPMdvD8dE1Cc7tFvogHPElreBvrUY2OC8eNkM6puLOKMryjJnqOdScd36_sYPik74Arp20mu5yuo2vBIUKy-U1NIagBWOTlNRgsyBfNykcINf5mgdTz5GsbGS240zSKt-nYHz66mpBzfpdTmBwIRO911qY4t8',
            isDiscount: '-10%'
        }
    ];

    return (
        <>
            <Header />

            <Hero onCtaClick={() => navigate('/catalog')} />

            {/* Categories Section */}
            <div className="px-4 pt-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t('home.categories.title')}</h3>
                    <button onClick={() => navigate('/catalog')} className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                        {t('home.categories.view_all')}
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat, index) => (
                        <CategoryCard
                            key={cat.id}
                            {...cat}
                            delay={index * 0.1}
                            onClick={() => navigate(cat.path)}
                        />
                    ))}
                </div>
            </div>

            <CallbackBanner />

            {/* Featured Products */}
            <div className="px-4 pb-4">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{t('home.featured.title')}</h3>
                    <div className="flex gap-2">
                        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                    </div>
                </div>

                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4 snap-x">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                            onAdd={() => console.log('Add to cart', product.id)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
