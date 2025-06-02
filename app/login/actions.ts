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
  let message = 'Acceso denegado por los dioses';

  try {
    responseBody = await res.json();
  } catch (error) {
    throw new Error('Respuesta inválida del servidor');
  }

  if (res.status === 500) {
    message = 'Acceso denegado por los dioses';
    throw new Error(message);
  } else if (!res.ok) {
    res.status == 500 ? 
    message = 'Acceso denegado por los dioses' : 
    message = responseBody?.message;
    throw new Error(message);
  }

  const token = responseBody?.data?.accessToken;

  if (!token) {
    throw new Error('Token no recibido. El oráculo guarda silencio.');
  }

  const cookieStore = await cookies();
  cookieStore.set('token', token, {
    httpOnly: true,
    path: '/',
  });

  return true;
}
