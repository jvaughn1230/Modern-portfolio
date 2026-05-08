import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jeffrey Vaugn Portfolio',
  description: 'Full Stack Software Developer Portfolio',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-section'>{children}</body>
    </html>
  );
}
