import { useEffect } from "react";
import { tsParticles } from "tsparticles";

const Background = () => {
  useEffect(() => {
    tsParticles.load("tsparticles", {
      background: {
        color: "#0b0b1a",
      },
      fpsLimit: 60,
      particles: {
        number: { value: 120 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: 0.8,
          random: true,
        },
        size: {
          value: { min: 1, max: 2 },
        },
        move: {
          enable: true,
          speed: 0.1,
          direction: "none",
          outModes: "out",
        },
      },
      detectRetina: true,
    });
  }, []);

  return <div id="tsparticles" className="fixed inset-0 -z-10"></div>;
};

export default Background;
