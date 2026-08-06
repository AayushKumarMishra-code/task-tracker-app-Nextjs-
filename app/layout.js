import "./globals.css";

export const metadata = {
  title: "Task Tracker",
  description:
    "just a basic task tracker I built while learning Next.js — nothing fancy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
