const mockPhotos = Array.from({ length: 6 }, (_, i) => ({ id: i + 1 }))

function Gallery() {
  return (
    <section className="gallery" id="galeria">
      <div className="gallery-header">
        <h2>Trabajos recientes</h2>
        <span className="gallery-tag">&#9733; Portfolio</span>
      </div>
      <div className="gallery-grid">
        {mockPhotos.map((photo) => (
          <div className="gallery-card" key={photo.id}>
            <div className="card-img">
              <span className="card-num">0{photo.id}</span>
              <div className="card-corner-tr"></div>
              <div className="card-corner-bl"></div>
              <div className="img-placeholder">
                <div className="img-icon"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery