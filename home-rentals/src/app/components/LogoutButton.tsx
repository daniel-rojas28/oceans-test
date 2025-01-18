"use client";

export default function LogoutButton() {
  const handleLogout = () => {
    // Remove login status
    localStorage.removeItem("isLoggedIn");

    // Redirect to login page
    window.location.href = "/login";
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        fontSize: "1rem",
        color: "white",
        backgroundColor: "#d32f2f",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
    >
      Log Out
    </button>
  );
}
