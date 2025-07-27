import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import './global.css';

export const metadata = {
  title: "NIKO'S HOTEL",
}

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
  )
}
