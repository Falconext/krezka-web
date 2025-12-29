import Image from "next/image";
import logowhite from '@/app/public/assets/fnlogo.png';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import useIsMobile from "../hooks/useIsMobile";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const isMobile = useIsMobile();
    const router = useRouter();
    const pathname = usePathname();

    // Función para manejar el evento de scroll
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'hotel', label: 'Hotel', isRoute: true },
        { to: 'service', label: 'Servicios' },
        { to: 'price', label: 'Precios' },
        { to: 'projects', label: 'Proyectos' },
        { to: 'questions', label: 'Preguntas' },
    ];

    // Estilo DARK FIXED (Glassmorphism)
    const headerClasses = isScrolled
        ? "bg-[#0E0E0E]/80 backdrop-blur-xl border-b border-white/10 shadow-lg py-3"
        : "bg-transparent py-5";

    // Contenedor principal
    const containerClasses = "max-w-7xl mx-auto px-6 flex justify-between items-center";

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
        >
            <div className={containerClasses}>
                {/* Logo */}
                <div
                    onClick={() => router.push('/')}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5A0EBB] to-[#8A38F5] p-0.5 flex items-center justify-center">
                        <Image src={logowhite} width={20} height={20} alt="Falconext Logo" className="brightness-200" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white group-hover:text-gray-300 transition-colors">Falconext</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-1 rounded-full bg-white/5 border border-white/5 px-2 py-1 backdrop-blur-sm">
                    {navLinks.map((link, index) => (
                        <div key={index} className="relative">
                            {link.isRoute ? (
                                <button
                                    onClick={() => router.push(`/${link.to}`)}
                                    className={`cursor-pointer px-4 py-2 rounded-full text-sm hover:text-white hover:bg-white/5 transition-all block ${pathname === '/' + link.to ? "text-white bg-white/10 font-medium" : "text-gray-300"}`}
                                >
                                    {link.label}
                                </button>
                            ) : (
                                pathname === '/' ? (
                                    <ScrollLink
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        offset={-100}
                                        activeClass="text-white bg-white/10 font-medium"
                                        className="cursor-pointer px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all block"
                                    >
                                        {link.label}
                                    </ScrollLink>
                                ) : (
                                    <button
                                        onClick={() => router.push(`/#${link.to}`)}
                                        className="cursor-pointer px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all block"
                                    >
                                        {link.label}
                                    </button>
                                )
                            )}
                        </div>
                    ))}
                </div>

                {/* Actions (Solo Contacto, sin Toggle Tema) */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://app.falconext.pe"
                        className="hidden md:block cursor-pointer px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                    >
                        Ingresar
                    </a>
                    <ScrollLink
                        to={"contact"}
                        duration={500}
                        spy={true}
                        offset={-80}
                        className="hidden md:block cursor-pointer px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    >
                        Contáctanos
                    </ScrollLink>

                    <button className="xl:hidden text-white">
                        <Icon icon="lucide:menu" width="24" height="24" />
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}

export default Header;