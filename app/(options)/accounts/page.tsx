import TreasuryCard from './components/TreasuryCard';
import TreasuryNavbar from './components/TreasuryNavbar';

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <TreasuryNavbar>
       
      </TreasuryNavbar>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    <TreasuryCard />
    <TreasuryCard />
    <TreasuryCard />
    <TreasuryCard />
    <TreasuryCard />
  </div>
      </main>
    </div>
  );
}
