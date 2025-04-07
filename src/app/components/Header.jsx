"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const tabs = [
  { id: 1, label: "Home" },
  { id: 2, label: "Projects" },
  { id: 3, label: "About" },
  { id: 4, label: "Contact" },
];

const Header = ({ activeSection }) => {
  const navVariants = {
    hidden: { y: "-95%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, delay: 0.3 },
    },
  };

  return (
    <div className="flex justify-center items-center fixed z-50 left-1/2 -translate-x-1/2 -translate-y-1/2 top-9 w-full">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur"
      >
        {tabs.map((tab) => {
          const isActive = activeSection === tab.label;

          return (
            <Link
              key={tab.id}
              href={`#${tab.label}`}
              className={`relative px-4 py-2 rounded-full transition duration-300 ${
                isActive ? "" : "hover:bg-white/10 hover:text-white"
              }`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              {tab.label}
            </Link>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Header;
