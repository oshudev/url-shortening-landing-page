import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { UrlShortener } from './sections/UrlShortener';
import { Features } from './sections/Features';
import { Footer } from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UrlShortener />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;
