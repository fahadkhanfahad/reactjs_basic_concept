import { useState } from "react";

export default function data() {
  const [image, setImage] = useState('');

  const fetchdata = async () => {
    const apiKey = 'b6dP8hb8lY29oBFUPZwQbUyNsD0Nve_iPRF66OeG6QQ';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setImage(data.urls.regular);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
      <img src={image} alt="new image"  width='300' height='400'/>
      <button onClick={fetchdata}>Get Random Image</button>
    </div>
  );
}
