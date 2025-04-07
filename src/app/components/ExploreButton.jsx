"use client";
import { motion, useAnimationControls } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";
import Link from "next/link";

const ExploreButton = () => {
    const controls = useAnimationControls();
    const variants = {
        "hidden": {
            opacity: [0, 1],
            y: ["-95%", "0%"]
        },
        "visible": {
            opacity: [1, 0],
            y: ["0%", "95%"],
            transition: {
                duration: 0.3,
                ease: "linear",
            }
        }
    }

    function handleHover() {
        controls.start("visible");
        setTimeout(() => {
            controls.start("hidden");
        }, 350);
    }

    return (

        <motion.button onMouseEnter={handleHover} whileTap={{ scale: 0.9 }} className="inline-flex items-center justify-center border border-white/15 px-6 h-12 rounded-xl z-10">
            <Link href="#Projects" className="inline-flex items-center gap-2">
                <span className="font-semibold">Explore My  Work</span>
                <motion.div variants={variants} animate={controls}>
                    <FaArrowDown />
                </motion.div>
            </Link>
        </motion.button>

    )
}

export default ExploreButton