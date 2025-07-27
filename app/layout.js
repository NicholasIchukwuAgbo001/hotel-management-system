import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

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
      </body>
    </html>
  )
}
