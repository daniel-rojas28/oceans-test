"use client";

import Link from "next/link";
import properties from "../mock/properties.json";
import styles from "./properties.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PropertiesPage() {
  const router = useRouter();
  
  useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        router.push("/login");
      }
    }, [router]);
    
  return (
    <div className={styles.container}>
      <h2>Rental Properties</h2>
      <div className={styles.grid}>
        {properties.map((property) => (
          <div key={property.id} className={styles.card}>
            <img src={property.images[0]} alt={property.name} className={styles.image} />
            <h3>{property.name}</h3>
            <p>{property.address}</p>
            <p>{property.price}</p>
            <Link href={`/properties/${property.id}`}>
              <button className={styles.button}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
