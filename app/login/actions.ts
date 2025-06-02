'use server';

import { cookies } from 'next/headers';

export async function loginUser(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const res = await fetch(`https://hugin-api.vercel.app/auth/login/`, {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  let responseBody;

  try {
    responseBody = await res.json();
  } catch {
    throw new Error('Respuesta inválida del servidor');
  }

  if (!res.ok) {
    const message = responseBody?.message || 'Acceso denegado por los dioses';
  }

  const cookieStore = await cookies();
  cookieStore.set('token', responseBody.accessToken, {
    httpOnly: true,
    path: '/',
  });

  return true;
}
