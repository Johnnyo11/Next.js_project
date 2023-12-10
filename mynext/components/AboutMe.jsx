import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ol className="list-disc pl-2">
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Python</li>
      </ol>
    ),
  },
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>Internal CTF</li>
        <li>Solana Hyperdrive</li>
        <li>APUBCC Sparkathon</li>
      </ul>
    ),
  },
  {
    title: "Edgucation",
    id: "edgucation",
    content: (
      <ul className="list-disc pl-2">
        <li>Asia Pacific University</li>
        <li>SMJK Kuching High School</li>
      </ul>
    ),
  },
];
//1
const AboutMe = () => {
  //1b
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  //1a
  return (
    <section className="text-white grid" id="aboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
        <div>
          <img
            src="/AboutMe.png"
            alt="About Me"
            width={450}
            height={450}
            style={{ borderRadius: "25px" }}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-base text-justify lg:text-lg">
            Currently I am studying in degree in Computer Science at APU, where
            I have been trying to hone my skills in various technologies. I am
            aware and would like to explore more of several front-end
            development like React, Next.js, HTML, and CSS. I&apos;m not skilled
            yet but I&apos;m trying my best to expose myself in learning more.
            I&apos;m curious about the cybersecurity sector although I
            didn&apos;t pick that as my major but that won&apos;t stop me from
            being exposed to new things. My curiosity has led me to participate
            multiple workshops, clubs and hackathons, if my schedule allows, to
            experience knowledge, wins, and defeats. Nonetheless, still fun.{" "}
            <span className=" text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-700 via-green-500 to-amber-800">
              Gotta thug it out.
            </span>{" "}
          </p>
          <div className="flex flex-row mt-8">
            {/* 1e */}
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("edgucation")}
              active={tab === "edgucation"}
            >
              {" "}
              Edgucation{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
