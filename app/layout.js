import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css"

export const metadata = {
  title: "NIKO'S HOTEL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-100 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        {children}
        <p>Copyright Niko&apos;s hotel</p>
      </body>
    </html>
  );
}
