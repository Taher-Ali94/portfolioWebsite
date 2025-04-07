import { MdOutlineArrowOutward } from "react-icons/md";

const footerLinks = [
    {
        title : "Linkedin",
        href : "https://www.linkedin.com/in/tb994"
    },
    {
        title : "Instagram",
        href : "https://www.instagram.com/mindjobss/?next=%2F"
    },
    {
        title : "Mail",
        href : "mailto:mindjobs994@gmail.com"
    }
]

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
        <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
        <div className="container">
            <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
                <div className="text-white/40">&copy; 2025, All rights reserved</div>
                <nav className="flex flex-col md:flex-row items-center gap-8">
                    {footerLinks.map(link => (
                        <div key={link.title}>
                            <a href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5"
                            >
                                <span className="font-semibold">{link.title}</span>
                                <MdOutlineArrowOutward className="size-4"/>
                            </a>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer