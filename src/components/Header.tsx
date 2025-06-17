'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaBox } from 'react-icons/fa';

import Container from './Container';
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

    return (
        <header className="bg-transparent sticky top-0 left-0 right-0 z-50 w-full flex justify-center">
            <Container className="!px-0">
                <nav className={`mx-auto flex justify-between items-center transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl mx-4 mt-4 border border-white/30 py-2 px-4 md:py-4' 
                        : 'shadow-none bg-transparent py-2 px-5 md:py-6'
                }`}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <FaBox className={`text-foreground min-w-fit transition-all duration-300 ${
                            isScrolled ? 'w-6 h-6' : 'w-7 h-7'
                        }`} />
                        <span className={`font-semibold text-foreground cursor-pointer transition-all duration-300 ${
                            isScrolled ? 'text-xl' : 'text-xl'
                        }`}>
                            {siteDetails.siteName}
                        </span>
                    </Link>
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className={`font-bold hover:scale-105 transition-all duration-300 ${
                                    isScrolled ? 'text-base' : 'text-base'
                                }`} style={{ color: 'var(--primary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}>
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
                            className="bg-primary text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" style={{ color: '#ffffff' }} />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" style={{ color: '#ffffff' }} />
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
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg rounded-xl mt-2 mx-4">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="font-bold hover:scale-105 transition-all duration-300 block" style={{ color: 'var(--primary)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'} onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className="text-white bg-primary hover:bg-primary-hover px-5 py-2 rounded-full block w-fit font-semibold" onClick={toggleMenu}>
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
