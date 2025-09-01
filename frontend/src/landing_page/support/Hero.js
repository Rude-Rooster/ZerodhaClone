import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="supportHero">
      <div className="container">
        <div className="row mb-2 p-4">
          <div className="col-10">
            <h3>Support Portal</h3>
          </div>

          <div className="col-2 text-end">
            <a href="" className="btn btn-primary ">
              My tickets
            </a>
          </div>
        </div>

        <div className="row text-center p-3">
            <div class="input-group mb-3">
              <span class="input-group-text">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Eg: How do I open my account, How do I activate F&O"
                />
                <label htmlFor="floatingInput">
                  Eg: How do I open my account, How do I activate F&O
                </label>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// <form className='mb-3'>
//           <input type='text' placeholder='Eg: How do I open my account, How do I activate F&O' className='container-fluid text-muted'></input>
//         </form>
