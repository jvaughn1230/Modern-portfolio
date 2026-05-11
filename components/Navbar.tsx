'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { NAV_LINKS } from '@/data/navLinks';
import NavLink from './NavLink';
import { NavLinkType } from '@/types/types';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={` fixed left-0 top-0 z-50 w-full
        transition-all duration-500  ${
          scrolled
            ? 'border-b border-white/10 bg-bg-primary/95 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'
            : 'border-b border-white/5 bg-bg-primary/35 '
        }`}
    >
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-5 py-7 sm:px-10'>
        <a href='#home' className='flex items-center gap-3'>
          <Image
            src='/logo.png'
            alt='JV Logo'
            width={48}
            height={48}
            priority
            className='drop-shadow-[0_0_14px_rgba(34,211,238,0.5)]'
          />

          <span className='font-heading text-xl font-semibold tracking-[-0.03em] text-primary sm:text-2xl'>
            Jeffrey Vaughn
          </span>
        </a>

        <div className='hidden items-center gap-8 md:flex'>
          {NAV_LINKS.map((link: NavLinkType) => (
            <NavLink key={link.href} link={link} />
          ))}
        </div>

        <button
          type='button'
          onClick={() => setOpen((prev) => !prev)}
          aria-label='Toggle navigation menu'
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan backdrop-blur-md transition hover:border-cyan/60 hover:bg-cyan/10 md:hidden'
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      <div
        className={`
          overflow-hidden border-t border-white/10 bg-bg-primary/95 backdrop-blur-xl
          transition-all duration-500 md:hidden z-50
          ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className='mx-auto flex max-w-7xl flex-col px-5 py-5'>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className='border-b border-white/10 py-4 font-body text-sm font-semibold uppercase tracking-[0.22em] text-secondary transition hover:text-cyan last:border-b-0'
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
