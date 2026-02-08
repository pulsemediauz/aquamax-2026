import React from 'react';

const TeamGrid = ({ team }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {team.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
                        <img alt={member.name} class="h-full w-full object-cover" src={member.image} />
                    </div>
                    <h4 className="text-slate-900 dark:text-white text-base font-bold">{member.name}</h4>
                    <p className="text-primary text-xs font-medium uppercase tracking-wide">{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamGrid;
