import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import GalleryFilters from '../components/gallery/GalleryFilters';
import ProjectGrid from '../components/gallery/ProjectGrid';
import ProjectDetailModal from '../components/gallery/ProjectDetailModal';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const allProjects = [
        {
            id: 1,
            title: 'Villa Al-Hamra',
            location: 'Palm Jumeirah, Dubai',
            locationShort: 'Dubai',
            category: 'private',
            badgeColor: 'bg-primary/90',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1WSnDvZ7I5oa1DINyJSCTiUYfchE1XTKPRtHZtq1EQmrkbgqSlO5MEU_i4vTmCYAYxMLJzMZehS0X6bg-dJulJy2kofh7p_F2glIHIknMXJjRog-egg1299q6PxBFinwg1h1c_RGAaspiLVrQ68_cgM9KWaucLeGMf-dbCOivAY9Z09zbzSg76VS52qU7Sq77_v8e0sKmNN_4ykWCxBcyVlAA9sSjGiEhWdhOtkN7uOqj5Yim8vmOoZNBI1sgRfizszA09nferZQ',
            description: 'A stunning infinity edge pool designed to blend seamlessly with the Arabian Gulf horizon. Features premium glass mosaic tiling and our signature whisper-quiet filtration system.',
            specs: [
                { icon: 'grid_on', title: 'Ezarri Iris Glass Mosaic', value: 'Iridescent Pearl Finish, 25mm' },
                { icon: 'settings', title: 'Aquamax Pro Inverter', value: 'Variable speed heat pump, 24kW' }
            ]
        },
        {
            id: 2,
            title: 'Azure Geometric',
            location: 'South Beach, Miami',
            locationShort: 'Miami',
            category: 'mosaic',
            badgeColor: 'bg-emerald-500/90',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLTA-mPUWAuAHDX1ZuY15lwx_Hhx3MiEjMNiPDVCLkT1d3PPSOdWjHaG-pSEDmlrstP9xwQgJ0_TrQv7dZ4XlBqwEyYdZde6unbbMTiCtwElPBlsTl1qbPBaQCso0js2nLUfb8nA3IpU3ShUG6DgSpcF1RiEapS2bQ-Qz1zCK3_7R8wScYTYwni7smyHjvrtr4JWdejK5KBMtCRLCh2mrmvj-5tzHEBtK-Jehkijv5lPC087naIcnjkPGYpP3gZWcArTx5-yp4HkI',
            description: 'Modern geometric swimming pool with custom blue mosaic tiles.',
            specs: [
                { icon: 'grid_on', title: 'Custom Mosaic Art', value: 'Hand-cut glass tiles' },
                { icon: 'water_drop', title: 'Saltwater System', value: 'Hayward AquaRite' }
            ]
        },
        {
            id: 3,
            title: 'Kensington Spa',
            location: 'Kensington, London',
            locationShort: 'London',
            category: 'indoor',
            badgeColor: 'bg-purple-500/90',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmwAGLkzBJuQ4nwSTIAN6BWDO87cx6nESZuZ3DdHcRVbxUqw8JbY2x2YxmjqOawbO39U_WXg1ziEj6G6ne9KJ8Xd55IDV_hBnmihEZzH6Mi8UH8B6439Vx6YxSOXFK5RC5qNcgLPr0HONfVQ4ppF97kIU1_XU61exq7TZ-j8Ls9PgdAocZl_8weXxqBomJsrzTf9P4x7hifxyR9APf14RAPMIb6v0akClUkUntWK1oxEgg_qRql3J0Jp7beZGVCpZKSWkLYW_1wRs',
            description: 'Indoor luxury pool with warm lighting and stone deck.',
            specs: [
                { icon: 'lightbulb', title: 'LED Ambience', value: 'Color-changing underwater lights' },
                { icon: 'thermostat', title: 'Climate Control', value: 'Dehumidification & Heating' }
            ]
        },
        {
            id: 4,
            title: 'Oasis Public',
            location: 'Cancun, Mexico',
            locationShort: 'Cancun',
            category: 'public',
            badgeColor: 'bg-orange-500/90',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzCnvl2GIkS_a39HHIy9oj3mlxD3aXhuvhNKZhwToT6emo0NsMsxfm9uscfDPK5YzwyFT5yGm6Eo053W_0810l_XmVjXx8QTbu9Pl6RrdTTxPpfL8rCB6LXR4IvDzzf_Z36vspS3eQvQjqB77c8Atwai1LUZMY1jcQhP14HMTtt_Qxy2wspLZz6N5c-8luMWKAWzvIGikT8W_3VeX-kjh9_xYWLr9SzjQSGEShqi4i2GGHeYm0HHs19GCPP9WrJwQ5icwVqKdo4Eo',
            description: 'Large resort pool with palm trees and lounge chairs.',
            specs: [
                { icon: 'groups', title: 'High Capacity', value: 'Commercial Grade Filters' },
                { icon: 'waves', title: 'Wave Machine', value: 'Custom engineered logic' }
            ]
        },
        {
            id: 5,
            title: 'Seaside Estate',
            location: 'Malibu, California',
            locationShort: 'Malibu',
            category: 'private',
            badgeColor: 'bg-primary/90',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJAFyrEPZo3TDUQiY4VvHWDlYac23S7AClySmGwuU16AlBJlbx-iZuuv6bfwIu7fFPFkEBcdiOTDegQ71osihN_EVGdCMVoF9einnZOgmWDzHRonvMUFJGhvM1RZlVGKMgJK92uKd08yFNq0250oSxMZ1GmzwansBdZS_HjXqrFmbCMve6MutMm9k-e_En_yatnTcPcFQsBrOr7dudkDUe8al6ejBbOw9fUlpign2_FujBsi2ygLPQSsjMQF_9qNXvD49Qtte9JRU',
            description: 'Minimalist rectangular pool in a modern backyard garden.',
            specs: [
                { icon: 'straighten', title: 'Lap Pool', value: '25m Length' },
                { icon: 'cleaning_services', title: 'Auto Cleaner', value: 'Robotic System Integrated' }
            ]
        },
        {
            id: 6,
            title: 'Mosaic Pattern 4',
            location: 'Showroom',
            locationShort: 'Showroom',
            category: 'mosaic',
            badgeColor: 'bg-teal-500/90',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOpnHkmAkeDH6dwcBWaV7-kek6A4XJ3ml1E67GcFxdjbrrJCKua3k_U0dmMy_qku34Y9w4ABvZZq0RG8fWFaDwbNTnOlAqjTlINeiuCZfk_lIbrHVQEuqZWmRZzcDwG_bJP24pIMwdlBBmkOHRIpzA8oNRdBThF463jqPm13wO7EzsOO5EhhIld0-8LP8aWFEcVBpnfXCs0pzxTgs3SXNYpC3lecIWYsrMziriM30gVS7SNkrGC9k-NLaulMqsBIe5tBKxBqcJ0cI',
            description: 'Detail shot of water rippling over blue pool tiles.',
            specs: [
                { icon: 'palette', title: 'Color Range', value: 'Blue mix' },
                { icon: 'layers', title: 'Material', value: 'Vitreous Glass' }
            ]
        }
    ];

    const filteredProjects = filter === 'all'
        ? allProjects
        : allProjects.filter(p => p.category === filter);

    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen">
            <Header title={t('gallery.title')} showBack={false} />
            <GalleryFilters activeFilter={filter} onFilterChange={setFilter} />
            <div className="px-4">
                <ProjectGrid projects={filteredProjects} onProjectClick={setSelectedProject} />
            </div>
            <ProjectDetailModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Gallery;
