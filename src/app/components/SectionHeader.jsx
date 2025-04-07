"use client";
import { motion, useInView } from "framer-motion";



const SectionHeader = ({ title, section, des, ref , sec }) => {

    const variants = {
        "hidden": {
            opacity: "15%",
            y: "180%",
        },
    
        "visible": {
            opacity: ["15%", "100%"],
            y: ["180%", "0%"],
            transition: {
                duration: 0.3,
                delay: sec,
                ease: "easeInOut"
            }
        }
    }

    const inView = useInView(ref, { once: true });

    return (
        <div>
            <div className="flex justify-center">
            <motion.p className="uppercase font-semibold -tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text" variants={variants} initial="hidden" animate={inView ? "visible" : ""} >{title}</motion.p>
        </div>
            <motion.h2 className="font-serif text-3xl md:text-5xl mt-6 text-center" variants={variants} initial="hidden" animate={inView ? "visible" : ""}>{section}</motion.h2>
            <motion.p className="text-center text-white/60 md:text-lg lg:text-xl mt-4 max-w-md mx-auto" variants={variants} initial="hidden" animate={inView ? "visible" : ""}>{des}</motion.p>
            </div>
    )
}

export default SectionHeader