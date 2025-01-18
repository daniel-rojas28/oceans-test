"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import properties from "../../mock/properties.json";
import PropertyDetails from "./PropertyDetails";
import axios from "axios";
import { getWeatherCondition } from "@/utils/weatherUtils";

export default function PropertyDetailsPage({ params: paramsPromise }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [params, setParams] = useState<{ id: string } | null>(null);
  /* eslint-disable-next-line   @typescript-eslint/no-explicit-any */
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const resolvedParams = await paramsPromise;
      setParams(resolvedParams);
    };
    unwrapParams();
  }, [paramsPromise]);

  const property = params ? properties.find((prop) => prop.id === parseInt(params.id)) : null;

  useEffect(() => {
    if (params && !property) {
      router.push("/properties");
    } else if (property) {
      fetchWeather(property.latitude!, property.longitude!);
    }
  }, [params, property, router]);
  

  const fetchWeather = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherCode = response.data.current_weather.weathercode;
      const condition = getWeatherCondition(weatherCode);
  
      setWeather({
        temperature: response.data.current_weather.temperature,
        condition,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  if (!params || !property) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      {/* Back Button */}
      <button
        onClick={() => router.push("/properties")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "none",
          border: "none",
          color: "#4caf50",
          fontSize: "1rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        ← Back to Properties
      </button>

      <PropertyDetails
        name={property.name}
        address={property.address}
        description={property.description}
        price={property.price}
        images={property.images}
        weather={weather ? { temperature: weather.temperature, condition: weather.condition } : undefined}
      />
    </div>
  );
}
