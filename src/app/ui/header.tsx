'use client';

import Image from "next/image";
import fnlogo from '../../../public/assets/logo.png';
import fnlogoWhite from '../../../public/assets/logowhite.png';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, MessageCircle, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import CartDrawer from './CartDrawer';

type NavItem = {
  label: string;
  to: string;
  isRoute?: boolean;
};

type NavGroup = {
  label: string;
  items?: NavItem[];
  direct?: true;
  href?: string;
};

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Inicio',
    direct: true,
    href: '/',
  },
  {
    label: 'Catálogo',
    direct: true,
    href: '/tienda',
  },
  // {
  //   label: 'Quiénes Somos',
  //   direct: true,
  //   href: '/nosotros',
  // },
  {
    label: 'Facturación',
    direct: true,
    href: '/sistemas',
  },
  {
    label: 'Resellers',
    direct: true,
    href: '/resellers',
  },
  {
    label: 'Contacto',
    direct: true,
    href: '/contacto',
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.12, ease: 'easeIn' },
  },
};

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const { getTotalItems, openCart } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', 'light');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenGroup(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNavItem = useCallback(
    (item: NavItem) => {
      setOpenGroup(null);
      setMobileOpen(false);
      if (item.isRoute) {
        router.push(`/${item.to}`);
      } else {
        router.push(`/#${item.to}`);
      }
    },
    [router],
  );

  const isHome = pathname === '/';
  const isTransparent = isHome && !scrolled;

  // Dynamic class generators based on state
  const pillBgClass = isTransparent
    ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-none"
    : "bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-lg shadow-slate-200/20";

  const textClass = isTransparent ? "text-white" : "text-slate-600";
  const hoverTextClass = isTransparent ? "hover:text-white/80" : "hover:text-slate-900";
  const hoverBgClass = isTransparent ? "hover:bg-white/10" : "hover:bg-slate-100";
  const logoTextClass = isTransparent ? "text-white group-hover:text-white/80" : "text-slate-900 group-hover:text-slate-600";
  const loginTextClass = isTransparent ? "text-white hover:bg-white/10" : "text-gray-700 hover:bg-gray-100";
  const ctaBtnClass = isTransparent
    ? "bg-[#634EE1] text-white hover:bg-[#5240c9] shadow-lg shadow-purple-500/20"
    : "bg-[#0E0E0E] text-white hover:bg-gray-800 shadow-lg shadow-purple-500/10";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-6">
      <div className="max-w-7xl mx-auto" ref={navRef}>
        {/* Navbar pill */}
        <div className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${pillBgClass}`}>

          {/* Logo */}
          <div
            onClick={() => router.push('/')}
            className="flex items-center gap-2 cursor-pointer group transition-opacity"
          >
            <Image
              src={isTransparent ? fnlogoWhite : fnlogo}
              width={1000}
              height={1000}
              alt="Falconext Logo"
              className={`w-48 h-14 object-contain transition-all duration-300`}
            />
          </div>

          {/* Desktop nav */}
          <div className={`hidden xl:flex items-center gap-0.5 text-sm font-medium transition-colors duration-300 ${textClass}`}>
            {NAV_GROUPS.map((group) => {
              if (group.direct) {
                const isExternal = group.href?.startsWith('http');
                const isHash = group.href?.startsWith('#');

                if (isHash) {
                  return (
                    <ScrollLink
                      key={group.label}
                      to={group.href!.replace('#', '')}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors cursor-pointer ${hoverTextClass} ${hoverBgClass}`}
                    >
                      {group.label}
                    </ScrollLink>
                  );
                }

                return (
                  <a
                    key={group.label}
                    href={group.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors ${hoverTextClass} ${hoverBgClass}`}
                  >
                    {group.label}
                  </a>
                );
              }

              const isOpen = openGroup === group.label;
              return (
                <div key={group.label} className="relative">
                  <button
                    onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${hoverTextClass} ${hoverBgClass} ${isOpen ? (isTransparent ? 'bg-white/20' : 'bg-slate-100 text-slate-900') : ''
                      }`}
                  >
                    {group.label}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="inline-flex"
                    >
                      <ChevronDown size={14} strokeWidth={2.5} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={dropdownVariants as any}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-gray-100 shadow-xl shadow-slate-200/60 py-1.5"
                      >
                        {group.items!.map((item) => (
                          <button
                            key={item.to}
                            onClick={() => handleNavItem(item)}
                            className={`w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors ${pathname === `/${item.to}`
                              ? 'text-[#5A0EBB] font-semibold bg-purple-50/60'
                              : 'text-slate-600'
                              }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCart}
              className={`relative p-2.5 rounded-full transition-colors ${isTransparent ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'}`}
              aria-label="Abrir carrito"
            >
              <ShoppingBag size={20} strokeWidth={2.5} />
              {mounted && getTotalItems() > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 flex items-center justify-center bg-red-500 text-white text-[9px] font-bold rounded-full shadow-sm">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <a
              href="https://app.falconext.pe"
              className={`hidden md:block px-5 py-2 text-sm font-medium rounded-full transition-colors ${loginTextClass}`}
            >
              Iniciar Sesión
            </a>
            <button
              onClick={() => router.push('/contacto')}
              className={`hidden md:block cursor-pointer px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${ctaBtnClass}`}
            >
              Empezar
            </button>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`xl:hidden p-1 transition-colors ${isTransparent ? 'text-white' : 'text-slate-700'}`}
              aria-label="Menú"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto', transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.18, ease: 'easeIn' } }}
              className="xl:hidden mt-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-3 space-y-0.5">
                {NAV_GROUPS.map((group) => {
                  if (group.direct) {
                    return (
                      <a
                        key={group.label}
                        href={group.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        <MessageCircle size={15} className="text-green-500" />
                        {group.label}
                      </a>
                    );
                  }

                  const isGroupOpen = openMobileGroup === group.label;
                  return (
                    <div key={group.label}>
                      <button
                        onClick={() => setOpenMobileGroup(isGroupOpen ? null : group.label)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg transition-colors"
                      >
                        {group.label}
                        <motion.span
                          animate={{ rotate: isGroupOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-flex text-slate-500"
                        >
                          <ChevronDown size={15} strokeWidth={2.5} />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {isGroupOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1, transition: { duration: 0.2 } }}
                            exit={{ height: 0, opacity: 0, transition: { duration: 0.15 } }}
                            className="overflow-hidden pl-3"
                          >
                            {group.items!.map((item) => (
                              <button
                                key={item.to}
                                onClick={() => handleNavItem(item)}
                                className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${pathname === `/${item.to}`
                                  ? 'text-[#5A0EBB] font-medium'
                                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                  }`}
                              >
                                {item.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <div className="pt-2 pb-1 border-t border-gray-100 flex flex-col gap-2">
                  <a
                    href="https://app.falconext.pe"
                    className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
                  >
                    Iniciar Sesión
                  </a>
                  <button
                    onClick={() => { setMobileOpen(false); router.push('/contacto'); }}
                    className="px-5 py-2.5 text-sm font-medium bg-[#0E0E0E] text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Empezar
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Drawer del Carrito Global */}
      <CartDrawer />
    </nav>
  );
};

export default Header;
