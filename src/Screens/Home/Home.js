import React, { useEffect, useState } from "react";
import "./styles.css";
import Typewriter from "typewriter-effect";
import TypewriterComp from "../../Components/TypewriterComp";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  const paragraphs = [
    "Greetings! I'm Gurinder Singh, a dedicated React and React Native developer, bringing a wealth of experience and creativity to the dynamic realm of IT. With three years of immersion in the industry, I've had the privilege of witnessing and contributing to the evolution of technology. My focus on React and React Native has allowed me to craft seamless and engaging user interfaces across web and mobile platforms.",
    "In the ever-evolving landscape of IT, I've cultivated a passion for staying abreast of the latest trends, ensuring that my skills are not just up-to-date but also forward-thinking. Being part of the IT industry has provided me with a platform to continuously learn and adapt. Each project has been a unique opportunity to push the boundaries of what's achievable with React and React Native. I relish the challenges that come with software development, viewing them as stepping stones to further growth and innovation.",
    "Whether it's building responsive web applications or crafting intuitive mobile experiences,",
    "Let's embark on a journey of innovation together—where every line of code is an opportunity to make a lasting impact. I'm excited about the possibilities that lie ahead and eager to contribute my skills to your next groundbreaking",
  ];

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

  return (
    <div>
      <main>
        <div
          class={`container${windowWidth >= 768 ? " with-image" : " no-image"}`}
        >
          <div class="text-container">
            <div class="author-container">
              <h1 style={styles.headerText}>
                Hey I'm
                <span> Gurinder Singh </span>
                <span class="wave">👋</span>
              </h1>
              <p style={styles.paraStyle}>{paragraphs[0]}</p>
              <p style={styles.paraStyle}>{paragraphs[1]}</p>
              <p style={styles.paraStyle}>{paragraphs[2]}</p>
              <p style={styles.paraStyle}>
                {paragraphs[3]}{" "}
                <Typewriter
                  options={{
                    strings: ["App.", "Website."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </div>
          </div>
          {windowWidth >= 768 && (
            <div
              class="image-container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div class="hero-image">
                <picture>
                  <img
                    src="https://wassim.dev/assets/images/wassim-chegham-580x580.png"
                    // src={require('../../assets/images/gurinder.png')}
                    style={{ maxWidth: "140%", height: "auto" }}
                    alt="Gurinder Singh Profile"
                  />
                </picture>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

const styles = {
  headerText: {
    fontSize: "2em",
  },
  paraStyle: {
    fontSize: "1em",
  },
};
