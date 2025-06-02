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
      let message = 'Acceso denegado por los dioses';
      try {
        const data = await res.json();
        message = data.message || message;
      } catch (error) {
        console.error('Error parsing response:', error);
      throw new Error(message);
    }
  }
  
    const data = await res.json();
  
    const cookieStore = await cookies();
    cookieStore.set('token', data.token, {
      httpOnly: true,
      path: '/',
    });
  
    return true;

}
