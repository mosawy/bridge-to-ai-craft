import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeachingSection from "@/components/TeachingSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import BlogSection from "@/components/BlogSection";
import UsesSection from "@/components/UsesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TeachingSection />
      <OpenSourceSection />
      <BlogSection />
      <UsesSection />
      <Footer />
    </div>
  );
};

export default Index;
