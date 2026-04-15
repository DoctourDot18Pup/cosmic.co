function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="logo-box">
          <div className="logo-scanline"></div>
          <div className="logo-star"></div>
        </div>
        <div className="logo-text">
          <span className="logo-title">The Cosmic</span>
          <span className="logo-sub">Tattoo World</span>
        </div>
      </div>
      <div className="navbar-links">
        <div className="nav-dot"></div>
        <a href="#galeria">Galería</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  )
}

export default Navbar