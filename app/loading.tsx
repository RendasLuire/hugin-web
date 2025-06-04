'use client';

import { Loader2 } from 'lucide-react';
import RuneCircleSpinner from './components/RuneCircleSpinner';

export default function Loading() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-[var(--color-panel)] text-[var(--color-runic)] font-serif text-center select-none px-4">
      <div className="particles-bg absolute inset-0 pointer-events-none z-0" />
      <RuneCircleSpinner className="z-0 opacity-20 pointer-events-none" />

      <Loader2 className="animate-spin mb-6 z-10 text-[var(--color-runic)] drop-shadow-[0_0_14px_var(--color-runic-wrath)]" size={48} />
      
      <h2 className="text-3xl font-extrabold tracking-widest mb-4 z-10 text-[var(--color-foreground)] drop-shadow-[0_0_10px_var(--color-runic-wrath)]">
        ⧉ Invocando las runas...
      </h2>
      
      <p className="text-sm max-w-sm z-10 opacity-90 italic font-medium text-[var(--color-foreground)] drop-shadow-[0_0_10px_var(--color-runic-wrath)] leading-relaxed">
        Las sendas de Hugin se entrelazan.<br />
        Espera mientras se abre el umbral hacia su mirada.
      </p>
    </div>
  );
}
