import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ArticleSlider from './components/ArticleSlider';

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <ArticleSlider />

            <Footer />
        </main>
    );
}
