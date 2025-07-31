import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row  ">
        <h1 className="text-center text-muted">People</h1>
      </div>

      <div className="row p-5  text-muted fs-6">
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br /> <br />
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
            <br /> <br />
            Playing basketball is his zen. <br /> <br />
            <p>
              Connect on &nbsp;
              <a href="" style={{ textDecoration: "none" }}>
                Homepage
              </a>
              &nbsp; / &nbsp;
              <a href="" style={{ textDecoration: "none" }}>
                TradingQnA
              </a>
              &nbsp; / &nbsp;
              <a href="" style={{ textDecoration: "none" }}>
                Twitter
              </a>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
