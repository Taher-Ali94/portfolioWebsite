import grainImage from "../../assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
import {motion , useInView} from "framer-motion";
import { useRef } from "react";





const CardComponent = ({ className, children , left }) => {

  const variants = {
    "hidden" : {
      opacity : 0,
      x : left?"-95%":"95%",
    },
    "visible" : {
      opacity : [0,1],
      x : left?["-95%" , "0%"]:["95%" , "0%"],
      transition : {
        duration : 0.5,
        delay : 0.2,
        ease : "easeInOut",
      } 
    }
  }

  const containerRef = useRef(null);
  const inView = useInView(containerRef , {once : true})

  return (
    <motion.div
      ref={containerRef}
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none ",
        className
      )}
      variants={variants}
      initial = "hidden"
      animate = {inView?"visible" : ""}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children} 
    </motion.div>
  );
};

export default CardComponent;
