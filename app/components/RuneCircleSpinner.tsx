'use client';

import React, { useEffect, useState } from 'react';

interface RuneCircleSpinnerProps {
  className?: string;
}

interface RunePosition {
  x: number;
  y: number;
}

export default function RuneCircleSpinner({ className }: RuneCircleSpinnerProps) {
  const outerRunes = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᛁ', 'ᛇ', 'ᛋ', 'ᛏ'];
  const middleRunes = ['☉', '☾', '☿', '♀', '♁', '♂', '♃', '♄'];
  const innerRunes = ['✦', '✧', '✩', '✪', '✫', '✬'];

  const [outerPos, setOuterPos] = useState<RunePosition[]>([]);
  const [middlePos, setMiddlePos] = useState<RunePosition[]>([]);
  const [innerPos, setInnerPos] = useState<RunePosition[]>([]);

  useEffect(() => {
    const getPositions = (count: number, radius: number): RunePosition[] => {
      return Array.from({ length: count }, (_, i) => {
        const angle = (360 / count) * i;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        return { x, y };
      });
    };

    setOuterPos(getPositions(outerRunes.length, 40));
    setMiddlePos(getPositions(middleRunes.length, 28));
    setInnerPos(getPositions(innerRunes.length, 16));
  }, []);

  if (outerPos.length === 0 || middlePos.length === 0 || innerPos.length === 0) return null;

  return (
    <div className={`absolute inset-0 flex items-center justify-center ${className ?? ''}`}>
      <div className="relative" style={{ width: '80vmin', height: '80vmin' }}>
        {/* Outer Circle */}
        <div className="absolute inset-0 animate-spin-slow">
          {outerRunes.map((rune, i) => {
            const { x, y } = outerPos[i];
            return (
              <span
                key={`outer-${i}`}
                className="absolute rune rune-spell text-xl"
                style={{
                  left: `calc(50% + ${x}%)`,
                  top: `calc(50% + ${y}%)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {rune}
              </span>
            );
          })}
        </div>

        <div className="absolute inset-0 animate-spin-slower reverse-spin">
          {middleRunes.map((rune, i) => {
            const { x, y } = middlePos[i];
            return (
              <span
                key={`middle-${i}`}
                className="absolute rune rune-spell text-lg"
                style={{
                  left: `calc(50% + ${x}%)`,
                  top: `calc(50% + ${y}%)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {rune}
              </span>
            );
          })}
        </div>

        <div className="absolute inset-0 animate-spin-fast">
          {innerRunes.map((rune, i) => {
            const { x, y } = innerPos[i];
            return (
              <span
                key={`inner-${i}`}
                className="absolute rune rune-spell text-base"
                style={{
                  left: `calc(50% + ${x}%)`,
                  top: `calc(50% + ${y}%)`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {rune}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
