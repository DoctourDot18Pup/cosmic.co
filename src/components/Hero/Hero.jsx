function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Arte en tu piel,<br />
          <span className="accent">hecho</span> <span className="red">diferente.</span>
        </h1>
        <p className="hero-sub">
          Tatuajes únicos con alma cósmica. Cada pieza cuenta una historia que dura para siempre.
        </p>
        <div className="hero-cta">
          <a href="#galeria" className="btn-primary">Ver galería</a>
          <a href="#contacto" className="btn-secondary">Contactar</a>
        </div>
      </div>
      <div className="hero-character">
        <div className="char-box">
          <div className="char-circle">
            <div className="char-inner"></div>
          </div>
          <span className="char-label">Mascota<br />animada</span>
        </div>
      </div>
    </section>
  )
}

export default Hero