import { CustomCursor, Navbar } from './components';
import {
  HeroSection,
  AboutSection,
  EducationSection,
  SkillsSection,
  ProjectsSection,
  LeetCodeSection,
  ExperienceSection,
  ContactSection,
} from './sections';
import './App.css';

function App() {
  return (
    <div className="w-full min-h-screen bg-dark-bg">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <LeetCodeSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
