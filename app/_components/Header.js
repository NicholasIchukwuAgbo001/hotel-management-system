import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className="py-1 shadow-md sticky top-0 z-50 backdrop-blur">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
