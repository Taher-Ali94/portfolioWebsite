"use client";
import HeroOrbit from "./HeroOrbit";
import { PiStarFourDuotone } from "react-icons/pi";
import {motion} from "framer-motion"

const dimensions = [
    { size: 800, rotate: -72, starSize: 16 },
    { size: 550, rotate: 20, starSize: 12 },
    { size: 590, rotate: 98, starSize: 8 },
    { size: 430, rotate: -14, starSize: 8 },
    { size: 440, rotate: 79, starSize: 5 },
    { size: 530, rotate: 178, starSize: 10 },
    { size: 710, rotate: 44, starSize: 14 },
    { size: 720, rotate: 85, starSize: 3 },
    { size: 520, rotate: -41, starSize: 2 },
    { size: 650, rotate: -5, starSize: 2 },
    { size: 690, rotate: -10, starSize: 6 },
    { size: 480, rotate: -55, starSize: 12 },
    { size: 770, rotate: 98, starSize: 14 },
    { size: 590, rotate: 79, starSize: 2 },
];

const HeroStar = () => {
    return (
        <div className="absolute inset-0">
            {dimensions.map(({ size, rotate, starSize }, index) => (
                <HeroOrbit key={index} size={size} rotate={rotate}>
                    <motion.div
                    initial = {{opacity : 0}}
                    animate = {{opacity : [0,1] , scale : [0.9 , 1]}}
                    transition={{duration : 1.5 , delay :2.5 + 2 * index , repeat : Infinity , repeatType : "reverse" , repeatDelay : 1}}
                    >
                        <PiStarFourDuotone className={`size-${starSize} text-emerald-300`} />
                    </motion.div>
                </HeroOrbit>
            ))}
        </div>
    );
};

export default HeroStar;
