import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      // params={{
      //     particles: {
      //         number: {
      //             value: 400,
      //             density: {
      //                 enable: true,
      //                 value_area: 1000
      //             }
      //         },
      //         color: {
      //             value: '#fff'
      //         },
      //         opacity: {
      //             value: 0.5,
      //             anim: {
      //                 enable: true
      //             }
      //         },
      //         size: {
      //             value: 7,
      //             random: true,
      //             anim: {
      //                 enable: true,
      //                 speed: 3
      //             }
      //         },
      //         line_linked: {
      //             enable: false
      //         },
      //         move: {
      //             speed: 0.2
      //         }
      //      }
      options={{
        background: {
          color: {
            value: "#1b1a2ea9",
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          number: {
            density: {
              enable: true,
              area: 600,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
            anim: {
              enable: true,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: { min: 0.8, max: 2 },
            anim: {
              enable: true,
              speed:15,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
          },
        },
      }}
    />
  );
};

export default Particle;
