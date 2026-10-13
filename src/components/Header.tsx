import { ArrowUpRight, Layers3 } from 'lucide-react';

interface HeaderProps { currentTab: string; onChangeTab: (tab: string) => void; }

export default function Header({ currentTab, onChangeTab }: HeaderProps) {
  const items = [
    { id: 'home', label: 'Genel bakış' },
    ...[1, 2, 3, 4].map(day => ({ id: `session${day}`, label: `${day}. Gün` })),
    { id: 'tools', label: 'Araç kutusu' },
    { id: 'resources', label: 'Kaynaklar' },
  ];
  return <header className="site-header">
    <div className="header-inner">
      <button className="brand" onClick={() => onChangeTab('home')} aria-label="Eğitim kılavuzu ana sayfa">
        <span className="brand-mark"><Layers3 size={24} /></span>
        <span>yapay zekâ<span className="brand-caption">EĞİTİM KILAVUZU</span></span>
      </button>
      <nav aria-label="Ana gezinme" className="desktop-nav">
        {items.map(item => <button key={item.id} id={`nav-${item.id}`} aria-current={currentTab === item.id ? 'page' : undefined} onClick={() => onChangeTab(item.id)}>{item.label}</button>)}
      </nav>
      <button className="header-action" onClick={() => onChangeTab('prompt')}>İstem atölyesi <ArrowUpRight size={16} /></button>
    </div>
    <nav className="mobile-nav" aria-label="Mobil gezinme">
      {items.map(item => <button key={item.id} aria-current={currentTab === item.id ? 'page' : undefined} onClick={() => onChangeTab(item.id)}>{item.label}</button>)}
    </nav>
  </header>;
}
