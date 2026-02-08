import React from 'react';

const MaintenanceServiceList = ({ services }) => {
    return (
        <div className="flex flex-col gap-4 p-4">
            {services.map((service, index) => (
                <div key={index} className="group flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 p-4 shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-[2_2_0px] flex-col justify-between gap-3">
                        <div className="flex flex-col gap-1">
                            <span className={`inline-flex items-center gap-1 w-fit rounded-full px-2 py-0.5 text-xs font-bold ${service.priceTagClass || 'bg-blue-50 dark:bg-blue-900/30 text-primary'}`}>
                                {service.icon && <span className="material-symbols-outlined text-[14px]">{service.icon}</span>}
                                {service.price}
                            </span>
                            <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight mt-1">{service.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-normal line-clamp-2">{service.description}</p>
                        </div>
                        <button className={`flex w-fit items-center justify-center rounded-lg h-9 px-4 text-sm font-bold transition-colors active:scale-95 ${service.buttonClass || 'bg-primary text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600'}`}>
                            {service.cta}
                        </button>
                    </div>
                    <div
                        className="w-28 h-auto min-h-[100px] rounded-lg bg-cover bg-center shrink-0 relative overflow-hidden"
                        style={{ backgroundImage: `url("${service.image}")` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MaintenanceServiceList;
