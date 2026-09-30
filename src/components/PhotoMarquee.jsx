const PhotoMarquee = ({ photos, folder, title }) => {
  if (!photos || photos.length === 0) return null;

  return (
    <div className="photo-marquee">
      <h2 className="marquee-title">{title}</h2>
      <div className="marquee-container">
        <div className="marquee-content">
          {/* Render the list twice for seamless infinite scrolling */}
          {[...photos, ...photos].map((photo, index) => (
            <img
              key={index}
              src={`/${folder}/${photo}`}
              alt={`Honor ${index}`}
              className="marquee-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoMarquee;
