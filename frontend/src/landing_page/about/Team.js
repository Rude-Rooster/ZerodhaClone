import React from "react";
import {Link} from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center fs-3">People</h1>
      </div>
      <div
        className="row text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col  p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            className="rounded-circle "
            style={{ width: "60%" }}
          ></img>
          <h4 className='mt-4'>Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>Connect on <Link to="/" style={{textDecoration:'none'}}>Homepage</Link> / <a href='' style={{textDecoration:'none'}}>TradingQnA</a> / <a href='' style={{textDecoration:'none'}}>Twitter</a></p> 
        </div>
      </div>
    </div>
  );
}

export default Team;
