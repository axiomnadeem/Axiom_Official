import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080b11]">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Projects />
      <Team />
      <Footer />
    </main>
  );
}
