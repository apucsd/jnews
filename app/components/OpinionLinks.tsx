const opinionLinks = [
    'Tour showcases shared art history of Indonesia and Singapore',
    'Finland Has An Education System The Other Country Should Learn From',
    'Women in Politics: Urgency of Quota System',
];

const OpinionLinks = () => {
    return (
        <div className="bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold font-condensed mb-6 relative">
                Opinion
                <span className="absolute bottom-[-10px] left-0 w-8 h-[2px] bg-black"></span>
            </h2>
            <ul className="space-y-4 pt-2">
                {opinionLinks.map((link, index) => (
                    <li key={index} className="flex gap-3 items-start group cursor-pointer">
                        <span className="mt-1 transform rotate-45 w-1.5 h-1.5 border-t border-r border-gray-400 group-hover:border-red-600"></span>
                        <span className="text-[14px] font-condensed font-bold group-hover:text-red-600 transition-colors">
                            {link}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OpinionLinks;
