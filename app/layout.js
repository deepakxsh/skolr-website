import "./globals.css";

export const metadata = {
  title: "SKOLR India",
  description: "Your school, reimagined",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}