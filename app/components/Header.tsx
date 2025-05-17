'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md text-dark-800 shadow-floating py-3'
        : 'bg-transparent text-white py-5'
        }`}
    >
      <div className="container-wide flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="group flex items-center">
            <div className="relative w-10 h-10 mr-3 overflow-hidden">
              <Image
                src="/images/logo.svg"
                alt="Estradeirando Logo"
                width={40}
                height={40}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div>
              <span className="font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:text-accent-500 transition duration-300">
                Estradeirando
              </span>
              <p className={`text-xs md:text-sm ${isScrolled ? 'text-dark-500' : 'text-white/80'}`}>
                Aventuras e histórias pelo mundo
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink href="/" label="Home" isScrolled={isScrolled} />
          <NavLink href="/albums" label="Álbuns" isScrolled={isScrolled} />
          <NavLink href="/sobre" label="Sobre" isScrolled={isScrolled} />
          <NavLink href="/tags" label="Tags" isScrolled={isScrolled} />

          <div className="ml-4 pl-4 border-l border-gray-200">
            <Link
              href="/contato"
              className={`btn btn-sm ${isScrolled
                ? 'btn-primary'
                : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                }`}
            >
              Contato
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 rounded-lg ${isScrolled
            ? 'text-dark-800 hover:bg-gray-100'
            : 'text-white hover:bg-white/10'
            } transition-colors duration-300`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white text-dark-800 shadow-lg absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
          }`}
      >
        <nav className="container mx-auto px-4 flex flex-col space-y-4">
          <MobileNavLink href="/" label="Home" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/albums" label="Álbuns" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/sobre" label="Sobre" onClick={() => setIsMobileMenuOpen(false)} />
          <MobileNavLink href="/tags" label="Tags" onClick={() => setIsMobileMenuOpen(false)} />

          <div className="pt-4 mt-4 border-t border-gray-100">
            <Link
              href="/contato"
              className="btn btn-primary w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

// Desktop Navigation Link Component
function NavLink({ href, label, isScrolled }: { href: string; label: string; isScrolled: boolean }) {
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-base font-medium rounded-lg hover:bg-opacity-10 transition duration-300 ${isScrolled
        ? 'text-dark-700 hover:text-primary-600 hover:bg-primary-50'
        : 'text-white hover:text-white hover:bg-white/10'
        }`}
    >
      {label}
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      className="flex items-center py-2 text-lg font-medium text-dark-700 hover:text-primary-600 transition duration-300"
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
