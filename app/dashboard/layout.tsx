'use client';

import Navbar from '../components/NavBar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)] font-sans transition-colors duration-300">
      <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
        <div className='w-full flex-none md:w-64'>
      <Navbar />
        </div>
        <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
    {children}
        </div>
      </div> 
      <footer className="flex items-center justify-center px-6 py-2 bg-[var(--color-background)] text-sm text-[var(--color-muted)]">
        <p>&copy; {new Date().getFullYear()} Hugin Web. All rights reserved.</p>
      </footer>
    </div>
  );
}
