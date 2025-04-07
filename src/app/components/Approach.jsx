"use client";

import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { CanvasRevealEffect } from "@/app/components/ui/canvas-reveal-effect";
import SectionHeader from "./SectionHeader";

const cardVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: [0, 1],
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: "easeInOut",
    },
  },
};

export default function Approach() {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const cardInView = useInView(containerRef2, { once: true });

  return (
    <div ref={containerRef} className="w-full py-20">
      <SectionHeader
        title="My Approach"
        section="How I Craft Websites"
        des="Designing with purpose, developing with precision, and delivering with impact"
        ref={containerRef}
        sec={0.22}
      />
      <div
        ref={containerRef2}
        className="my-20 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 overflow-x-clip"
      >
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={cardInView ? "visible" : ""}
        >
          <Card
            title="Planning & Strategy"
            icon={<AceternityIcon className="from-[#014737] to-sky-600" order="Phase 1" />}
            description="We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements."
            className="border-[#014737]"
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={cardInView ? "visible" : ""}
        >
          <Card
            title="Development & Progress Update"
            icon={<AceternityIcon className="from-[#4d2852] to-sky-950" order="Phase 2" />}
            description="Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way."
            className="border-[#4d2852]"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={cardInView ? "visible" : ""}
        >
          <Card
            title="Development & Launch"
            icon={<AceternityIcon className="from-[#46788f] to-sky-950" order="Phase 3" />}
            description="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
            className="border-[#46788f]"
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

const Card = ({ title, icon, children, description, className }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(true)}
      className={twMerge(
        "border  bg-gray-900 group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative lg:h-[30rem] rounded-3xl",
        className
      )}
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
        <h2
          className="dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
          style={{ color: "#e4ecff" }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order, className }) => {
    return (
      <p className={twMerge(
        "bg-gradient-to-r  inline-flex font-bold uppercase tracking-widest text-xl gap-2 text-transparent bg-clip-text",
        className
      )}>
        {order}
      </p>
    );
  };
  

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
