'use client';

import { useState, useTransition } from 'react';
import { loginUser } from './actions';
import RuneSpinner from '../components/RuneSpinner';

export default function LoginForm() {
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      try {
        await loginUser(formData);
        window.location.href = '/dashboard';
      } catch (err: any) {
        console.error('Error al iniciar sesión:', err);
        setError('Acceso denegado por los dioses');
      }
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form action={handleSubmit} className="card w-full max-w-md space-y-4">
        <span className="decorative-rune block text-center">ᚨ</span>

        <h1 className="text-2xl font-bold text-center tracking-wide">
          Solicita acceso al saber de Hugin
        </h1>
        <p className="text-sm text-center text-muted">
          Solo los dignos pueden consultar las runas del destino
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center font-mono">
            {error}
          </p>
        )}

        {isPending ? (
          <div className="flex justify-center">
            <RuneSpinner className="w-8 h-8" />
          </div>
        ) : (
          <>
        <input
          type="email"
          name="email"
          className="input"
          placeholder="Tu nombre rúnico"
          required
        />

        <input
          type="password"
          name="password"
          className="input"
          placeholder="Secreto que protege las puertas"
          required
        />
        <button type="submit" className="btn w-full" disabled={isPending}>
            <>
              <span className="decorative-rune mr-2">ᚾ</span>
              Clamar al cuervo
            </>
        </button>
      </>   
        )}
        <p className="decorative-rune text-center mt-4">ᛞᚨᚱ ᛈᛚᛖᚷᚨᚱᛁᚨ</p>
      </form>
    </div>
  );
}
