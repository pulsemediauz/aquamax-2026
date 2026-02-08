import React, { useState, useMemo } from 'react';
import Header from '../components/layout/Header';
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';
import ProductCard from '../components/ui/ProductCard';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';

const Cart = () => {
    const { t } = useTranslation();

    // Initialize from localStorage or use default mock data for demo
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem('aquamax_cart');
        if (saved) return JSON.parse(saved);
        return [
            {
                id: 1,
                title: 'Hayward TriStar VS 950',
                subtitle: 'Variable Speed | SKU: SP32950VSP',
                price: 1299.00,
                quantity: 1,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbm3zGNiUzxd3c807ef4Ck1aARDfDrNUsll7IA1R3mN2UpgBKjY8ncRADd_UgC-KkIbVAYLuTcfVgqI2RcCdHdFJk4wJr_HwFmB6McDgx6pGeD1IZ6HFHaCU9xt39moxp-AaFnWaJFR7ziDtrzYArrasQgetB-BNrhJofH03VQck09oJsrP3m0dmnIC2Yur77po-fdeKGj8FHklTmpxe-Z6W02FYTwwEimNoyLorapzYDWKt29QoU8t7TfYvSLy9A6gb1OdZGOb1U'
            },
            {
                id: 2,
                title: 'Pentair Clean & Clear Plus',
                subtitle: 'Cartridge Filter 420 sq. ft.',
                price: 899.00,
                quantity: 1,
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2rBdlSseKm-u7I_LFej66iiFDZuS3iYjSL5nKzLYPbLpReU0S4xjmFlJGRZDzENAy37rU3FRbFTgezzioJKCB22_oMsI-jMW2zYyp4Zl4ucY5F6bR7Vg-uBlhHRM409ZXwNVe4o3JtnRolBN39wPg5D9ldzfqRPC07OxOmV4toXFMC_ru_zBQaCfjxwBCCgXpU18qRjkN2cgB2InJXKo9HfHX1IEivtlTHklG-lAQK22k9tD89Zaoz0_Svy71fmNd2tH5E42JKVA'
            }
        ];
    });

    // Save to localStorage whenever items change
    React.useEffect(() => {
        localStorage.setItem('aquamax_cart', JSON.stringify(items));
    }, [items]);

    const [hasInstallation, setHasInstallation] = useState(true);

    // Suggestions Mock
    const suggestions = [
        {
            id: 101,
            title: 'Chlorine Tabs 3 Inch',
            category: 'Chemicals',
            price: '€45.00',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6C6YlPKKI5JUKMIF6qDNVf1BgLm_Yb7zgEFAYIxCHgVfERSAEURx5ltTWd7js1UDjdMzS9zb4IJF7tPb5RZuYa9nnORLPy3k0ZUtJlJW5tlcT9ZV1GAmcyipMbyEG8DV9Eo9Pjrt5DStrlmLPXX_EFFsYVgTngrH8IyzqquRQoBPPZszSXakerN20QutVUtwMTm0kiz5TkbUKh3LoC4JCOSSVwI_pqO28HFgT3TLDMQzCidoqwzUlm4qNngvHeUrlQCdp6Ml8ucA'
        },
        {
            id: 102,
            category: 'Water Testing Kit',
            title: 'Water Testing Kit',
            price: '€29.99',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfOuqEuKtPJSmyX0UVWBmzz5OQytoLlx5hEX-FxY09G_fSy3pz0cMgQ3O8aufrhkbiZ9ZR4ygfXP4tz0M6kdWJiJfassl0o4oFsOd9JtTu0J45hUw-yZhGVmEuH0ZGbIQNNVDcIUbKO4NMHXn45Kz9PQ8DNIhaoycSHhfyZOBpIVD_6U4JDPHJJOhAyicf17stQGXL_XNjPfP-nAunc_lecfPdDFdJ3Bzqo70nmXN3F1DZuDx9U0Ga6dzRos82uN6EZh98aR_MhB4'
        }
    ];

    const updateQuantity = (id, newQuantity) => {
        setItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const clearCart = () => {
        if (window.confirm('Are you sure you want to clear your cart?')) {
            setItems([]);
        }
    };

    const { subtotal, tax, total } = useMemo(() => {
        const sub = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const installationCost = hasInstallation ? 150 : 0;
        const estimatedTax = (sub + installationCost) * 0.08; // 8% tax example
        return {
            subtotal: sub,
            tax: estimatedTax,
            total: sub + installationCost + estimatedTax
        };
    }, [items, hasInstallation]);

    if (items.length === 0) {
        return (
            <>
                <Header title={t('cart.title')} showBack={true} />
                <div className="flex flex-col items-center justify-center p-8 mt-20 text-center">
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-full mb-4">
                        <span className="material-symbols-outlined text-4xl text-gray-400">shopping_cart_off</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('cart.empty')}</h2>
                    <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
                    <button className="bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/30">
                        Start Shopping
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <Header
                title={`${t('cart.title')} (${items.length})`}
                showBack={true}
                rightAction={
                    <button
                        onClick={clearCart}
                        className="text-sm font-semibold text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                    >
                        {t('cart.clear')}
                    </button>
                }
            />

            <div className="pb-40">
                <AnimatePresence>
                    {items.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeItem}
                        />
                    ))}
                </AnimatePresence>

                {/* Installation Upsell */}
                <div className="p-4">
                    <div className="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/5 dark:bg-primary/10 p-3">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <span className="material-symbols-outlined text-[20px]">engineering</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm font-bold text-gray-900 dark:text-white">{t('cart.upsell.installation')}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{t('cart.upsell.warranty')}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-primary">+€150</span>
                            <label className="relative inline-flex cursor-pointer items-center">
                                <input
                                    type="checkbox"
                                    checked={hasInstallation}
                                    onChange={(e) => setHasInstallation(e.target.checked)}
                                    className="peer sr-only"
                                />
                                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:border-gray-600 dark:bg-gray-700"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Suggestions */}
                <div className="px-4 pb-2">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">{t('cart.suggestions')}</h3>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {suggestions.map(product => (
                            <ProductCard
                                key={product.id}
                                {...product}
                                isHot={false}
                                isDiscount={false}
                            />
                        ))}
                    </div>
                </div>

                <OrderSummary
                    subtotal={subtotal}
                    installationCost={150}
                    hasInstallation={hasInstallation}
                    tax={tax}
                    total={total}
                />

                <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 dark:text-gray-500 mb-6">
                    <span className="material-symbols-outlined text-[16px]">lock</span>
                    <span className="text-xs font-medium">{t('cart.secure')}</span>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="fixed bottom-0 left-0 right-0 z-40 w-full max-w-md mx-auto bg-white dark:bg-[#1a2632] border-t border-gray-100 dark:border-gray-800 p-4 pb-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <button className="group w-full flex items-center justify-between rounded-xl bg-primary hover:bg-blue-600 active:bg-blue-700 py-4 px-6 text-white shadow-lg shadow-blue-500/20 transition-all">
                    <span className="text-base font-bold">{t('cart.checkout')}</span>
                    <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-white/90">€{total.toFixed(2)}</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                </button>
            </div>
        </>
    );
};

export default Cart;
