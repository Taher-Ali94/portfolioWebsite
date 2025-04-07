"use client";
import { MdOutlineArrowOutward } from "react-icons/md";
import grainImage from "../../assets/images/grain.jpg";
import {motion} from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: {
    y: 0,
    scale : 1
  },
  visible: {
    y: [0, -15, 0],
    scale : [1,1.05,1],
    transition: {
      duration: 0.6,          
      repeat: Infinity,
      repeatDelay: 3,         
      ease: "easeInOut",      
    },
  },
};


const ContactSection = () => {
  return (
    <div id="Contact" className="relative py-16 lg:py-24 lg:pt-20 pt-14 overflow-x-clip">
      <motion.div className="container" variants={variants} initial = "hidden" animate = "visible">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl md:text-left text-center relative">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Lets create something amazing together</h2>
              <p className="text-sm mt-2 md:text-base">Ready to bring your next project to life? let`s connect and discuss how i can help you achieve your goals.</p>
            </div>
            <div>
              <button className="bg-gray-900 z-20 text-white inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"><Link href="mailto:mindjobs994@gmail.com" rel="noopener noreferrer" className="font-semibold">Contact Me</Link> <MdOutlineArrowOutward className="size-4" /></button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactSection