"use client";
import memojiImage from "../../assets/images/memoji-computer.png";
import Image from "next/image";
import grainImage from "../../assets/images/grain.jpg"
import { motion } from "framer-motion";
import HeroRing from "./HeroRing";
import HeroStar from "./HeroStar";
import ExploreButton from "./ExploreButton";
import ConnectButton from "./ConnectButton";


const Hero = () => {


    const parentVariants = {
        "hidden": { opacity: 1 },
        "visible": {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    }

    const childVariants = {
        "hidden": {
            scale : 0,
            opacity: 0,
            y: "95%"
        },
        "visible": {
            scale: [0,1],
            opacity: [0,1],
            y: ["95%" , "0%"],
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            }
        }
    }

    const animatedString = "Available for new projects".split("");

    return (
        <motion.div id="Home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip md:-mt-12 lg:-mt-14" variants={parentVariants} initial="hidden" animate="visible" >
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div className="absolute inset-0 -z-30 opacity-5" style={{
                    background: `url(${grainImage.src})`
                }} ></div>
                <HeroRing/>
                <HeroStar/>
            </div>
            <div className="container">
                <motion.div className="flex flex-col items-center" variants={childVariants}  >
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale : 0,
                            y: "15%"
                        }}
                        animate={{
                            scale : [0,1],
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 1.3,
                        }}
                    >
                        <Image src={memojiImage} alt="person peeking from behind the laptop" className="size-[115px]" />
                    </motion.div>
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                        <motion.div
                            initial={{
                                backgroundColor: "#79D7BE"
                            }}

                            animate={{
                                backgroundColor: ["#640D5F", "#D2FF72"]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "linear"
                            }}
                            className="bg-green-500 size-2.5 rounded-full" ></motion.div>
                        <div className="text-sm font-medium">
                            {animatedString.map((letter, index) => (
                                <motion.span
                                    className="inline-block"
                                    key={index}
                                    initial={{ y  : "-20%" , opacity : 0}}
                                    animate={{y : 0 , opacity : 1}}
                                    transition={{ duration: 0.4, delay: index * 0.1 , repeat : Infinity , repeatDelay : 6 , ease : "linear" }}
                                >
                                    {letter === " " ? "\u00A0" : letter} 
                                </motion.span>
                            ))}
                        </div>

                    </div>
                </motion.div>
                <div className="max-w-lg mx-auto">
                    <motion.h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide" variants={childVariants}>Building Exceptional User Experiences</motion.h1>
                    <motion.p className="mt-4 text-center text-white/60 md:text-lg" variants={childVariants}  >Crafting Web Experiences That Just Feel Right.</motion.p>
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale : 0,
                        y: "-95%"
                    }}
                    animate={{
                        opacity: [0,1],
                        y: ["-95%" , "0%"],
                        scale:[0,1],
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 1.3,
                    }}

                    className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4"  >
                    <ExploreButton/>
                    <ConnectButton/>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Hero