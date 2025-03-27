import React from 'react';
import NavBar from "../../landing/navbar";
import Events from "../../landing/events";
import InfoBox from "../../landing/infobox";
import Footerb from "../../landing/footer";

function Home() {
    return (
        <div>
            <NavBar />
            <Events />
            <InfoBox />
            <Footerb />
        </div>
    );
}

export default Home;
