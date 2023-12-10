import React from "react";
import HeroSection from "../components/HeroSection";
import Project from "../components/project";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import EmailSection from "../components/EmailSection";
import AchievementsSection from "@/components/Achievement";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <Project />
        <EmailSection />
      </main>
      <Footer />
    </div>
  );
}
