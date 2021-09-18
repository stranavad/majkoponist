import React from "react";

export default function HomePage() {
  return (
    <div className="container-center">
      <h1 className="medium-heading">Čo vieš o Hane ?</h1>
      <p className="homepage-text">
        Poznáte Hanu Hegerovú ? <br />
        Ste si istý ? <br />
        Vaše vedomosti si môžete overiť v kvíze o našej najznámejšej
        šansoniérke.
      </p>
      <a href="/quiz" className="homepage-button">
        Hrat
      </a>
    </div>
  );
}
