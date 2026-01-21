const OpinionCard = () => {
    return (
        <div className="bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative aspect-[4/3]">
                <img
                    src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&q=80&w=600"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-yellow-500 text-white text-[10px] font-black px-2 py-1 tracking-widest uppercase">
                    OPINION
                </span>
            </div>
            <div className="p-8">
                <h3 className="text-xl font-condensed font-bold leading-tight mb-4 group-hover:text-red-600 transition-colors">
                    Democratic Party politician calls Prabowo ‘cardboard general’
                </h3>
                <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-4">
                    <span>
                        by <span className="text-black">John Doe</span>
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>August 10, 2018</span>
                </div>
                <p className="text-gray-500 text-[14px] leading-relaxed">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                    life...
                </p>
            </div>
        </div>
    );
};

export default OpinionCard;
