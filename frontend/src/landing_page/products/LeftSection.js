import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col ">
          <img src={imageURL}  />
        </div>
        <div className="col p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} class="undecorated-link">
              Try demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learnMore} className="undecorated-link mx-5">
              Learn more <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          <div className="mt-3">
            <a href={googlePlay} className="">
              <img src="media/images/googlePlayBadge.svg"></img>
            </a>
            <a href={appStore} className="mx-5">
              <img src="media/images/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
