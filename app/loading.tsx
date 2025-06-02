'use client';

import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[var(--color-panel)] text-[var(--color-runic)]">
      <Loader2 className="animate-spin mb-4" size={48} />
      <h2 className="text-3xl font-extrabold tracking-widest mb-2">⧉ Invocando las runas...</h2>
      <p className="text-sm max-w-xs text-center opacity-80">
        Paciencia, se está abriendo el portal de HUGIN para ti.
      </p>
    </div>
  );
}
