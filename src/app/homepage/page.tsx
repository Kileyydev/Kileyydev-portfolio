import TopNavBar from "./components/TopNavBar";
import HeroSection from "./components/Herosection";
import AboutSection from "./components/Aboutsection";
import ExperienceSection from "./components/Experiencesection";
import ProjectSection from "./components/Projectsection";
import ContactSection from "./components/Contactsection";
import Footer from "./components/Footer";


export default function Home() {
return (
  <>
    <TopNavBar />
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectSection />
    <ContactSection />
    <Footer />
  </>
);
}