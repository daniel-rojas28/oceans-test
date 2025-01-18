import styles from "./layout.module.css";
import LogoutButton from "./components/LogoutButton";
import Link from "next/link";

export const metadata = {
  title: "Home Rentals Admin Dashboard",
  description: "Admin Dashboard for managing rental properties",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        {/* Navigation Bar */}
        <header className={styles.navbar}>
          <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
              Home Rentals
            </Link>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
              <Link href="/properties" className={styles.link}>
                Properties
              </Link>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
              <LogoutButton />
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className={styles.content}>{children}</main>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© 2025 Home Rentals Admin Dashboard</p>
        </footer>
      </body>
    </html>
  );
}
