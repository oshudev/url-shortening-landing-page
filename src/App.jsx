import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { UrlShortener } from './sections/UrlShortener';
import { Features } from './sections/Features';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UrlShortener />
        <Features />
      </main>
    </>
  );
}

export default App;
