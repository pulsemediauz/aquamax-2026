import React, { useState } from 'react';

const ProductImageGallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <div className="relative w-full bg-white dark:bg-slate-800">
            <div className="aspect-[4/3] w-full relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                    style={{ backgroundImage: `url('${images[activeImage]}')` }}
                ></div>

                <button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveImage(index)}
                            className={`h-2 w-2 rounded-full transition-colors ${activeImage === index ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-600'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductImageGallery;
