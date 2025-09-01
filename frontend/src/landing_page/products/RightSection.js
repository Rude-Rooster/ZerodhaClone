import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
  return (  
    <div className='container mt-5'>
      <div className='row'>
        <div className='col p-5 mt-5'>
          <h1 className='mt-5'>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} className="undecorated-link">Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className='col'>
          <img src={imageURL}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;