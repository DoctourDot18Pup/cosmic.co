import { useEffect, useState } from 'react'
import { client, urlFor } from '../../sanity/client'

const query = `*[_type == "tattoo"] | order(order asc) {
  _id,
  image,
  alt
}`

function Gallery() {
  const [tattoos, setTattoos] = useState([])
  const [loading, setLoading] = useState(true)

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
              <div className="gallery-card" key={tattoo._id} style={{ animationDelay: `${i * 0.08}s` }}>
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
    </section>
  )
}

export default Gallery