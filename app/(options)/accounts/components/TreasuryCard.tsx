import Image from 'next/image';
import '../styles/TreasuryCard.css';

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

const icons = {
  calm: '/tree-icon.svg',
  alert: '/alert-rune.svg',
  danger: '/danger-rune.svg',
};

export default function TreasuryCard({
  name = 'Arca Primordial',
  bank = 'Testamento Rúnico',
  type = 'Raíz de Yggdrasil',
  description = 'El pilar inmutable que sostiene los nueve mundos.',
  color = '#4A7729',
  balance = 750,
  limit = 1000,
  nextPay = 250,
  payDay = 8,
}: TreasuryCardProps) {
  const today = new Date();
  const currentDay = today.getDate();

  let daysRemaining = payDay - currentDay;
  if (daysRemaining < 0) daysRemaining += 30;

  const essenceRatio = limit > 0 ? (balance / limit) * 100 : 0;

  let auraClass = 'border-zinc-700';
  let runicGlow = '';
  let currentIcon = icons.calm;

  if (daysRemaining <= 5) {
    auraClass = 'border-red-500';
    runicGlow = ' shadow-[0_0_20px_rgba(255,0,0,0.6)]';
    currentIcon = icons.danger;
  } else if (daysRemaining <= 10) {
    auraClass = 'border-yellow-500';
    runicGlow = ' shadow-[0_0_12px_rgba(255,255,0,0.4)]';
    currentIcon = icons.alert;
  }

  const runesOpacity = daysRemaining <= 15 ? (15 - daysRemaining) / 15 : 0;
  const isCritical = daysRemaining <= 5;

  return (
    <div
      className={`relative rounded-xl overflow-hidden p-4 transition-transform hover:scale-[1.015]
        bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 text-zinc-200 shadow-inner border
        ${auraClass} ${runicGlow} ${isCritical ? 'animate-pulse-glow' : ''}`}
      style={{ borderColor: color }}
    >
      {/* Runas de fondo */}
      {runesOpacity > 0 && (
  <div
    className="absolute text-justify inset-0 pointer-events-none z-0 font-runes text-red-600 select-none leading-tight break-words whitespace-pre-wrap"
    style={{
      fontSize: '0.5rem',
      opacity: runesOpacity * 0.5,
      filter: 'blur(0.5px)',
      lineHeight: '1.2',
    }}
  >
    {Array(100)
      .fill("ᚦᛖ᛫ᛈᚱᛟᛈᚻᛖᚲᚤ᛫ᛊᛖᚨᛚᛖᛞ᛫ᛁᚾ᛫ᛏᚺᛖ᛫ᚱᚢᚾᛖᛊ ᚨᛚᛚ᛫ᛏᚺᛟᛋᛖ᛫ᚹᚻᛟ᛫ᚹᛖᛚᛞ᛫ᛊᚨᚷᛖ᛫ᛏᚺᛖ᛫ᚷᚱᛖᚨᛏ᛫ᛖᚾᛞ᛫ᚹᛁᛚᛚ᛫ᚳᚻᛁᛚᛚ ᚾᛟᛏ᛫ᛊᛖᛖ᛫ᛏᚺᛖ᛫ᚠᛁᛚᛖ᛫ᛟᚠ᛫ᛒᛖᛏᚱᚨᛚ᛫ᚢᚾᛏᛁᛚ᛫ᛁᛏ᛫ᛁᛊ᛫ᛏᛟᛟ᛫ᛚᚨᛏᛖ ᚦᛖ᛫ᚠᛖᚨᚱᛊᛟᛗᛖ᛫ᛁᛊ᛫ᚳᛟᛗᛁᛝ᛫ᚨᛋ᛫ᚦᛖ᛫ᚳᛖᛚᛖᛊᛏᛁᛢᛖ᛫ᚠᛖᛚᛚᛊ ᚦᛖ᛫ᛞᚱᛟᚷ᚟ᚾ᛫ᛟᚠ᛫ᚦᛖ᛫ᛞᛖᛏᛋᛚᛆᛞᛖ᛫ᚹᛁᛚᛚ᛫ᚺᛖᛚᛞ ᚦᛖ᛫ᛁᚾᛖᚱᛖᛞ᛫ᚠᛁᚱᛖᛊ᛫ᚹᛁᛚᛚ᛫ᚷᚱᛟᚹ᛫ᛚᛖᚷᛖᚾᛞ᛫ᛁᚾ᛫ᚦᛖ᛫ᛒᛚᛟᛞ ᛊᚺᚨᛚᛚ᛫ᛏᚺᛖ᛫ᛏᚱᚢᛏᚺ᛫ᛁᚾᚠᛖᛊᛏ᛫ᛊᛏᛖᛖᚱ ᚦᛖ᛫ᛋᛏᛖᚨᛞᚡᛖᛊ᛫ᚹᛁᚾᛞᛊ᛫ᛚᚨᚢᚷᚺ᛫ᚨᛋ᛫ᚦᛖᚤ᛫ᚺᚨᛚᛚ ᛒᛖᛏᚱᚨᛚ᛫ᚨᚾᛞ᛫ᚷᛖᛚᛞ᛫ᚹᛁᛚᛚ᛫ᚲᚨᛚᛚ ")
      .join(' ')}
  </div>
)}


      {/* Halo rúnico */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10 z-0"
        style={{
          background: `radial-gradient(circle at center, ${color}33 0%, transparent 70%)`,
        }}
      />

      {/* Símbolo rúnico en tooltip */}
      <div
        className="absolute top-2 right-3 text-xl text-zinc-600 font-runes select-none pointer-events-auto cursor-help z-10"
        title="ᛞ Dagaz: El despertar, transformación y nuevos comienzos"
      >
        ᛞ
      </div>

      {/* Encabezado */}
      <div className="flex items-start gap-3 mb-3 relative z-10">
        <div className="w-10 h-10">
          <Image src={currentIcon} alt="icono" width={40} height={40} />
        </div>
        <div className="flex flex-col">
          <h2 className="text-base font-bold tracking-wide">{type}</h2>
          <p className="text-xs italic text-zinc-400">{description}</p>
        </div>
      </div>

      {/* Cuerpo */}
      <div className="space-y-2 text-sm relative z-10">
        <p className="text-zinc-400 italic">
          ⚔ Forjada bajo el nombre ancestral de{' '}
          <span className="text-zinc-100 font-semibold">{name}</span>, vinculada
          al pacto con{' '}
          <span className="text-zinc-100 font-semibold">{bank}</span>.
        </p>

        {/* Barra de esencia */}
        <div className="mt-4">
          <p className="text-xs text-center text-zinc-400 mb-1 font-light italic">
            Esencia restante
          </p>
          <div className="relative w-full h-5 rounded-full overflow-hidden bg-zinc-800 border border-zinc-700 shadow-inner">
            <div className="absolute inset-0 opacity-10 bg-[url('/glyphs.svg')] bg-cover bg-center" />
            <div
              className="h-full rounded-full transition-all duration-500 ease-out flex items-center justify-center text-xs font-semibold text-white"
              style={{
                width: `${essenceRatio}%`,
                background: `linear-gradient(90deg, #6ee7b7 0%, #9333ea 100%)`,
                boxShadow: `0 0 10px rgba(147, 51, 234, 0.5),
                            0 0 20px rgba(110, 231, 183, 0.3)`,
              }}
            >
              <span className="z-10">{Math.round(essenceRatio)}%</span>
            </div>
          </div>
        </div>

        {/* Tributo */}
        <p className="text-yellow-300 font-mono text-sm">
          ᛞ Tributo en {daysRemaining} días:{' '}
          <span className="font-bold">${nextPay.toLocaleString()}</span>
        </p>

        {/* Juicio */}
        <p className="text-zinc-400 italic">
          ☽ El juicio se invocará el día{' '}
          <span className="text-zinc-100 font-semibold">{payDay}</span> del ciclo.
        </p>
      </div>
    </div>
  );
}
