import React from 'react';

const Header = () => {
  const backgroundImageUrl = 'https://austinbenefits.com/wp-content/uploads/employee-benefits-and-taxes-for-employers-background.png';

  const navStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100px',
  };


  return (
    <nav style={navStyle} >
      <div style={{ padding: '3rem 0 4rem 0' }}>
        <h1 style={{ color: 'whitesmoke' }}>
          EMPCLUB
        </h1>
      </div>
    </nav>
  );
};

export default Header;
