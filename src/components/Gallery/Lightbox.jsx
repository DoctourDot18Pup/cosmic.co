function Lightbox({ image, alt, onClose }) {
  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={alt} />
      </div>
    </div>
  )
}

export default Lightbox