import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  if (!token) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="card w-full max-w-md space-y-4">
        <span className="decorative-rune block text-center">ᚨ</span>

        <h1 className="text-2xl font-bold text-center tracking-wide">
          Movimientos
        </h1>

        <p className="text-sm text-center font-mono text-green-500">
          Acceso concedido por los dioses
        </p>
      </div>
    </div>
  );
}