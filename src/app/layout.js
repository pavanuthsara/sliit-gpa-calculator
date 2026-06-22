import { Geist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata = {
  title: 'SLIIT GPA Calculator – Semester GPA & WGPA Calculator',
  description:
    'Calculate your semester GPA and Weighted Grade Point Average (WGPA) for all SLIIT degree specializations: Software Engineering, IT, Data Science, Interactive Media, CSNE and Cyber Security.',
  keywords: ['SLIIT', 'GPA calculator', 'WGPA', 'Sri Lanka', 'university', 'semester GPA', 'degree classification'],
  openGraph: {
    title: 'SLIIT GPA Calculator',
    description: 'Real-time GPA and WGPA calculator for SLIIT students.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans bg-slate-950 text-white antialiased min-h-screen`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
