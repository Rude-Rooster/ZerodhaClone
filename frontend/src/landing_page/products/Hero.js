import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="text-center p-5 mt-5 mb-5">
        <h1>Zerodha Products</h1>
        <h3 className='text-muted mt-3 mb-4 fs-4'>Sleek, modern, and intuitive trading platforms</h3>
        <p className='fs-5'>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
