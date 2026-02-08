import React, { useEffect } from 'react';
import Header from '../../components/layout/Header';
import { useTranslation } from 'react-i18next';

const Mosaic = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const collections = [
        { name: 'Venetian Blue', finish: 'High Gloss', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsgmcEzvHbX5ZgjRGigerDOErcHCC600nOfGI7CffifLZh1i7DkaO6jjvB28qp8xzqQFr01m_SOpe-7CCRIfKp_HhY6PzhANO8cgD-WpX_Xh1P9ft1md2B1kaX8Iuk3f2R-Qp4MGU2CZSSO3_nKu5CQfrUDyIJ5z_9bTKp2obvodYA7lfSP1OiO6ts83yUMujQ7n7KNfWjLrkL1uzkYiI_cRYAn-AgN-TqRp20agOuT-PJHhLWJ101MIB8Oe4wQJR22gEAhNbn82c', height: 'h-64' },
        { name: 'Roma Nera', finish: 'Matte Finish', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzrofjAtGw9MXdhdWwOHoo9E3ZhjIx4hCk7pYrVaRYbwqZ0C2gt5dw1jKxT6eXLr0tCTKagDFUWX8XPHoY6ddxIuTgUQlSe1dfgiddb8cqA5jkMmrcR1-8wpyqq-yZTsqJQAZgnXKGpinIFfIwEN1yx7O8V74wu1vnK-9cwu-_3CJ_ml12pRW8xTZfyzbe01NXxehd30O2aLfloay9VMFtQmUjcKRhRZFCqw9JiJAJRLigQDDRASbph1PKKPQHQANd-69uQmRu4kc', height: 'h-40' },
        { name: 'Carrara White', finish: 'Luminescent', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRS4xGDjwgycdCIDr4DLxGi4zHlPYI3QPfJxeYFkPvP64DE3_XJBPW7NJG1vrj9oc3joI2e8hVjCu5T3ypW69p31oU7B_QngL3ogkBAY9oNlKgo7Swbj3ezb6xjUK48gzg4xy2Dvp-1cQvE3Dd3NO251KeWWFG-3oyCZk1fr265LD2vv_VtN9fYw_1_ZiG8aXT1bKXageQFbNatM0xwmrzwYhHljfZuI7JwYwNNZt8_jQ4oevQdT62lIH8CXU6zMibqbXay3m2yF4', height: 'h-40' },
        { name: 'Azure Riviera', finish: 'Polished Glass', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmgX4ZIU9atexVffzNO2jEUY2jFvl5g2STezvi8yAqH4jV2ATzNug_Tg0rVnpdgyxh7_wWnWSqWcvybMCgcC_6ZAtqrZ4AZq3yEVWWDhZEHUp2C7XBoID60vLdZbyCCxiuTjM9dgpGGMJJUlDsncDp9n4ZzZjpMkgNHqR08JcizIQVAUlRB_KcOebk_EWbpp-EaRr9zqeyEAWo4ZI4CrNM1p_phdNpM9W7xTH-wfO5_1eQQ44cA5GVXr11Voe0D7fIHG92ED3P0Nc', height: 'h-64' }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Header title={t('services.mosaic.title')} showBack={true} />

            {/* Mosaic Hero */}
            <div className="p-0 md:p-4">
                <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white dark:bg-gray-800 md:rounded-lg min-h-[440px] relative shadow-lg" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuABrTLGUACoCy423OoLk-_wDiyN_CClpFso6c_llXd0ngzDiR2Txpg-TsUPi2MYhkp3I0EKjmFxied9zphHOb9pjWg5rDh3-lJsnFTlmNt_Jv0ifGNiP-4DN3yr5iNxEfIAclsl9oVda2gVSfW-sJUyQqjYro27k3Td8M58afiwmZWH89110rGok9K7SOx0oEnB0WFMPI76Pofw2D9oqHD7EgEnP1b5WR3_SXuKkVhHTsHcoEJlI7d-VaPEu-z3mku-nbU7317HClg")' }}>
                    <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1.5 bg-white/95 text-[#111418] px-3 py-1.5 rounded-full shadow-lg border border-gray-100">
                            <span className="material-symbols-outlined text-amber-500 text-[18px] filled">verified</span>
                            <span className="text-xs font-bold tracking-wide uppercase">Italian Excellence</span>
                        </div>
                    </div>
                    <div className="flex flex-col p-6 gap-3">
                        <span className="text-white font-bold tracking-wider text-[10px] uppercase bg-primary px-2 py-1 w-fit rounded shadow-sm">Advanced Bonding Tech</span>
                        <h1 className="text-white tracking-tight text-[32px] font-extrabold leading-tight shadow-sm">{t('services.mosaic.hero_title')}</h1>
                        <p className="text-gray-200 text-sm font-medium leading-relaxed max-w-[95%]">{t('services.mosaic.hero_subtitle')}</p>
                    </div>
                </div>
            </div>

            {/* Durability */}
            <div className="px-4 py-6 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                <h2 className="text-slate-900 dark:text-white text-[20px] font-bold mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                    {t('services.mosaic.durability')}
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark border border-transparent">
                        <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm text-primary shrink-0">
                            <span className="material-symbols-outlined">layers</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-gray-100 mb-1">Advanced Adhesion</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Our Italian polyurethane bond creates a permanent structure stronger than traditional mesh or paper backing.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Collections Grid */}
            <div className="px-4 py-6 pb-24">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <h2 className="text-slate-900 dark:text-white tracking-tight text-[22px] font-bold leading-tight">{t('services.mosaic.collections')}</h2>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Premium glass mosaic patterns</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {collections.map((item, index) => (
                        <div key={index} className="relative group cursor-pointer">
                            <div className={`bg-cover bg-center rounded-lg ${item.height} w-full shadow-sm transition-transform duration-300 group-hover:scale-[1.02]`} style={{ backgroundImage: `url("${item.image}")` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg opacity-90"></div>
                                <div className="absolute top-2 left-2">
                                    <span className="bg-white/90 text-[10px] font-bold px-2 py-0.5 rounded text-gray-900 shadow-sm uppercase">JointPoint™</span>
                                </div>
                                <div className="absolute bottom-0 left-0 p-3">
                                    <p className="text-white text-sm font-bold">{item.name}</p>
                                    <p className="text-gray-300 text-xs">{item.finish}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 z-40 max-w-md mx-auto">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/30 transition-all active:scale-[0.98]">
                    <span className="material-symbols-outlined">edit_square</span>
                    {t('services.mosaic.order')}
                </button>
            </div>
        </div>
    );
};

export default Mosaic;
