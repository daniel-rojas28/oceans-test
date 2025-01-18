"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Home Rentals Admin Dashboard</h1>
        <p className={styles.subtitle}>
          Manage your rental properties, check weather updates, and more!
        </p>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className={styles.links}>
          <Link href="/properties" className={styles.card}>
            <h2>View Properties &rarr;</h2>
            <p>Explore and manage your rental property listings.</p>
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Documentation &rarr;</h2>
            <p>Learn more about Next.js and its features.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
