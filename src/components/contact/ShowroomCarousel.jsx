import React from 'react';
import { useTranslation } from 'react-i18next';

const ShowroomCarousel = () => {
    const { t } = useTranslation();

    const showrooms = [
        {
            name: 'Aquamax Central',
            type: 'Flagship Store',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHTdreSx1-wScy5wuwq5Zn4jjPyYU7gYEoFQKTRONIAgm3Wj2kmQFSGQVrBAUjivppI0h0gN7p-tR856iyjaVtg3I-1iC1fV76cX6I8QbS3jP93zUj_IheN8JTQVYD7p8mOSadHeTahTjDPvNcQ2_CIRP5aQfexNXE1hJOyxdcV_5Rbs5r3NkjIujKZB-9co2uwFSuk_IQGIq4tFtMZ6-ZA794UDOuEIwI_voUvi6tv7rsIvau6LWcwbY7IDdRhOf_l3KQrJkIEv0',
            address: '123 Blue Water Blvd',
            city: 'Miami, FL 33101',
            hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
            open: true
        },
        {
            name: 'Mosaic Studio',
            type: 'Design Center',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcs4ZDJ6M_aAnhvWIFcMeJTD-b_EfY4BMd3QBVuloV-M21hT-2dNZs0IEbMkIIJXxaupZH-BLoot7J-4CRgGc16vDlZweUE8hLqoh7TZKCG_dWoi7YXJPMD0lxFjahvp0sVGFFqYG_m8Rz9YthG0xvx4zXud3iBMrl-f9TZbyobCCx1ey3zpDTo08t-BymozkSRuq7b2vy5FQfwHrOyzMWForKGjIZVhlwTyLNDSwwrJ2-y8nc7iMJMJzQz0ngfV_I0lOZgnUJFgE',
            address: '88 Tile Road, Suite B',
            city: 'Coral Gables, FL 33134',
            hours: 'Mon - Fri: 10:00 AM - 7:00 PM',
            open: false
        },
        {
            name: 'The Construction Hub',
            type: 'Pro Services',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqD9aViGccTAWcO7MOUcXaGEIRGyLlbrhc4ag8M-8KECECyeSVrW1pOAF5f28JhWVh3QHhmZKiuV10qNQY8rHBClGiNJiqoCul8u3j9vCNGZ4w4gvKzcNS1zaVh7I2Uop7koZlt7-3e4nQpvTe3mNeqS-kKDKyr_VT08C9NvBanp7EK1Wqbv4diBnWwA8Fs0lxXkGnWnbueD_HG2ZzvoFVc8-2Xg35YnYSkl23NoarpOUgM0RyWdIA4ZOJ2emalf6UUNAwY7OOD5A',
            address: '450 Industrial Parkway',
            city: 'Doral, FL 33178',
            hours: 'Mon - Sat: 7:00 AM - 5:00 PM',
            open: false
        }
    ];

    return (
        <div className="flex w-full overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 pb-8 gap-5">
            {showrooms.map((room, index) => (
                <div key={index} className="snap-center flex-shrink-0 w-full flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
                    <div className="relative w-full aspect-[4/3] bg-gray-200">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${room.image}")` }}></div>
                        {room.open && (
                            <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                <span className="material-symbols-outlined text-green-600 text-[14px]">circle</span>
                                <span className="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wide">{t('showroom.open')}</span>
                            </div>
                        )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                        <div className="mb-4">
                            <h3 className="text-2xl font-extrabold text-[#111418] dark:text-white mb-1">{room.name}</h3>
                            <p className="text-primary text-sm font-semibold uppercase tracking-wider">{room.type}</p>
                        </div>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3">
                                <div className="bg-primary/10 p-2 rounded-full shrink-0 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                                </div>
                                <div>
                                    <p className="text-[#111418] dark:text-gray-200 text-base font-medium leading-snug">{room.address}</p>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm">{room.city}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-primary/10 p-2 rounded-full shrink-0 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[20px]">schedule</span>
                                </div>
                                <div>
                                    <p className="text-[#111418] dark:text-gray-200 text-base font-medium leading-snug">{room.hours}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-auto flex flex-col gap-3">
                            <button className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 px-5 bg-primary hover:bg-blue-600 active:scale-[0.98] transition-all text-white text-base font-bold tracking-[0.015em] shadow-lg shadow-blue-500/20">
                                <span className="mr-2 material-symbols-outlined text-[20px]">vrpano</span>
                                <span className="truncate">{t('showroom.virtual_tour')}</span>
                            </button>
                            <button className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 px-5 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 active:scale-[0.98] transition-all text-[#111418] dark:text-white text-base font-semibold">
                                <span className="mr-2 material-symbols-outlined text-[20px]">map</span>
                                <span className="truncate">{t('showroom.map')}</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ShowroomCarousel;
