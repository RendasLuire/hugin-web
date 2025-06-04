'use client';

import RuneCircleSpinner from './components/RuneCircleSpinner'; // Ajusta la ruta si cambia
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative overflow-hidden h-screen w-full flex flex-col items-center justify-center bg-[var(--color-panel)] text-[var(--color-runic)] px-6 text-center font-serif select-none">
    <div className="particles-bg absolute inset-0 pointer-events-none z-0" />
    <RuneCircleSpinner className="z-0 opacity-20 pointer-events-none" />
    
    <AlertTriangle
    size={80}
    className="mb-6 animate-pulse text-[var(--color-runic)] drop-shadow-[0_0_14px_var(--color-runic-wrath)] z-10"
    />
    <h1 className="text-5xl font-black mb-4 z-10 tracking-widest uppercase text-[var(--color-foreground)]  drop-shadow-[0_0_14px_var(--color-runic-wrath)] ">
    Te has desviado del designio
    </h1>
    <p className="mb-10 max-w-xl opacity-90 italic font-semibold z-10 leading-relaxed text-lg text-[var(--color-foreground)]  drop-shadow-[0_0_14px_var(--color-runic-wrath)] ">
    No hay error aquí, solo desafío.<br />
    Cada símbolo te observaba, incluso antes de que llegaras.<br />
    Tu paso ha roto el orden trazado por los antiguos.<br />
    Vuelve sobre tus huellas, antes de que Hugin te mire con juicio.
    </p>
    <Link
  href="/dashboard"
  className="inline-flex items-center gap-2 z-10 text-[var(--color-highlight)] font-bold text-xl hover:underline hover:brightness-125 hover:drop-shadow-[0_0_6px_var(--color-runic)] transition duration-300"
  aria-label="Volver al templo principal"
>
  ← Regresa al templo
</Link>

    </div>
  );
}
