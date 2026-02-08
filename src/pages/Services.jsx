import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import ServiceCard from '../components/services/ServiceCard';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: t('services.categories.equipment'),
            subtitle: 'From Germany & Spain',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU5wJcUGUMS23aj-Sehfs_qIgoM0SpXRhpPOsHxr1cG2RwQBwXZV0jGyy0Wj-aNqnAh_gSlmVj-2oY0cE3wOYn_cvqWdkffSb76A9B9vISPZxcA5QhjgIWb3V2-_smICNZRdwRrXFwTmMhLJ6Jtz0UE8vdjKWTXkkifIr6BuLLOzTZUdPKfEzRkGOFWpmx52tiANALavrqHJBlu_53JXR4F6jvSHnZWR2NHDd8BImpQ1p9fl9Es5QcNpwnENONXgHjkoB5CmKrymE',
            link: '/catalog'
        },
        {
            title: t('services.categories.mosaic'),
            subtitle: 'Artistic tiling & luxury finishes',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASpdV5rkuLfRQBKZ7aXACT_4tTebBRkQJdur2uBq0A8haOkqyaBx3zWb0HAIFeizv_TxBBwGbb07nznjS3AA1jFOMKEEVjDuwU-9mD3NkVfXf15CoKK6ZyjY3s6se15B-Jz3EbwcGjdO5STzrKIE1uG77Bwh31gKw7iKrDz77t_JoZC8lTiyyYvnclVi97ad15OOSW6qpMju_pu_0Xj3zgfV0QHtPm3z4fX68uiCoq2Z8rbbg1-CW5I3uDxLsMQYn7z5n0dR63vCY',
            link: '/services/mosaic'
        },
        {
            title: t('services.categories.construction'),
            subtitle: 'Turnkey design & build projects',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTuGg9yELo14vHfsiP042tldy_Znui371WqndsrgGP3GmOs9ZMotkvRyW_RpnKLipK7XIKOtioxktO59QTlbBC1imoUBzN3Xa_H5paZKY5U8CDEVq9NEuc40yUHKLDp1CGy1C3RubWgTN-1t74xx_cDkiCZN2_PokPsAJXzMHuqVN_UuFQZxJhhjxck3Xolr7rac4GpnK27kHOPxpVcx8ltnqtXTxckejXtUKnXp9VOAkHWYOvprrqJYOgEFCod7RU2fFJHD6pL94',
            link: '/services/construction'
        },
        {
            title: t('services.categories.maintenance'),
            subtitle: 'Cleaning, chemical balance & repair',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFXm0aTxvCqTz6we0481uDq2FeSnpVRnAn3MFz79S0q1MfKEi0wfq2uPwghbKsMv_GyPBtfU10KSVC4atZbJP14LshNn2r9qqOMnhGxbbOPGUX14bMU3-wJwN2tJClzael0wf7eT0irnBQsbJmzx9Gr115VuMdwwatimm9VSWZWAgOs_BYcuR8LGb2KnN2UmAA_vyb-OJ4IunGKSWDmn4Q_uzYlfyvI2C1vEDoyKzfKhe-J_9s7dXPFvpNgu9LV8ulGW1Un57yDBY',
            link: '/services/maintenance'
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen pb-24">
            <Header title={t('services.title')} showBack={true} />
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
