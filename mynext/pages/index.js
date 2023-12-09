import React from "react";
import HeroSection from"../components/HeroSection";
import Project from "../components/project";

export default function Home(){
  return(
    <div className="flex min-h-screen flex-col">
      <main>
        <HeroSection/>
        <Project/>
      </main>
    </div>
  );
}