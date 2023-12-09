import React from "react";
import HeroSection from"../components/HeroSection";
import Project from "../components/project";
import footer from "../components/footer"


export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <main>
        <HeroSection/>
        <Project/>
        <footer/>
      </main>
    </div>
  );
}