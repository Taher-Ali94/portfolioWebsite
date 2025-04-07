"use client";
import { PiStarFourFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { Fragment } from "react";

const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
]

const varaints = {
    "hidden": {
        x: 0
    },
    "visible": {
        x: ["0%","-50%"],
        transition: {
            duration:  25,
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
}

const TapeSection = () => {
    return (
        <div className="py-16 lg:py-24 overflow-x-clip">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div className="flex flex-none gap-4 py-3" variants={varaints} initial="hidden" animate="visible">
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {words.map(word => {
                                    return (
                                        <div key={word} className="inline-flex gap-4 intems-center">
                                            <span className="text-gray-900 uppercase text-sm font-extrabold">{word}</span>
                                            <PiStarFourFill className="size-6 text-gray-900 -rotate-12" />
                                        </div>
                                    )
                                })}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default TapeSection