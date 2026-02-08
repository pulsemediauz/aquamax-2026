import React from 'react';

const BrandGrid = () => {
    const brands = [
        { name: 'KRIPSOL', color: 'text-[#005BAC]', font: 'font-extrabold' },
        { name: 'HAYWARD', color: 'text-[#E25A2C]', font: 'font-bold italic' },
        { name: 'QP', color: 'text-[#004B97]', font: 'font-bold' },
        { name: 'ASEKO', color: 'text-[#009FE3]', font: 'font-black uppercase tracking-widest' },
        { name: 'Plimat', color: 'text-[#ED1C24]', font: 'font-bold' },
        { name: 'Lareter', color: 'text-[#27348B]', font: 'font-serif font-bold italic' }
    ];

    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {brands.map((brand, index) => (
                <div key={index} className="flex h-20 w-full items-center justify-center rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm p-4 group">
                    <span className={`text-xl text-gray-400 group-hover:${brand.color} transition-colors duration-300 ${brand.font}`}>
                        {brand.name}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default BrandGrid;
