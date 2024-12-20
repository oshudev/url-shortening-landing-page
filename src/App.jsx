import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { UrlShortener } from './sections/UrlShortener';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UrlShortener />
      </main>
    </>
  );
}

export default App;
