'use client';

import { motion } from 'framer-motion';
import { Menu, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import fnlogo from '@/app/public/assets/fnlogo.png';
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
                if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            } else {
                // Default to dark
                document.documentElement.classList.add('dark');
            }
        }
    }, []);
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-lg transition-colors duration-300">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <Image src={fnlogo} alt="Falconext Logo" width={32} height={32} className="w-8 h-8" />
                        <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white transition-colors">Falconext</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
                        <ScrollLink
                            to="features"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                        >
                            Características
                        </ScrollLink>
                        <ScrollLink
                            to="bento"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                        >
                            Soluciones
                        </ScrollLink>
                        <ScrollLink
                            to="pricing"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                        >
                            Precios
                        </ScrollLink>
                        <ScrollLink
                            to="questions"
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                        >
                            Preguntas
                        </ScrollLink>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                const newTheme = theme === 'dark' ? 'light' : 'dark';
                                setTheme(newTheme);
                                if (newTheme === 'dark') {
                                    document.documentElement.classList.add('dark');
                                    localStorage.setItem('theme', 'dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                    localStorage.setItem('theme', 'light');
                                }
                            }}
                            className="p-2 rounded-full text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button className="hidden md:block px-5 py-2 text-sm font-medium text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors">
                            Iniciar Sesión
                        </button>
                        <button className="px-5 py-2 text-sm font-medium bg-gray-900 text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-lg shadow-purple-500/10 dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            Empezar
                        </button>
                        <button className="md:hidden text-gray-900 dark:text-white/70">
                            <Menu />
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
