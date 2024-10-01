import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false); // State to control the view

  // Handle "Get Started" button click
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {/* Landing Page */}
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            {/* Get Started Button */}
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>

          {/* About Us Section */}
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      {/* Product List Container (Visible after Get Started is clicked) */}
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        {showProductList && <ProductList />} {/* Only render ProductList when needed */}
      </div>
    </div>
  );
}

export default App;
