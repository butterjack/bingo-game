import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import clsx from 'clsx';

const Confetti = (props) =>{
  const customInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 0
      },
      color: {
        value: ["#ffffff", "#ff0000"]
      },
      shape: {
        type: ["circle", "square"]
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          startValue: "max",
          destroy: "min"
        }
      },
      size: {
        value: 7,
        random: {
          enable: true,
          minimumValue: 3
        }
      },
      links: {
        enable: false
      },
      life: {
        duration: {
          sync: true,
          value: 5
        },
        count: 1
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 20
        },
        speed: 80,
        decay: 0.1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "destroy",
          top: "none"
        }
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60
        }
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 60
        }
      },
      roll: {
        darken: {
          enable: true,
          value: 25
        },
        enable: true,
        speed: {
          min: 15,
          max: 25
        }
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true
      }
    },
    detectRetina: true,
  
    emitters: [
      {
        direction: "top-right",
        rate: {
          delay: 0.1,
          quantity: 3
        },
        position: {
          x: 0,
          y: 100
        },
        size: {
          width: 0,
          height: 0
        },
        particles: {
          move: {
            angle: {
              offset: -15,
              value: 60
            }
          }
        }
      },
      {
        direction: "top-left",
        rate: {
          delay: 0.1,
          quantity: 5
        },
        position: {
          x: 100,
          y: 100
        },
        size: {
          width: 0,
          height: 0
        },
        particles: {
          move: {
            angle: {
              offset: 15,
              value: 60
            }
          }
        }
      }
    ]
  };

  return <Particles options={options} init={customInit} className={clsx(!props.toggle && 'showConfetti')}/>;
}

export default Confetti;