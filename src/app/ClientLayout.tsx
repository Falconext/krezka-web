"use client";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { useEffect, useState } from "react";
import { IThemeState, useThemeStore } from "./zustand/theme";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import Alert from "./components/Alert";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

    const { getTheme }: IThemeState = useThemeStore();
    const [isToggleOn, setIsToggleOn] = useState(true);

    const pathname = usePathname()

    useEffect(() => {
        // Time-based default logic (ignoring localStorage for initial load)
        const hour = new Date().getHours();
        const initialLight = hour >= 6 && hour < 19; // 6 AM to 7 PM
        setIsToggleOn(initialLight);
    }, []);
    useEffect(() => {
        if (isToggleOn) {
            getTheme("sun")
        } else {
            getTheme("moon")
        }
    }, [isToggleOn])

    const handleToggleChange = () => {
        setIsToggleOn(!isToggleOn);
    };

    const hide = ['/iniciar-sesion', '/administrador', '/brochure', '/hotel']
    const isMypeRoute = hide.some(route => pathname.startsWith(route))

    if (isMypeRoute) {
        // para /login, /administrador y sus subrutas
        return <>{children}</>
    }

    return (
        <div>
            <Alert />
            <div className="fixed right-5 bottom-5 z-50 md:right-10 md:bottom-10 cursor-pointer ">
                <a
                    href="https://wa.me/51991065217?text=Hola%20quiero%20más%20información%20sobre%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="logos:whatsapp-icon" className="" width="56" height="56" />
                </a>
            </div>

            <Header />
            {children}
            <Footer />
        </div>
    );
}