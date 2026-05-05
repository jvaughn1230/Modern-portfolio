import React from 'react';

const Hero = () => {
  return (
    <section className='mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6'>
      <p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400'>
        Full-Stack Developer
      </p>

      <h1 className='max-w-4xl text-5xl font-bold tracking-tight md:text-7xl'>
        Hi, I&apos;m Jeffrey Vaughn.
      </h1>

      <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
        I build modern web and mobile applications
      </p>

      <div className='mt-8 flex flex-wrap gap-4'>
        <a
          href='#projects'
          className='rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300'
        >
          View Projects
        </a>

        <a
          href='#contact'
          className='rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400'
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
