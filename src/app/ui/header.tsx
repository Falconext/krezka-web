import Image from "next/image";
import fnlogo from '@/app/public/assets/fnlogo.png';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import useIsMobile from "../hooks/useIsMobile";
import { Icon } from "@iconify/react";
import { motion } from 'framer-motion';
import { Sun, Moon, Menu } from 'lucide-react';

const Header = () => {
    const isMobile = useIsMobile();
    const router = useRouter();
    const pathname = usePathname();
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // ALWAYS use time-based logic on mount (ignoring saved preference for initial load)
        const hour = new Date().getHours();
        const isDay = hour >= 6 && hour < 19; // 6 AM to 7 PM

        if (isDay) {
            setTheme('light');
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            setTheme('dark');
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const navLinks = [
        { to: 'home', label: 'Home' },
        // { to: 'hotel', label: 'Hotel', isRoute: true },
        { to: 'service', label: 'Servicios' },
        { to: 'price', label: 'Precios' },
        { to: 'resellers', label: 'Resellers', isRoute: true },
        { to: 'projects', label: 'Proyectos' },
        { to: 'questions', label: 'Preguntas' },
    ];

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-6"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg transition-colors duration-300">

                    {/* Logo */}
                    <div
                        onClick={() => router.push('/')}
                        className="flex items-center gap-2 cursor-pointer group hover:opacity-80 transition-opacity"
                    >
                        <div className="w-8 h-8">
                            <Image src={fnlogo} width={40} height={40} alt="Falconext Logo" className="" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">Falconext</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                        {navLinks.map((link, index) => (
                            <div key={index} className="relative">
                                {(link as any).isRoute ? (
                                    <button
                                        onClick={() => router.push(`/${link.to}`)}
                                        className={`cursor-pointer hover:text-[#5A0EBB] dark:hover:text-white transition-colors ${pathname === '/' + link.to ? "text-[#5A0EBB] dark:text-white font-semibold" : ""}`}
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
                                            activeClass="text-[#5A0EBB] dark:text-white font-semibold"
                                            className="cursor-pointer hover:text-[#5A0EBB] dark:hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </ScrollLink>
                                    ) : (
                                        <button
                                            onClick={() => router.push(`/#${link.to}`)}
                                            className="cursor-pointer hover:text-[#5A0EBB] dark:hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </button>
                                    )
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Theme Toggle - HIDDEN AS REQUESTED */}
                        {/* 
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button> 
                        */}

                        <a
                            href="https://app.falconext.pe"
                            className="hidden md:block cursor-pointer px-5 py-2 text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                        >
                            Iniciar Sesión
                        </a>

                        <ScrollLink
                            to={"contact"}
                            duration={500}
                            spy={true}
                            offset={-80}
                            className="hidden md:block cursor-pointer px-5 py-2 text-sm font-medium bg-[#0E0E0E] text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg shadow-purple-500/10 dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                        >
                            Empezar
                        </ScrollLink>

                        <button className="xl:hidden text-gray-700 dark:text-white p-1">
                            <Icon icon="lucide:menu" width="24" height="24" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;