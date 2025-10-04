import { useEffect, useState } from "react";

export default function Slideshow() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/images")
      .then(res => res.json())
      .then(files => setImages(files))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * images.length);
      } while (nextIndex === index); // prevent repeating the same image consecutively
      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [images, index]);

  if (images.length === 0) return null;

  return (
    <div className="slideshow-container">
      {images.map((img, i) => (
        <div
          key={i}
          className="slideshow-image"
          style={{
            backgroundImage: `url(http://localhost:5000/images/${img})`,
            opacity: i === index ? 0.6 : 0, // Transitions the opacity
          }}
        ></div>
      ))}
    </div>
  );
}