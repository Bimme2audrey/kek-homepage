import './Footer.css';

function footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </nav>
      <p>&copy; 2026 KEK GLOBAL HOLDINGS SARL. All rights reserved.</p>
    </footer>
  );
}
export default footer;