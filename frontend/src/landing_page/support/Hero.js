import React from "react";

function Hero() {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#2b8cf3ff", color: "white" }}
      id="supportHero"
    >
      <div className="container text-center">
        <h4 className="mb-3">Support Portal</h4>
        <a
          href="#"
          className="text-white text-decoration-underline d-block mb-5"
        >
          Track Tickets
        </a>

        <div className="row justify-content-center">
          <div className="col-md-6 mb-5">
            <h2 className="fs-4 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h2>
            <input
              type="text"
              className="form-control form-control-lg mb-4"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected.."
              style={{ borderRadius: "12px" }}
            />
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href="#" className="text-white text-decoration-underline">
                Track account opening
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Track segment activation
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Intraday margins
              </a>
              <a href="#" className="text-white text-decoration-underline">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-md-6 text-start text-md-center">
            <h2 className="fs-4 mb-4">Featured</h2>
            <div className="d-flex flex-column align-items-md-center">
              <a href="#" className="text-white text-decoration-underline mb-2">
                1. Current Takeovers and Delisting - January 2024
              </a>
              <a href="#" className="text-white text-decoration-underline">
                2. Latest Intraday leverages - MIS & CO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
