import React, { useEffect, useState } from 'react';

interface RuneSpinnerProps {
  className?: string;
}

export default function RuneSpinner({ className }: RuneSpinnerProps) {
  const runes = [
    'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ',
    'ᚱ', 'ᚷ', 'ᚹ', 'ᚺ',
    'ᛁ', 'ᛇ', 'ᛋ', 'ᛏ'
  ];

  const animationDuration = 6;
  const [centerRuneIndex, setCenterRuneIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCenterRuneIndex(prev => (prev + 1) % runes.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [runes.length]);

  return (
    <div className={`relative aspect-square w-full h-full ${className ?? ''} overflow-hidden`}>
      <span
        className="absolute text-[1.4em] font-bold decorative-rune rune-pulse"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {runes[centerRuneIndex]}
      </span>
      <div className="spin-container absolute inset-0">
        {runes.map((rune, i) => {
          const angle = (360 / runes.length) * i;
          const radius = 30;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);
          const delay = (animationDuration / runes.length) * i;

          return (
            <span
              key={i}
              className="absolute text-[1em] rune-glow"
              style={{
                left: `calc(50% + ${x}%)`,
                top: `calc(50% + ${y}%)`,
                transform: 'translate(-50%, -50%)',
                animationDelay: `${delay}s`,
                animationDuration: `${animationDuration}s`,
              }}
            >
              {rune}
            </span>
          );
        })}
      </div>
    </div>
  );
}
