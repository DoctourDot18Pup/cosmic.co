import { useEffect, useState } from 'react'
import { client, urlFor } from '../../sanity/client'
import Lightbox from './Lightbox'

const query = `*[_type == "tattoo"] | order(order asc) {
  _id,
  image,
  alt
}`

function Gallery() {
  const [tattoos, setTattoos] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    client.fetch(query)
      .then((data) => {
        setTattoos(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <section className="gallery" id="galeria">
      <div className="gallery-header">
        <h2>Trabajos recientes</h2>
        <span className="gallery-tag">&#9733; Portfolio</span>
      </div>
      {loading ? (
        <div className="gallery-loading">
          <span>Cargando...</span>
        </div>
      ) : (
        <div className="gallery-grid">
          {tattoos.length === 0 ? (
            <p className="gallery-empty">Sin trabajos aún.</p>
          ) : (
            tattoos.map((tattoo, i) => (
              <div
                className="gallery-card"
                key={tattoo._id}
                style={{ animationDelay: `${i * 0.08}s` }}
                onClick={() => setSelected(tattoo)}
              >
                <div className="card-img">
                  <div className="card-corner-tr"></div>
                  <div className="card-corner-bl"></div>
                  <img
                    src={urlFor(tattoo.image).width(600).url()}
                    alt={tattoo.alt}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      )}
      {selected && (
        <Lightbox
          image={urlFor(selected.image).width(1200).url()}
          alt={selected.alt}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}

export default Gallery