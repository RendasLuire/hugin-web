'use client';

import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative overflow-hidden h-screen w-full flex flex-col items-center justify-center bg-[var(--color-panel)] text-[var(--color-runic)] px-6 text-center font-serif select-none">
      <div className="particles-bg absolute inset-0 pointer-events-none z-0" />

      <AlertTriangle
        size={80}
        className="mb-6 animate-pulse text-[var(--color-runic)] drop-shadow-[0_0_14px_var(--color-runic)] z-10"
      />
      <h1 className="text-5xl font-black mb-4 z-10 tracking-widest uppercase text-[var(--color-runic)] drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]">
        ⚠️ Detente, viajero
      </h1>
      <p className="mb-10 max-w-xl opacity-90 italic font-semibold z-10 leading-relaxed text-lg text-[var(--color-runic)] drop-shadow-[0_0_6px_rgba(0,0,0,0.7)]">
        Has desviado tus pasos del sendero trazado por las runas sagradas.<br />
        Regresa antes de que el equilibrio se rompa.
      </p>
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 z-10 text-[var(--color-highlight)] font-bold text-xl hover:underline hover:shadow-[0_0_18px_var(--color-runic)] transition duration-300"
        aria-label="Volver al templo principal"
      >
        ← Regresa al templo
      </Link>
    </div>
  );
}
