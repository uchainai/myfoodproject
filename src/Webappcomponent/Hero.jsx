import React from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div id="id">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(./image/two.jpg)`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-2xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <button>
              <NavLink className="btn btn-primary" to="/Login" end>
                Get Started
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
