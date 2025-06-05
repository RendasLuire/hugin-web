'use client';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)] font-sans transition-colors duration-300">
     
    {children}
    </div>
  );
}