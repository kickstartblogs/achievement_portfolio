import React from "react";
import Eventcontainer from "./Eventcontainer";
import "./event.css"

function Home() {
  return (
    <div>
      <div id="Events_first_container">
        <div className="heading_container">
          <h1 id="Heading" style={{ marginTop: "6vw" }}>
            Accolades
          </h1>
        </div>
        <div
          className="heading_containers"
          style={{
            fontFamily: "Montserrat",
            fontStyle: "normal",
            fontWeight: "normal",
          }}
        >
          <p id="Heading_para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            quos quam iste dolores dolorum sint consectetur consequatur dolorem,
            corrupti sequi, itaque molestias, fuga sapiente laudantium quo hic
            nesciunt temporibus reprehenderit magni omnis placeat? Quia
            voluptate, fugit ipsa culpa, tempore obcaecati, quae corporis
            dolorum atque saepe harum repellat architecto voluptatibus non.
          </p>
        </div>
        <Eventcontainer />
      </div>
    </div>
  );
}

export default Home;
