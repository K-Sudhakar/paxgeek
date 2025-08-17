import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="logo">PaxGeek</div>
      <div>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
