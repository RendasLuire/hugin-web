'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  CreditCard,
  Activity,
  Landmark,
  BarChart,
  BarChart3,
  Feather,
  User,
  MoreVertical,
  LogOut
} from 'lucide-react';
import React, { useTransition, useState } from 'react';
import { logoutUser } from '../utils/auth.actions';

const navItems = [
  { label: 'Atalaya de Hugin', href: '/dashboard', icon: <Home size={20} /> },
  { label: 'Trazos del Destino', href: '/movements', icon: <Activity size={20} /> },
  { label: 'Cámaras del Tesoro', href: '/accounts', icon: <CreditCard size={20} /> },
  { label: 'Templos del Oro', href: '/banks', icon: <Landmark size={20} /> },
  { label: 'Runas del Equilibrio', href: '/budgets', icon: <BarChart size={20} /> },
  { label: 'Visiones del Oráculo', href: '/reports', icon: <BarChart3 size={20} /> },
  { label: 'Susurros del Cuervo', href: '/suggestions', icon: <Feather size={20} /> },
  { label: 'El Portador del Saber', href: '/user', icon: <User size={20} /> },
];

export default function Navbar() {
  const [isPending, startTransition] = useTransition();
  const [showMore, setShowMore] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    startTransition(() => {
      logoutUser();
    });
    setShowMore(false); // Cierra el menú después de hacer logout
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col justify-between w-64 h-full bg-[var(--color-panel)] text-[var(--color-foreground)] shadow-md px-4 py-6">
        <div>
          <h2 className="text-lg mb-6 text-[var(--color-runic)] tracking-widest font-bold text-center">
            ✦ HUGIN — El ojo del trono
          </h2>
          <ul className="space-y-4">
            {navItems.map(({ label, href, icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link href={href}>
                    <div
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all cursor-pointer
                        ${
                          isActive
                            ? 'bg-[var(--color-highlight)] text-white font-semibold border-l-4 border-[var(--color-runic)] pl-2 animate-pulse'
                            : 'hover:bg-[var(--color-muted-bg)] hover:shadow-[0_0_10px_var(--color-runic)] hover:ring-1 hover:ring-[var(--color-runic)]'
                        }
                      `}
                    >
                      <span className="text-[var(--color-runic)]">{icon}</span>
                      <span className="text-sm">{label}</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          onClick={handleLogout}
          disabled={isPending}
          className="mt-8 text-sm font-semibold text-[var(--color-error)] hover:text-red-400 transition-all hover:underline hover:shadow-[0_0_10px_var(--color-error)] disabled:opacity-50"
        >
          {isPending ? 'Invocando portal...' : '✧ Salir del templo'}
        </button>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--color-panel)] border-t border-[var(--color-muted-bg)] text-[var(--color-foreground)] shadow-inner z-50">
        <ul className="flex justify-around items-center py-2 relative">
          {navItems.slice(0, 4).map(({ label, href, icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link href={href}>
                  <div
                    className={`flex flex-col items-center text-xs px-3 py-1 transition-all
                      ${
                        isActive
                          ? 'text-[var(--color-runic)] font-semibold'
                          : 'hover:text-[var(--color-runic)]'
                      }
                    `}
                  >
                    {icon}
                  </div>
                </Link>
              </li>
            );
          })}

          {/* Botón de Más */}
          <li className="relative">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex flex-col items-center text-xs px-3 py-1 transition-all hover:text-[var(--color-runic)]"
            >
              <MoreVertical size={20} />
              <span className="text-[10px]">Más</span>
            </button>

            {showMore && (
              <div className="absolute bottom-12 right-0 bg-[var(--color-panel)] border border-[var(--color-muted-bg)] rounded-md shadow-md w-40 z-50 text-sm overflow-hidden">
                {navItems.slice(4).map(({ label, href, icon }) => (
                  <Link key={href} href={href} onClick={() => setShowMore(false)}>
                    <div className="flex items-center gap-2 px-4 py-2 hover:bg-[var(--color-muted-bg)] transition-all">
                      {icon}
                      <span>{label}</span>
                    </div>
                  </Link>
                ))}
                <button
                  onClick={handleLogout}
                  disabled={isPending}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-[var(--color-error)] hover:bg-[var(--color-muted-bg)] disabled:opacity-50"
                >
                  <LogOut size={18} />
                  {isPending ? 'Saliendo...' : '✧ Salir'}
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
