import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-950 border-b border-primary-900 px-8 py-2 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}


export default Header;
