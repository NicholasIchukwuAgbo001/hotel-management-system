import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export const metadata = {
  title: "NIKO'S HOTEL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
