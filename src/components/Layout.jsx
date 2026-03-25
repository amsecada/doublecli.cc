import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="layout">
      {/* Background Effects */}
      <div className="bg-effects">
        <div className="blur-circle circle-1" />
        <div className="blur-circle circle-2" />
        <div className="blur-circle circle-3" />
        <div className="bg-grid" />
        <div className="bg-radial" />
      </div>

      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
