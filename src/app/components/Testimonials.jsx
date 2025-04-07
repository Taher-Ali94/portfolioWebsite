"use client";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grainImage from "../../assets/images/grain.jpg";
import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";

import Image from "next/image";
import SectionHeader from "./SectionHeader";


const variants = {
    "hidden": {
        opacity: 0,
        y: "180",
    },

    "visible": {
        opacity: [0, 1],
        y: ["180%", "0%"],
        transition: {
            duration: 0.5,
            delay: 0.2,
            ease: "easeInOut"
        }
    },
}

const cardVariants = {
    "hidden": {
        opacity: 0,
    },

    "visible": {
        opacity: [0, 1],
        transition: {
            duration: 0.5,
            delay: 0.4,
            ease: "easeInOut"
        }
    }
}



const testimonials = [
    {
        name: "Murtaza Bohra",
        position: "Accounts Executive, Shipco IT",
        text: "I’ve worked with Taher on multiple projects, including building a robot, and each time I’ve been impressed by his energy, creativity, and problem-solving mindset. He’s dedicated, sharp, and always brings value to the team. A great teammate and someone I’d happily collaborate with again.",
        avatar: memojiAvatar1,
    },
    {
        name: "Arjun Tamhane",
        position: "Student at MIT",
        text: "Taher was my teammate for a college hackathon. Though it was his first, he showed incredible dedication and drive. He made fewer mistakes with time, learned quickly, and helped us reach the top 10 teams. His energy and commitment made a big impact on our performance.",
        avatar: memojiAvatar2,
    },
    {
        name: "Arnav",
        position: "Student at MIT",
        text: "Taher is like a raccoon in human form—brilliant, chaotic, and somehow always ahead. He brings unmatched energy, gets distracted hilariously often, yet delivers when it counts. Working with him is unpredictable but always productive. An absolute wildcard—in the best way.",
        avatar: memojiAvatar3,
    },
    {
        name: "Shrikant Bandawala",
        position: "Student at MIT",
        text: "Taher blends full stack expertise with a sharp eye for UI/UX. Despite being a student, he works with maturity and professionalism. From design to deployment, his consistency and passion shine through. I'd confidently recommend him for any tech project.",
        avatar: memojiAvatar4,
    },
    {
        name: "Allokik Mishra",
        position: "Student at MIT",
        text: "Taher is a dedicated and insightful collaborator. He faces challenges with positivity and always offers practical solutions. Working with him is smooth, professional, and productive. Truly a joy to team up with on any project.",
        avatar: memojiAvatar5,
    },
    {
        name: "Sanskar Borse",
        position: "Student at MIT",
        text: "Taher brings skill, focus, and adaptability to every project. His communication is clear and his work consistently high-quality. He handles pressure well and uplifts team spirit. A dependable developer I’d work with again anytime.",
        avatar: memojiAvatar1,
    },
];





const Testimonials = () => {
    const containerRef = useRef(null);
    const containerRef2 = useRef(null);
    const cardInView = useInView(containerRef2, { once: true })
    return (
        <div className="py-16 lg:py-24">
            <div ref={containerRef} className="container">
                <SectionHeader title="Happy Clients" section="What Clients Say About Me" des="Don`t just take my word for it, See what my clients have to say about my work" ref={containerRef} sec={0.22} />
                <div className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div ref={containerRef2} className="flex flex-none gap-8 animate-move-left hover:[animation-play-state:paused]"  >
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {testimonials.map(testimonial => (
                                    <motion.div key={testimonial.name} className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden max-w-xs md:p-8 md:max-w-md hover:-rotate-5 transition duration-300" variants={cardVariants} initial="hidden" animate={cardInView ? "visible" : ""}>
                                        <div className="absolute inset-0 -z-10 opacity-5" style={{
                                            backgroundImage: `url(${grainImage.src})`
                                        }}></div>
                                        <div className="flex gap-4 items-center">
                                            <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                                                <Image className="max-h-full" src={testimonial.avatar} alt={testimonial.name} />
                                            </div>
                                            <div>
                                                <div className="text-semibold">{testimonial.name}</div>
                                                <div className="text-sm text-white/40">{testimonial.position}</div>
                                            </div>
                                        </div>
                                        <p className="text-sm mt-4 md:text-base md:mt-6">{testimonial.text}</p>
                                    </motion.div>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials