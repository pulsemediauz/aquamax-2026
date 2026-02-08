import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductFooter = ({ onAddToCart, onBuyNow }) => {
    const { t } = useTranslation();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 px-5 py-4 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] max-w-md mx-auto">
            <div className="flex gap-3">
                <button
                    onClick={onAddToCart}
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border-2 border-primary bg-white dark:bg-transparent px-4 py-3 text-sm font-bold text-primary hover:bg-slate-50 transition-colors active:scale-95"
                >
                    <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                    {t('product.add_to_cart')}
                </button>
                <button
                    onClick={onBuyNow}
                    className="flex-1 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-blue-600 transition-colors active:scale-95"
                >
                    {t('product.buy_now')}
                </button>
            </div>
        </div>
    );
};

export default ProductFooter;
