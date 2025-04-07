import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";

const ConnectButton = () => {
    const controls = useAnimationControls();
    const variants = {
        "hidden": {
            rotate: 0,
            scale: [1.2, 1],
            transition: {
                ease: "linear",
            }
        },
        "visible": {
            rotate: [0, -30, 0],
            scale: [1, 1.2],
            transition: {
                duration: 0.6,
                ease: "linear",
            }
        }
    }
    function handleHover() {
        controls.start("visible");
        setTimeout(() => {
            controls.start("hidden");
        }, 650);
    }
    return (
        <motion.button whileTap={{ scale: 0.9 }} onMouseEnter={handleHover} className="inline-flex items-center justify-center border border-white bg-white text-gray-900 px-6 h-12 rounded-xl z-10" >
            <Link href="mailto:mindjobs994@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <motion.span animate={controls} variants={variants} >👋</motion.span>
                <span className="font-semibold">Let`s Connect</span>
            </Link>
        </motion.button>
    )
}

export default ConnectButton