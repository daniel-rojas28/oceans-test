import { useState } from "react";
interface PropertyDetailsProps {
  name: string;
  address: string;
  description: string;
  price: string;
  images: string[];
  weather?: {
    temperature: number;
    condition: string;
  };
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  name,
  address,
  description,
  price,
  images,
  weather,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h2 style={{ textAlign: "center" }}>{name}</h2>

      {/* Image with size constraints */}
      <div style={{ position: "relative", textAlign: "center" }}>
        <img
          src={images[currentImageIndex]}
          alt={name}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
            marginBottom: "1rem",
            maxHeight: "400px", 
            objectFit: "cover", 
          }}
        />
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
        <button
          onClick={handlePrevImage}
          style={{
            padding: "0.5rem 1rem",
            background: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          ← Previous
        </button>
        <button
          onClick={handleNextImage}
          style={{
            padding: "0.5rem 1rem",
            background: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          Next →
        </button>
      </div>

      {/* Property Details */}
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Price:</strong> {price}</p>

      {/* Weather Details */}
      {weather && (
        <div>
          <h3>Current Weather</h3>
          <p><strong>Temperature:</strong> {weather.temperature}°C</p>
          <p><strong>Condition:</strong> {weather.condition}</p>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
