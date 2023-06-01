import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const apiKey = import.meta.env.VITE_ACCESS_KEY;

  useEffect(() => {
    const apiUrl = `https://api.unsplash.com/photos/random?count=16&client_id=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verifica los datos de la API en la consola
        setImages(data);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <div className="gallery">
      {images.map(image => (
        <img
          key={image.id}
          src={image.urls.regular}
          alt={image.alt_description}
          onError={e => {
            console.log(`Error al cargar la imagen: ${e.target.src}`);
          }}
        />
      ))}
    </div>
  );
}

export default App;



