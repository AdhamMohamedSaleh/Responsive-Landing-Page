import "./globals.css";

export const metadata = {
  title: "Welcome / ~Manage",
  description: "Responsive Landing Page",
  icons: {
    icon: "/P-logo.png",
}};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-gray-950 font-sans">
        {children}
      </body>
    </html>
  );
}
