"use client";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";

const ToolBoxComponent = ({ toolBox, className ,left }) => {
    const varaints = {
        "hidden": {
            x: left? "0%":"100%"
        },
        "visible": {
            x: left? ["0%","-50%"] : ["-50%" , "0%"],
            transition: {
                duration:  20,
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    }
    return (
        <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
            <motion.div className="flex flex-none gap-6 py-0.5" variants={varaints} initial="hidden" animate="visible">
                {[...new Array(2)].fill(0).map((_, idx) => (
                    <Fragment key={idx}>
                        {toolBox.map((tool) => (
                            <div key={tool.title} className="inline-flex items-center gap-4 py-2 px-3 outline-2 outline-white/10 rounded-lg">
                                <TechIcon component={tool.iconType} />
                                <span className="font-semibold">{tool.title}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </motion.div>
        </div>
    )
}

export default ToolBoxComponent