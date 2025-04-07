"use client";
import grainImage from "../../assets/images/grain.jpg";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { motion,useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    "hidden" : {
        opacity : 0,
        y : "150%"
    },
    "visible" : {
        opacity : 1,
        y : ["150%" , "0%"],
        transition : {
            delay : 0.4,
            duration : 0.4,
            ease: "easeInOut",
        }
    }
}

const Card = ({ project, i  }) => {

    const containerRef = useRef(null);
    const inView = useInView(containerRef, {once : true});
    

    return (
        <div ref={containerRef} key={project.title} className="bg-gray-800 rounded-3xl sticky z-0 after:z-10 overflow-hidden after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none" style={{
            top: `calc(72px + ${i * 25}px)`
        }}>
            <div className="absolute inset-0 -z-10 opacity-5 lg:pt-16 lg:px-20" style={{
                backgroundImage: `url(${grainImage.src})`
            }}></div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                    <motion.div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text"variants={variants} initial = "hidden" animate = {inView ? "visible": ""}>
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                    </motion.div>
                    <motion.h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl"variants={variants} initial = "hidden" animate = {inView ? "visible": ""}>{project.title}</motion.h3>
                    <motion.hr className="border-t-2 border-white/5 mt-4 md:mt-5" variants={variants} initial = "hidden" animate = {inView ? "visible": ""}/>
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result, index) => (
                            <motion.li key={index} className="flex gap-2 text-sm md:text-base text-white/50"variants={variants} initial = "hidden" animate = {inView ? "visible": ""}>
                                <FaRegCheckCircle className="size-5" />
                                <span>{result.title}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <a target="_blank" rel="noopener noreferrer" href={project.link}>
                        <motion.button whileTap={{scale : 0.9}} className="text-gray-950 bg-white h-12 w-full rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-8 md:w-auto px-6"variants={variants} initial = "hidden" animate = {inView ? "visible": ""}>
                            <span>Visit Live</span>
                            <FiArrowUpRight className="size-4 md:size-6" />
                        </motion.button>
                    </a>
                </div>

                <motion.div className="relative" variants={variants} initial = "hidden" animate = {inView ? "visible": ""}>
                    <Image src={project.image} alt={project.title} className="rounded-tl-3xl rounded-tr-3xl mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </motion.div>
            </div>
        </div>
    )
}

export default Card