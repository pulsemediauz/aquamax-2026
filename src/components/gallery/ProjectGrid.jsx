import React from 'react';
import { motion } from 'framer-motion';

const ProjectGrid = ({ projects, onProjectClick }) => {
    return (
        <div className="columns-2 gap-4 space-y-4 pb-24">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    layoutId={`project-${project.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => onProjectClick(project)}
                    className="relative group overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 break-inside-avoid cursor-pointer"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>

                    <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 flex items-center gap-1 border border-white/10">
                        <span className="material-symbols-outlined text-white text-[12px]">location_on</span>
                        <span className="text-white text-[9px] font-bold uppercase tracking-wider truncate max-w-[60px]">{project.locationShort}</span>
                    </div>

                    <div className="absolute bottom-0 left-0 p-3 w-full">
                        <span className={`inline-block px-2 py-0.5 rounded-md text-white text-[9px] font-bold mb-1 ${project.badgeColor || 'bg-primary/90'}`}>
                            {project.category}
                        </span>
                        <h3 className="text-white text-xs font-bold leading-tight line-clamp-2">{project.title}</h3>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProjectGrid;
