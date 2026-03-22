import BottomNav from '../components/BottomNav'
import TopBar from '../components/TopBar'

/**
 * AppLayout — wraps every page with the persistent
 * top bar, ambient background, and bottom navigation.
 */
function AppLayout({ children, activePage, onNavigate }) {
  return (
    <div className="relative min-h-screen bg-surface dot-grid">
      {/* ── Ambient glow blobs ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 rounded-full bg-secondary/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-accent/3 blur-[80px]" />
      </div>

      {/* ── Top bar ── */}
      <TopBar activePage={activePage} onNavigate={onNavigate} />

      {/* ── Main content ── */}
      <main className="relative z-10 pt-16 pb-24 px-4 max-w-lg mx-auto">
        {children}
      </main>

      {/* ── Bottom navigation ── */}
      <BottomNav activePage={activePage} onNavigate={onNavigate} />
    </div>
  )
}

export default AppLayout
