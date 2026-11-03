import './Navbar.css'
import logo from '../assets/logo.jpg'

function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="#home">
        <img src={logo} alt="KEK Global Holdings SARL" />
      </a>
      <ul className="navlinks">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;