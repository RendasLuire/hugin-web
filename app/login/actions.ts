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

  if (!res.ok) {
    const data = await res.json();
    console.log('Error:', data);
    throw new Error(data.message || 'Acceso denegado por los dioses');
  }

  const data = await res.json();

  const cookieStore = await cookies();
  cookieStore.set('token', data.token, {
    httpOnly: true,
    path: '/',
  });

  return true;
}
