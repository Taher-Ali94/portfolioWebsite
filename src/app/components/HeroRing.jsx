"use client";
import { motion } from "framer-motion";

const parentVariant = {
    "hidden" : {
        opacity : 0,
    },
    "visible" : {
        opacity : 1,
        transition : {
            staggerChildren : 0.3,
            delayChildren : 2,
        }
    }
}

const childVaraint = {
    "hidden" : {
        opacity : 0,
    },
    "visible" : {
        opacity : 1,
        transition : {
            duration : 0.3,
            type : "string",
            mass : 0.5,
            stiffness : 10,
        }
    }
}

const HeroRing = () => {
    return (
        <motion.div className="absolute inset-0" variants={parentVariant} initial = "hidden" animate = "visible">
            <motion.div className="hero-ring" variants={childVaraint}></motion.div>
            <motion.div className="hero-ring size-[820px] "variants={childVaraint} ></motion.div>
            <motion.div className="hero-ring size-[1020] " variants={childVaraint}></motion.div>
            <motion.div className="hero-ring size-[1220]" variants={childVaraint}></motion.div>
        </motion.div>
    )
}

export default HeroRing