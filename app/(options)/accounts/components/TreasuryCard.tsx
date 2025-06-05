import Image from 'next/image';
import { useState } from 'react';

interface TreasuryCardProps {
  name?: string;
  bank?: string;
  type?: string;
  description?: string;
  icon?: string;
  color?: string;
  balance?: number;
  limit?: number;
  nextPay?: number;
  payDay?: number;
}

// Íconos para los distintos estados (puedes cambiar por rutas o componentes SVG personalizados)
const icons = {
  calm: '/tree-icon.svg',
  alert: '/alert-rune.svg',
  danger: '/danger-rune.svg',
};

// Componente para runas giratorias (SVG animado)
function RotatingRunes() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className="origin-center animate-spin-slow"
        style={{ transformOrigin: '50% 50%' }}
      >
        <text
          x="50%"
          y="20%"
          textAnchor="middle"
          fill="rgba(255, 0, 0, 0.5)"
          fontSize="14"
          fontFamily="runic"
        >
          ᚠ
        </text>
        <text
          x="80%"
          y="50%"
          textAnchor="middle"
          fill="rgba(255, 0, 0, 0.5)"
          fontSize="14"
          fontFamily="runic"
        >
          ᚢ
        </text>
        <text
          x="50%"
          y="80%"
          textAnchor="middle"
          fill="rgba(255, 0, 0, 0.5)"
          fontSize="14"
          fontFamily="runic"
        >
          ᚦ
        </text>
        <text
          x="20%"
          y="50%"
          textAnchor="middle"
          fill="rgba(255, 0, 0, 0.5)"
          fontSize="14"
          fontFamily="runic"
        >
          ᚨ
        </text>
      </g>
    </svg>
  );
}

export default function TreasuryCard({
  name = 'Arca Primordial',
  bank = 'Testamento Rúnico',
  type = 'Raíz de Yggdrasil',
  description = 'El pilar inmutable que sostiene los nueve mundos.',
  icon = '/tree-icon.svg',
  color = '#4A7729',
  balance = 0,
  limit = 0,
  nextPay = 0,
  payDay = 7,
}: TreasuryCardProps) {
  const essenceRatio = limit > 0 ? (balance / limit) * 100 : 0;

  // Fecha actual y cálculo de días hasta el pago
  const today = new Date();
  const currentDay = today.getDate();
  let daysRemaining = payDay - currentDay;
  if (daysRemaining < 0) {
    daysRemaining += 30;
  }

  // Estado rúnico por proximidad
  let auraClass = '';
  let runicGlow = '';
  let currentIcon = icons.calm;

  if (daysRemaining <= 5) {
    auraClass = 'border-red-500';
    runicGlow = 'animate-pulse shadow-[0_0_20px_rgba(255,0,0,0.6)]';
    currentIcon = icons.danger;
  } else if (daysRemaining <= 10) {
    auraClass = 'border-yellow-500';
    runicGlow = 'animate-pulse shadow-[0_0_12px_rgba(255,255,0,0.4)]';
    currentIcon = icons.alert;
  } else {
    auraClass = 'border-zinc-700';
    runicGlow = '';
    currentIcon = icons.calm;
  }

  // Calcular la opacidad de las inscripciones de runas en el fondo
  // Aquí usamos 15 días como umbral; si daysRemaining es menor a 15, la opacidad aumenta linealmente.
  const MAX_THRESHOLD = 15;
  const runesOpacity =
    daysRemaining < MAX_THRESHOLD ? (MAX_THRESHOLD - daysRemaining) / MAX_THRESHOLD : 0;

  return (
    <div
      className={`relative rounded-xl overflow-hidden p-4 transition-transform hover:scale-[1.015] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 text-zinc-200 shadow-inner border ${auraClass} ${runicGlow}`}
      style={{ borderColor: color }}
    >
      {/* Fondo de inscripciones rúnicas */}
      {runesOpacity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{ opacity: runesOpacity }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="font-runes" fill="rgba(255,0,0,0.5)">
              <text x="5%" y="20%" fontSize="10">
                ᚠᚢᚦᚨ
              </text>
              <text x="50%" y="50%" fontSize="10" textAnchor="middle">
                ᛞᚱᚨᛚ
              </text>
              <text x="90%" y="80%" fontSize="10" textAnchor="end">
                ᚲᛟᚱ
              </text>
            </g>
          </svg>
        </div>
      )}

      {/* Halo rúnico */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 animate-pulse"
        style={{
          background: `radial-gradient(circle at center, ${color}33 0%, transparent 70%)`,
        }}
      />

      {/* Runas giratorias solo cuando quedan ≤5 días */}
      {daysRemaining <= 5 && <RotatingRunes />}

      {/* Símbolo rúnico con tooltip */}
      <div
        className="absolute top-2 right-3 text-xl text-zinc-600 font-runes select-none pointer-events-auto cursor-help"
        title="ᛞ Dagaz: El despertar, transformación y nuevos comienzos"
      >
        ᛞ
      </div>

      {/* Encabezado con ícono dinámico */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10">
          <Image src={currentIcon} alt="icono" width={40} height={40} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-base font-bold tracking-wide text-[var(--color-foreground)]">
            {type}
          </h2>
          <p className="text-xs italic text-zinc-400">{description}</p>
        </div>
      </div>

      {/* Cuerpo rúnico */}
      <div className="space-y-2 text-sm">
        <p className="text-zinc-400 italic">
          ⚔ Forjada bajo el nombre ancestral de{' '}
          <span className="text-zinc-100 font-semibold">{name}</span>, vinculada
          al pacto con{' '}
          <span className="text-zinc-100 font-semibold">{bank}</span>.
        </p>

        {/* Barra de esencia */}
        <div>
          <p className="text-green-400 font-mono text-sm mb-1">
            🜄 Esencia rúnica:{' '}
            <span className="font-bold">{balance.toLocaleString()} almas</span>
          </p>
          <div className="h-2 w-full bg-zinc-700 rounded overflow-hidden">
            <div
              className={`h-full rounded transition-all duration-500 ${
                essenceRatio > 90 ? 'bg-red-500 animate-pulse' : 'bg-green-500'
              }`}
              style={{ width: `${essenceRatio}%` }}
            />
          </div>
          <p className="text-xs text-right text-zinc-500 mt-1">
            {balance.toLocaleString()} / {limit.toLocaleString()} almas selladas
          </p>
        </div>

        {/* Tributo inminente */}
        <p className="text-yellow-300 font-mono text-sm">
          ᛞ Tributo en {daysRemaining} días:{' '}
          <span className="font-bold">${nextPay.toLocaleString()}</span>
        </p>

        {/* Juicio rúnico */}
        <p className="text-zinc-400 italic">
          ☽ El juicio se invocará el día{' '}
          <span className="text-zinc-100 font-semibold">{payDay}</span> del ciclo.
        </p>
      </div>
    </div>
  );
}