'use client';

import React from 'react';
import "../styles/TreasuryNavbar.css";

interface TreasuryNavbarProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function TreasuryNavbar({
  title = 'Cámaras del Tesoro',
  description = 'Registros sellados por tu voluntad, donde el oro descansa… o arde.',
  children,
}: TreasuryNavbarProps) {
  return (
    <nav className="w-full border-b px-6 py-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold tracking-widest">
            {title}
          </h1>
          <p className="text-sm italic">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {children}
        </div>
      </div>
    </nav>
  );
}
