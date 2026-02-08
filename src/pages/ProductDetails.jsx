import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductFeatures from '../components/product/ProductFeatures';
import ProductTabs from '../components/product/ProductTabs';
import ProductFooter from '../components/product/ProductFooter';
import ProductCard from '../components/ui/ProductCard';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Mock Product Data
    const product = {
        title: 'Hayward Variable Speed Pump',
        price: '€850.00',
        oldPrice: '€920.00',
        rating: 4.9,
        reviewCount: 128,
        category: 'Pool Pumps',
        country: { flag: '🇩🇪', name: 'Made in Germany' },
        images: [
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDJBFzeGtwKpdE_mrEc2QYjd0wDeZlR6LmC-SP5t4NiquSDHetsNJkvwXxGVAuDs_NaZ2KGL0RLQMHph4zmjiohesQSaNCHNgULqekJNO79PO1hO0lxfFszd_86U_sB_rny44kKnzgCX5dA0e3wJZSt3h9BhEfVDsfcPJZoD0q7eZBQBPnk2hc8GlJHmxhiPIEJ-uyuHcqE1pe34SIVAqUM-Wd97iyWksjCQW03MofJEVSs-iYUfGfx_eWCrJEnCo2Oak10D5MTMxc',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDJBFzeGtwKpdE_mrEc2QYjd0wDeZlR6LmC-SP5t4NiquSDHetsNJkvwXxGVAuDs_NaZ2KGL0RLQMHph4zmjiohesQSaNCHNgULqekJNO79PO1hO0lxfFszd_86U_sB_rny44kKnzgCX5dA0e3wJZSt3h9BhEfVDsfcPJZoD0q7eZBQBPnk2hc8GlJHmxhiPIEJ-uyuHcqE1pe34SIVAqUM-Wd97iyWksjCQW03MofJEVSs-iYUfGfx_eWCrJEnCo2Oak10D5MTMxc', // Duplicated for carousel demo
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDJBFzeGtwKpdE_mrEc2QYjd0wDeZlR6LmC-SP5t4NiquSDHetsNJkvwXxGVAuDs_NaZ2KGL0RLQMHph4zmjiohesQSaNCHNgULqekJNO79PO1hO0lxfFszd_86U_sB_rny44kKnzgCX5dA0e3wJZSt3h9BhEfVDsfcPJZoD0q7eZBQBPnk2hc8GlJHmxhiPIEJ-uyuHcqE1pe34SIVAqUM-Wd97iyWksjCQW03MofJEVSs-iYUfGfx_eWCrJEnCo2Oak10D5MTMxc'
        ],
        features: [
            { icon: 'eco', label: 'Energy Saving', bgColor: 'bg-green-100 dark:bg-green-900/30', textColor: 'text-green-600 dark:text-green-400' },
            { icon: 'volume_off', label: 'Quiet Operation', bgColor: 'bg-blue-100 dark:bg-blue-900/30', textColor: 'text-blue-600 dark:text-blue-400' },
            { icon: 'smartphone', label: 'Smart Control', bgColor: 'bg-purple-100 dark:bg-purple-900/30', textColor: 'text-purple-600 dark:text-purple-400' }
        ],
        description: `
      <p>The Hayward Variable Speed Pump is engineered for maximum energy efficiency and silent operation. Featuring a permanent magnet motor, this pump reduces energy costs by up to 90% compared to single-speed pumps.</p>
      <br/>
      <p>Perfect for demanding European pools, it offers integrated smart controls and a user-friendly interface for seamless operation.</p>
    `,
        specs: [
            { label: 'Power', value: '1.5 HP' },
            { label: 'Voltage', value: '230V / 50Hz' },
            { label: 'Flow Rate', value: '22 m³/h' },
            { label: 'Connection', value: '63mm' },
            { label: 'Weight', value: '14 kg' }
        ]
    };

    const relatedProducts = [
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
            id: 4,
            category: 'chemistry',
            title: 'Bayrol Dosing Station',
            subtitle: 'Auto pH/Redox control',
            price: '€1,550.00',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkg2QVtyaYGeUaKuh0vuVgzUnps3hs46FiLvSPtHItS4I4kZiQqp3x29Mfzt-kmlp94hQ4iTHEUExK0tXYk4fxz-weKbDF9ffpYSbplGh8rNgzv9iiNc70y2ZEGIVt8r9zLzS71Hw7pUVV9uEPEo6m52sVkj1T8rb3UYlmEuEqAwyxYrwFK00PmjbIlDd4D1e70iAzOsqpXqoss6jhhB6PiMEenw4vUwdshpg4pNZhz0LZgkAm1QMxOyvBuXjcE3phUc-FZtPE3qw',
            flag: '🇩🇪'
        },
        {
            id: 3,
            category: 'heating',
            title: 'Zodiac Heat Pump Z400',
            subtitle: 'Silent & Full Inverter',
            price: '€2,100.00',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiZyW6tMKH3mjvVKQtU5GxhSsc6iGIkITj4CjPU6H2Eo24PFOx3-k7QGbswmGcliQTwDjZfYxjQ8ahkcb_NyryU4soR_SsC_i2GdJkC05Mumh7YGrowd9oNxDPUJvRXcWoS2FUR9G1UZnlIg8xJZmCl82QfuD_ihBNRKd-qAkMLKI6Hbvc2wiJ6dXAg8NJedxsXAmk2O0Rn1xpU9hpt8fyH1MwCJ1R2U6GY8ABfgJAuSCW-td3OSaTlyYhEnUAnxFJqeOqON0AbRQ',
            flag: '🇫🇷'
        }
    ];

    return (
        <div className="bg-gray-50 dark:bg-background-dark min-h-screen">
            <Header
                title={t('product.title')}
                showBack={true}
                rightAction={
                    <button className="relative p-2 -mr-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors">
                        <span className="material-symbols-outlined text-[24px]">favorite</span>
                    </button>
                }
            />

            <div className="pb-24">
                <ProductImageGallery images={product.images} />

                <ProductInfo
                    title={product.title}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    category={product.category}
                    country={product.country}
                />

                <ProductFeatures features={product.features} />

                <ProductTabs
                    description={product.description}
                    specs={product.specs}
                />

                {/* Related Products */}
                <div className="bg-white dark:bg-slate-900 p-5 shadow-sm mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-slate-900 dark:text-white text-base">{t('product.related')}</h3>
                        <button onClick={() => navigate('/catalog')} className="text-sm text-primary font-semibold">
                            {t('product.view_all')}
                        </button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
                        {relatedProducts.map(prod => (
                            <ProductCard
                                key={prod.id}
                                {...prod}
                                category={prod.subtitle}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <ProductFooter
                onAddToCart={() => console.log('Add to cart')}
                onBuyNow={() => navigate('/cart')}
            />
        </div>
    );
};

export default ProductDetails;
