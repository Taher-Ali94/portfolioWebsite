"use client";
import nextpitch from "@/assets/images/nextpitch.png";
import maqnews from "@/assets/images/maqnews.png";
import blogsite from "@/assets/images/blogsite.png";
import context_bridge from "@/assets/images/context_bridge.png";
import yapapp from "@/assets/images/yapapp.png";
import Card from "./Card";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";


const portfolioProjects = [
    {
        company: "NextPitch",
        year: "2024",
        title: "Startup Pitching Web Platform",
        results: [
            { title: "Helps users craft compelling startup pitches" },
            { title: "Streamlined UX with dynamic pitch templates" },
            { title: "Built with Next.js and styled using Tailwind CSS" },
        ],
        link: "https://github.com/MindJOBSS/NextPitch",
        image: nextpitch,
    },
    {
        company: "MaqNews",
        year: "2025",
        title: "AI-Powered Personalized News Aggregator",
        results: [
            { title: "Curates real-time news based on user interests" },
            { title: "Manages data efficiently with PostgreSQL" },
            { title: "Built with Next.js, Tailwind CSS, and DaisyUI" },
        ],
        link: "https://github.com/MindJOBSS/maqnews", 
        image: maqnews,
    },
    {
        company: "Context Bridge",
        year: "2026",
        title: "Cross-LLM Context Transfer Tool",
        results: [
            { title: "Converts AI chats into portable context summaries" },
            { title: "Preserves goals, facts, preferences, and progress" },
            { title: "Uses Gemini Nano with browser-compatible fallback" },
        ],
        link: "https://context-bridge-tau.vercel.app",
        image: context_bridge,
    },
    {
        company: "YapApp",
        year: "2026",
        title: "Real-Time Chat Application",
        results: [
            { title: "Built real-time messaging with Socket.IO and Pusher" },
            { title: "Implemented secure authentication with JWT and Auth.js" },
            { title: "Optimized scalability using Next.js and Redis" },
        ],
        link: "https://yapapp-next.vercel.app/login",
        image: yapapp,
    },
    {
        company: "BlogSite",
        year: "2023",
        title: "Minimalist Blogging Platform",
        results: [
            { title: "Supports seamless content creation and publishing" },
            { title: "Clean UI built with Tailwind CSS and DaisyUI" },
            { title: "Markdown support and fast content rendering" },
        ],
        link: "https://github.com/MindJOBSS/BlogSite", 
        image: blogsite, 
    },
];



const ProjectsSection = () => {

    const containerRef = useRef(null);

    return (
        <div id="Projects" className="pb-16 lg:py-24 rela z-20">
            <div ref={containerRef} className="container">
                <SectionHeader title="Real-world Projects" section="Featured Projects" des="See how i transformed concepts into engaging digital experiences" ref={containerRef} sec={0.15} />
                <div className="flex flex-col mt-10 md:mt-25 gap-20">
                    {portfolioProjects.map((project, index) => (
                        <Card project={project} key={project.title} i={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection