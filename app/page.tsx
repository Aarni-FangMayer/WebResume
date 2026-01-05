import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Languages from './components/Languages';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <Skills />
      <Languages />
    </main>
  );
}
