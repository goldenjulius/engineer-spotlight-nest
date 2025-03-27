
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </MainLayout>
  );
};

export default Index;
