import React from "react";
import TypeWritter from "typewriter-effect"
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroSection = () => {
    return(
        <main className="py-16 mt-16 md:flex md:shrirink-0">
            <div className="grid grid-cols-1 md:grid-cols-12">
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5}}
                    className="col-span-1 md:col-span-8 place-self-center justify-self-start"
                >
                <h1 className="font-extrabold px-4">
                    <span className="text-white text-8xl">
                        Hello, I'm {" "}
                        <br></br>
                        <span className="text-transparent bg-clip-text sm:text-7xl md:text-8xl bg-gradient-to-r from-sky-300 via-blue-500 to-violet-300 ">
                            Jonathan Yeo
                        </span>
                    </span>
                    <br></br>
                    <span className="text-7xl"> I'm a
                        <TypeWritter
                            options={{
                            
                                autoStart: true,
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString(`<span style="color:#FF77FF">Web Developer</span>`)
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString(`<span style="color:#10b981">Forex Trader</span>`)
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString(`<span style="color:#22d3ee">Still Single T-T</span>`)
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                            }}
                        ></TypeWritter>
                    </span>
                    <p className="text-sky-100 mt-8 text-baseed sm:text-lg md:text-xl mb-6">Marlon will call me a GAMBLER</p>
                    <Link 
                        href="https://drive.google.com/file/d/1ajOJwhrua1lElHtbVjzOv12ySXn8xPBa/view?usp=sharing"
                        className="px-6 inline-block py-3 rounded-full border-2 border-solid-2 border-lime-500 hover:bg-lime-200">
                        View my portfolio
                    </Link>
                </h1>
                </motion.div>
                
                <div className="col-span-4 md:col-span-4 place-self-center mt-12 lg:mt-0 pt-0 lg:pt-24">
                    <div className="w-[700px] h-[560px] relative z-0">
                        <img
                        src="/Adam_and_God.jpg"
                        alt="hero section"
                        className="w-full h-full object-cover rounded-full">
                        </img>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default dynamic(() => Promise.resolve(HeroSection), {ssr: false});