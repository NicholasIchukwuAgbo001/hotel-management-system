import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-yellow-600 backdrop-blur-md px-4 py-2">
      <div className="flex justify-between items-center max-w-7xl mx-auto gap-4">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
