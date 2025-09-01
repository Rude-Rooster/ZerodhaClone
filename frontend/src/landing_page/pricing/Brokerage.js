import React from 'react';

function Brokerage() {
  return (  
    <div className='container'>
      <div className='row '>
        <div className='col-8 text-left'>
          <a href='' className='undecorated-link'><h3 className='text-center'>Brokerage Calculator</h3></a>
          <ul style={{lineHeight:'2.5rem'}} className='text-muted'>
            <li>Call & Trade and RMS auto-squareoff:Additonal charges of &#8377;50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged &#8377;20 per contract note. Courier charges applty</li>
            <li>For NRI account (non-PIS), 0.5% or &#8377;100 per executed order for equity(whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or &#8377;200 per executed order for equity(whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged &#8377;40 per executed instead of &#8377;20 per executed order.</li>
          </ul>
        </div>
        <div className='col-4'>
          <a href='' className='undecorated-link'><h3 className='text-center'>List of charges</h3></a>
          
        </div>
      </div>
    </div>
  );
}

export default Brokerage;