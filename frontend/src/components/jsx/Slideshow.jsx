import { useEffect, useState } from "react";
import '../css/slideshow.css'

export default function Slideshow() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const backendURL = `http://127.0.0.1:5000/`; //https://abroad-annual-performance-surface.trycloudflare.com production?


  useEffect(() => {
    fetch(backendURL + '/api/images')
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
    }, 5000);

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
            backgroundImage: `url(${backendURL}/images/${img})`,
            opacity: i === index ? 0.6 : 0, // Transitions the opacity
          }}
        ></div>
      ))}
    </div>
  );
}