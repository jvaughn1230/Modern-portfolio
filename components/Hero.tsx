import React from 'react';
import Button from './Button';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section id='home' className='relative min-h-screen overflow-hidden'>
      <Image
        src='/hero.png'
        alt='Cinematic ocean coastline'
        fill
        priority
        className='object-cover object-center'
      />

      {/* Blue Ocean Glow Affect */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(34,211,238,0.22),transparent_34%)]' />

      {/* Bottom fade into next section */}
      <div className='absolute bottom-0 left-0 h-44 w-full bg-gradient-to-b from-transparent to-bg-primary' />

      <div className='relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 sm:px-8 lg:px-10'>
        <div className='max-w-3xl'>
          <p className='section-label mb-4'>Full Stack Developer</p>

          <h1 className='hero-title'>
            Building modern web and mobile experiences.
          </h1>

          <p className='body-text mt-6 max-w-2xl font-bold sm:text-lg'>
            I&apos;m Jeffrey Vaughn, a full-stack developer specializing in
            React, Next.js, React Native, Node.js, and TypeScript. I build
            scalable applications from frontend to backend with a focus on
            performance, usability, and clean architecture.
          </p>
          <div className='mt-9 flex flex-col gap-4 sm:flex-row'>
            <Button
              to='projects'
              type='primary'
              text='View Projects'
              icon={FaArrowRightLong}
            />

            <Button to='contact' type='secondary' text='contact me' />
          </div>
        </div>
      </div>

      <div className='mt-9 flex flex-col gap-4 sm:flex-row'>
        <a href='#projects' className='hero-button-primary'>
          View Projects
        </a>

        <a href='#contact' className='hero-button-secondary'>
          Contact Me NOw
        </a>
      </div>
    </section>
  );
};

export default Hero;
