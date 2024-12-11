import { useState } from 'react';
import Navigation from './navigation';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    console.log("Menu is open:", !isMenuOpen); // Confirm toggle in console
  };

  return (
    <header className="header">
      <h1 className="header-title">Anthony Gillespie</h1>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation component with conditional class */}
      <Navigation isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;