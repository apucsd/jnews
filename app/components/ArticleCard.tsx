import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  category: string;
  categoryColor: string;
  title: string;
  date: string;
  imageUrl: string;
  isLast?: boolean;
}

export default function ArticleCard({
  category,
  categoryColor,
  title,
  date,
  imageUrl,
  isLast = false,
}: ArticleCardProps) {
  return (
    <div className={`flex flex-col flex-1 min-w-[300px] lg:min-w-0 group bg-white ${!isLast ? 'border-r border-jnews-border' : ''}`}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
      </div>
      <div className="flex flex-col p-[25px_30px] flex-grow">
        <span 
          className="text-[12px] font-bold uppercase tracking-wider mb-2 font-condensed"
          style={{ color: categoryColor }}
        >
          {category}
        </span>
        <h2 className="text-[20px] font-bold leading-[1.3] text-jnews-dark font-condensed mb-2 group-hover:text-jnews-business transition-colors">
          <Link href="#">{title}</Link>
        </h2>
        <span className="text-[11px] uppercase text-gray-400 font-condensed mt-auto">
          {date}
        </span>
      </div>
    </div>
  );
}
