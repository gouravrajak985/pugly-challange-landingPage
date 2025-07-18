import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '🚀 Pugly Dropshipping Challenge - $10,000 Prize Pool',
  description: 'Join the ultimate 7-day dropshipping challenge! Compete to launch and scale your store using Pugly. $10,000 prize pool with bonus rewards for creativity and invites.',
  keywords: ['Dropshipping', 'Challenge', 'Pugly', 'E-commerce', 'Competition', 'Prize Pool'],
  authors: [{ name: 'Pugly Team' }],
  creator: 'Pugly',
  openGraph: {
    title: '🚀 Pugly Dropshipping Challenge - $10,000 Prize Pool',
    description: 'Join the ultimate 7-day dropshipping challenge! Compete to launch and scale your store using Pugly.',
    url: 'https://pugly.store',
    siteName: 'Pugly Dropshipping Challenge',
    images: [
      {
        url: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Pugly Dropshipping Challenge - Launch, Sell, Win',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '🚀 Pugly Dropshipping Challenge - $10,000 Prize Pool',
    description: 'Join the ultimate 7-day dropshipping challenge! Compete to launch and scale your store using Pugly.',
    images: ['https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}