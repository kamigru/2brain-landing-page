'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark } from 'react-icons/hi2';

import Container from './layout/Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar menú móvil al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    return (
        <header className="bg-transparent sticky top-0 left-0 right-0 z-50 w-full flex justify-center">
            <Container className="!px-0">
                <nav className={`mx-auto flex justify-between items-center py-2 px-5 md:py-6 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/20 backdrop-blur-xl shadow-lg rounded-2xl mx-4 mt-4'
                        : 'shadow-none bg-transparent'
                }`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <svg className={`min-w-fit transition-all duration-300 ${
                            isScrolled ? 'w-6 h-6 md:w-7 md:h-7' : 'w-7 h-7 md:w-8 md:h-8'
                        }`} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="gradLeft" x1="100%" y1="0%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="#00D2FF"/>
                                    <stop offset="100%" stopColor="#3A7BD5"/>
                                </linearGradient>
                                <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#00D2FF"/>
                                    <stop offset="100%" stopColor="#3A7BD5"/>
                                </linearGradient>
                            </defs>
                            <circle cx="110" cy="150" r="70" stroke="url(#gradLeft)" strokeWidth="12" fill="none"/>
                            <circle cx="190" cy="150" r="70" stroke="url(#gradRight)" strokeWidth="12" fill="none"/>
                        </svg>
                        <span className={`font-semibold cursor-pointer transition-all duration-300 text-white ${
                            isScrolled ? 'text-xl md:text-xl' : 'text-xl md:text-2xl'
                        }`}>
                            {siteDetails.siteName}
                        </span>
                    </Link>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className={`header-link relative font-bold text-white transition-all duration-300 ${
                                    isScrolled ? 'text-base' : 'text-base'
                                }`}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className={`text-white bg-primary hover:bg-primary-hover rounded-full transition-all duration-300 font-semibold ${
                                isScrolled ? 'px-7 py-2.5 text-base' : 'px-8 py-3 text-base'
                            }`}>
                                Empieza tu plan
                            </Link>
                        </li>
                    </ul>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className={`bg-primary text-white focus:outline-none rounded-full flex items-center justify-center transition-all duration-300 ${
                                isScrolled ? 'w-10 h-10' : 'w-11 h-11'
                            }`}
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className={`${isScrolled ? 'h-6 w-6' : 'h-7 w-7'}`} aria-hidden="true" style={{ color: '#ffffff' }} />
                            ) : (
                                <svg className={`${isScrolled ? 'h-6 w-6' : 'h-7 w-7'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                </svg>
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>
            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95 translate-y-2"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 scale-100 translate-y-0"
                leaveTo="opacity-0 scale-95 translate-y-2"
            >
                <div
                    id="mobile-menu"
                    className="md:hidden fixed top-16 left-4 right-4 glass-effect-dark shadow-xl rounded-2xl overflow-hidden z-40"
                >
                    <ul className="flex flex-col py-4">
                        {menuItems.map((item, index) => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="font-semibold transition-all duration-200 block px-6 py-3 hover:bg-primary/5 active:bg-primary/10" 
                                    style={{ color: 'var(--text-strong)' }} 
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-hover)'} 
                                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-strong)'} 
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                                {index < menuItems.length - 1 && (
                                    <div className="mx-6 h-px bg-primary/10"></div>
                                )}
                            </li>
                        ))}
                        <li className="px-6 pt-4">
                            <Link 
                                href="#cta" 
                                className="text-white px-6 py-3 rounded-full block text-center font-semibold bg-primary hover:bg-primary-hover transition-all duration-200 shadow-lg" 
                                onClick={toggleMenu}
                            >
                                Empieza tu plan
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
