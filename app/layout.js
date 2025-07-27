import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import "@/app/_styles/globals.css"

export const metadata = {
  title: {
    template: "%s / The Niko's Hotel",
    default: "Welcome / The Niko's Hotel"
  },
  description: "Luxurious cabin hotel located in the heart of lagos, surrended by beautiful mauntains and dark forests"
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
