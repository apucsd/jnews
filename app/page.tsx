import Link from 'next/link';
import ArticleCard from './components/ArticleCard';

const ARTICLES = [
  {
    category: 'Sports',
    categoryColor: '#26c0ef',
    title: 'Annual open water swim returns to Western Australia in February',
    date: 'August 10, 2018',
    imageUrl: 'https://images.unsplash.com/photo-1530549387074-d76f9600da07?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Culture',
    categoryColor: '#b38a58',
    title: 'The Sacred Balinese "Fire Horse" Dance: Sanghyang Jaran Dance',
    date: 'February 17, 2020',
    imageUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Lifestyle',
    categoryColor: '#ff4081',
    title: 'A Digital Media Startup Growing Up With Millennial Women',
    date: 'August 10, 2018',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    category: 'Business',
    categoryColor: '#2979ff',
    title: "China To Build Indonesia's Longest Bridge In North Kalimantan",
    date: 'August 3, 2018',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=2022&auto=format&fit=crop',
  },
  {
    category: 'Sports',
    categoryColor: '#26c0ef',
    title: "China's Peng banned and fined for Wimbledon corruption attempt",
    date: 'August 9, 2018',
    imageUrl: 'https://images.unsplash.com/photo-1595435066311-66c30f0f4258?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Header Placeholder for context */}
      <header className="bg-white border-b border-gray-200 py-6 mb-8">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold font-condensed tracking-tighter text-jnews-dark mb-4">
            THE DOWNTOWN
          </h1>
          <nav className="flex space-x-6 text-[11px] font-bold uppercase font-condensed tracking-wider border-t border-gray-100 pt-4 w-full justify-center">
            {['Home', 'News', 'Politics', 'Business', 'National', 'Culture', 'Opinion', 'Lifestyle', 'Sports'].map((item) => (
              <Link key={item} href="#" className="hover:text-jnews-business transition-colors">
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-wrap lg:flex-nowrap bg-white border border-jnews-border shadow-sm">
          {ARTICLES.map((article, index) => (
            <ArticleCard 
              key={index}
              {...article}
              isLast={index === ARTICLES.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Footer / Bottom spacing */}
      <footer className="py-20 text-center text-gray-400 text-sm">
        &copy; 2024 The Downtown. Inspired by JNews City News.
      </footer>
    </main>
  );
}
