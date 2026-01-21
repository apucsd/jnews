const LifestyleCard = () => {
    return (
        <div className="bg-white shadow-sm overflow-hidden group cursor-pointer">
            <div className="relative aspect-[4/3]">
                <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-pink-500 text-white text-[10px] font-black px-2 py-1 tracking-widest uppercase">
                    LIFESTYLE
                </span>
            </div>
            <div className="p-8">
                <h3 className="text-xl font-bold leading-tight group-hover:text-red-600 transition-colors">
                    Google tracks location data even when users turn service off
                </h3>
            </div>
        </div>
    );
};

export default LifestyleCard;
