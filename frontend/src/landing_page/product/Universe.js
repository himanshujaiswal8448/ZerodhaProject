import React from "react";

function Universe() {
  const handleRedirect = () => {
    window.location.href = "/signup";
  };
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" style={{ width: "30%" }} />
          <br />
          <br />
          <p className="text-muted text-small">Thematic investing platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" style={{ width: "25%" }} />
          <br />
          <br />
          <p className="text-muted text-small">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" style={{ width: "30%" }} />
          <br />
          <br />
          <p className="text-muted text-small">Option trading platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ width: "30%" }}
          />
          <br />
          <br />
          <p className="text-muted text-small">Asset management.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ width: "30%" }} />
          <br />
          <br />
          <p className="text-muted text-small">Bond trading platform.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "30%" }} />
          <br />
          <br />
          <p className="text-muted text-small">Insurance</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={handleRedirect}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
