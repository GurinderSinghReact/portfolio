import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from 'react-intersection-observer';
import "./AnimatedList.css";

const AnimatedListItem = ({ index, item }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredAppIndex, setHoveredAppIndex] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const parallaxProps = useSpring({
    transform: inView ? 'translateY(0%)' : 'translateY(50%)',
  });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleAppMouseEnter = (index) => {
    setHoveredAppIndex(index);
  };

  const handleAppMouseLeave = () => {
    setHoveredAppIndex(null);
  };

  return (
    <animated.div id={`item-${index}`} style={props} ref={ref}>
        <animated.div style={parallaxProps}>
      <div class={`project-card`}>
        <div
          class={`project-card ${index % 2 === 0 ? "left" : "right"}`}
          style={{
            paddingRight: "40px",
            backgroundColor: index % 2 === 0 ? item?.color : "#000000",
          }}
        >
          {index % 2 !== 0 ? (
            <div class="card-flex-reverse">
              <div>
                <div class="left-header">{item?.name}</div>
                <div class="left-subheader">{item?.description}</div>
              </div>
              <div class="row-card">
                {item?.playstore && (
                  <a
                    href={item?.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      key={index}
                      alt="Playstore"
                      src={
                        hoveredIndex === index
                          ? require("../assets/images/active-playstore.png")
                          : require("../assets/images/playstore.png")
                      }
                      width={isMobile ? "22" : "38"}
                      height={isMobile ? "22" : "38"}
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </a>
                )}
                {item?.appstore && item?.playstore && (
                  <div style={{ width: isMobile ? "8px" :  "14px" }} />
                )}
                {item?.appstore && (
                  <a
                    href={item?.appstore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Playstore"
                      src={
                        hoveredAppIndex === index
                          ? require("../assets/images/active-app.png")
                          : require("../assets/images/app.png")
                      }
                      width={isMobile ? "22" : "38"}
                      height={isMobile ? "22" : "38"}
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      onMouseEnter={() => handleAppMouseEnter(index)}
                      onMouseLeave={handleAppMouseLeave}
                    />
                  </a>
                )}
              </div>
            </div>
          ) : (
            <img
              src={item?.img}
              style={{
                width: item?.style?.width,
                height: item?.style?.height,
                marginLeft: "20px",
              }}
              alt="App"
            />
          )}
        </div>
        <div
          class={`project-card ${index % 2 !== 0 ? "left" : "right"}`}
          style={{
            paddingLeft: "40px",
            backgroundColor: index % 2 !== 0 ? item?.color : "#000000",
          }}
        >
          {index % 2 === 0 ? (
            <div class="card-flex">
              <div>
                <div class="right-header">{item?.name}</div>
                <div class="right-subheader">{item?.description}</div>
              </div>
              <div class="row-card">
                {item?.playstore && (
                  <a
                    href={item?.playstore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      key={index}
                      alt="Playstore"
                      width={isMobile ? "22" : "38"}
                      height={isMobile ? "22" : "38"}
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      src={
                        hoveredIndex === index
                          ? require("../assets/images/active-playstore.png")
                          : require("../assets/images/playstore.png")
                      }
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    />
                  </a>
                )}
                {item?.appstore && item?.playstore && (
                  <div style={{ width: "14px" }} />
                )}
                {item?.appstore && (
                  <a
                    href={item?.appstore}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Playstore"
                      src={
                        hoveredAppIndex === index
                          ? require("../assets/images/active-app.png")
                          : require("../assets/images/app.png")
                      }
                      width={isMobile ? "22" : "38"}
                      height={isMobile ? "22" : "38"}
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      onMouseEnter={() => handleAppMouseEnter(index)}
                      onMouseLeave={handleAppMouseLeave}
                    />
                  </a>
                )}
              </div>
            </div>
          ) : (
            <img
              src={item?.img}
              style={{
                width: item?.style?.width,
                height: item?.style?.height,
                marginRight: "20px",
              }}
              alt="App"
            />
          )}
        </div>
      </div>
      </animated.div>
    </animated.div>
  );
};

const AnimatedList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <AnimatedListItem key={index} index={index} item={item} />
      ))}
    </div>
  );
};

export default AnimatedList;
