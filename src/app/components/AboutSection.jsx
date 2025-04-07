"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import CardComponent from "./CardComponent";
import Image from "next/image";
import bookImage from "../../assets/images/book-cover.png"
import { SiJavascript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import mapImage from "../../assets/images/map.png"
import meEmoji from "../../assets/images/memoji-smile.png"
import CardHeader from "./CardHeader";
import ToolBoxComponent from "./ToolBoxComponent";
import SectionHeader from "./SectionHeader";

const toolBox = [
    {
        title: "JavaScript",
        iconType: SiJavascript
    },
    {
        title: "Postgresql",
        iconType: BiLogoPostgresql
    },
    {
        title: "MongoDB",
        iconType: SiMongodb
    },
    {
        title: "NextJs",
        iconType: RiNextjsFill
    },
    {
        title: "Framer Motion",
        iconType: TbBrandFramerMotion
    },
    {
        title: "Tailwind CSS",
        iconType: RiTailwindCssFill
    },
]

const hobbies = [
    {
        title: "Working Out",
        emoji: "🏋️‍♂️",
        left: '5%',
        top: '5%',
    },
    {
        title: "Racing",
        emoji: "🏎️",
        left: '50%',
        top: '5%',
    },
    {

        title: "Riding",
        emoji: "🏍️",
        left: '10%',
        top: '35%',
    },
    {
        title: "Swimming",
        emoji: "🏊‍♂️",
        left: '35%',
        top: '40%',
    },
    {
        title: "Skating",
        emoji: "⛸️",
        left: '70%',
        top: '45%',
    },
    {
        title: "Eating",
        emoji: "😋",
        left: '5%',
        top: '65%',
    },
    {
        title: "Money",
        emoji: "💵",
        left: '45%',
        top: '70%',
    },


]




const AboutSection = () => {

    const containerRef = useRef(null);
    const hobbyContainer = useRef(null);

    return (
        <div id="About" className="py-20 lg:py-28 overflow-x-clip"  >
            <div ref={containerRef} className="container">
                <SectionHeader title="About Me" section="A Glimpse into My World" des="Learn more about who I am, what I do and what inspired me" ref={containerRef} sec={0.15} />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <CardComponent className="h-[320px] md:col-span-2 lg:col-span-1" left={true}>
                            <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <Image src={bookImage} alt="Book Cover" />
                            </div>
                        </CardComponent>
                        <CardComponent className="h-[320px]  md:col-span-3 lg:col-span-2"left={false}>
                            <CardHeader title="My Toolbox" description="Explore the technologies and tools i use to craft exceptional digital experiences."  />
                            <ToolBoxComponent toolBox={toolBox} left={true}/>
                            <ToolBoxComponent toolBox={toolBox} className="mt-6" left={false}/>
                        </CardComponent>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
                    <CardComponent className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2" left={true}>
                        <CardHeader title="Beyond The Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6" />
                        <div ref={hobbyContainer} className="relative flex-1">
                            {hobbies.map(hobby => (
                                <motion.div key={hobby.title} className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" style={{ left: hobby.left, top: hobby.top }} drag dragConstraints = {hobbyContainer}>
                                    <span>{hobby.emoji}</span>
                                    <span className="font-medium text-gray-950">{hobby.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </CardComponent>
                    <CardComponent className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1" left={false}>
                        <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                            <Image src={meEmoji} alt="smiling memoji" className="size-20" />
                        </div>
                    </CardComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection