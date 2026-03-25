import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-dot" />
          <span className="logo-text">doublecli.cc</span>
        </div>
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/solutions">Solutions</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/book-call">Strategy Call</Link>
        </nav>
        <Link to="/book-call" className="btn-book">
          Book Call
        </Link>
      </div>
    </header>
  );
}
