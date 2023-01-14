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
            hello My name is Atharv singh  and I study in class 12th as of right now.  ever since I was a young kid I have seen  my cousins be a perfect child.  as a younggling  I had the mentality to  achieve and make myself and my family proud.  coming at age of 12 I realised through  small competitions that I had ability of a good speaker and a great sportsman thats why I decided to pursue my exploration in these fields
          </p>
        </div>
        <Eventcontainer />
      </div>
    </div>
  );
}

export default Home;
