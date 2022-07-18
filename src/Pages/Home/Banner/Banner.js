import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Banner = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
      };

      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    return (
        <div>
            <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
        </div>
    );
};

export default Banner;