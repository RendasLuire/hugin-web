export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)] font-sans transition-colors duration-300">
      <header className="flex items-center justify-between px-6 py-2 bg-[var(--color-background)] shadow-md">
        <h1 className="text-2xl font-bold tracking-wide text-[var(--color-highlight)]">HUGIN</h1>
      </header>

      <main className="flex-1 p-6">
        {children}
      </main>

      <footer className="flex items-center justify-center px-6 py-2 bg-[var(--color-background)] text-sm text-[var(--color-muted)]">
        <p>&copy; {new Date().getFullYear()} Hugin Web. All rights reserved.</p>
      </footer>
    </div>
  );
}
