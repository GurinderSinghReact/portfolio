import React, { useEffect, useState } from "react";
import "./styles.css";
import AnimatedList from "../../Components/AnimatedList";

export default function Projects() {
  const [fixedHeader, setFixedHeader] = useState(false);
  const [count, setCount] = useState(0);
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

  const projectList = [
    {
      name: "Taxmann Store",
      description:
        "Taxmann Store app: Unrivaled selection of over a million publications in Taxes, Corporate Law, Accounting, Auditing, Banking, Finance, and Management.",
      img: require("../../assets/images/taxmannstoreApp.png"),
      color: "#FFF2E1",
      style: { width: "78%", height: "82%" },
      appstore: "https://apps.apple.com/in/app/taxmann-store/id1573240178",
      playstore:
        "https://play.google.com/store/apps/details?id=com.planet.Taxmann&hl=en_IN&gl=US",
    },
    {
      name: "Taxmann.com Research",
      description:
        "Taxmann.com app: Your go-to source for real-time updates on tax and corporate laws, offering expert opinions and comprehensive research across diverse legal domains in India.",
      img: require("../../assets/images/researchScreenshot.png"),
      color: "#1C8749",
      style: { width: isMobile ? "115%" : "126%", height: "100%"},
      appstore:
        "https://apps.apple.com/in/app/taxmann-com-research/id1629849446",
      playstore:
        "https://play.google.com/store/apps/details?id=com.taxmann.research&hl=en&gl=US",
    },
    {
      name: "Indian Commerce Association",
      description:
        "Simplify your conference experience with easy registration, secure paper submissions, travel planning, feedback provision, and certificate downloads.",
      color: "#ABF3FD",
      img: require("../../assets/images/icaScreenshot.png"),
      style: { width: "70%", height: "82%" },
      appstore:
        "https://apps.apple.com/pk/app/indian-commerce-association/id6465172505",
      playstore: "https://play.google.com/store/apps/details?id=com.icaApp",
    },
    {
      name: "Vybr",
      description:
        "Experience the latest music. Watch, vote, chat. Connect artists and music enthusiasts. Vyb Sessions for aspiring artists. Dive into the dynamic world of music on VYBR.",
      color: "#1F1F1F",
      style: { width: "80%", height: "100%" },
      img: require("../../assets/images/vybrScreenshot.png"),
      appstore: "https://apps.apple.com/in/app/vybr/id1618587905",
    },
    {
      name: "Saitech Auto Spare Parts",
      description:
        "Effortless auto parts shopping in the GCC. Explore a variety of parts, quick customer support, and seamless experience. Find what you need stress-free!",
      color: "#ED592B",
      style: { width: "74%", height: "94%" },
      img: require("../../assets/images/saiTechScreenshot.png"),
      appstore:
        "https://apps.apple.com/in/app/saitech-auto-spare-parts/id1536888456",
      playstore:
        "https://play.google.com/store/apps/details?id=com.saitech&hl=en_IN&gl=US",
    },
    {
      name: "Arasca Eshop",
      description:
        "Your One-Stop-Shop for Pre-Hospital Medical needs. 5000+ quality products, ISO 9001 certified, trusted supplier in UAE, GCC, Middle East & Africa. Committed to public care and safety, offering innovative solutions for a healthy environment.",
      color: "#00A651",
      style: { width: "72%", height: "82%" },
      img: require("../../assets/images/arascaScreenshot.png"),
      appstore: "https://apps.apple.com/kh/app/arasca-eshop/id1508168718",
      playstore:
        "https://play.google.com/store/apps/details?id=com.arascamedicalgroup&hl=en_IN&gl=US",
    },
    {
      name: "My Care Aid",
      description:
        "My Care Aid App: Streamline health management with medical history storage, medication reminders, secure record uploads, and health metric tracking.",
      color: "#FAA00D",
      style: { width: "76%", height: "100%" },
      img: require("../../assets/images/careaidScreenshot.png"),
      appstore: "https://apps.apple.com/ph/app/my-care-aid/id1660224521",
      playstore:
        "https://play.google.com/store/apps/details?id=com.custom_medical_history",
    },
    {
      name: "Club J",
      description:
        "Jeddah's premium app for upscale services. Community, exclusive deals, reviews. Annual subscription for benefits. Free marketing for businesses.",
      color: "#42D9D4",
      style: { width: "78%", height: "82%" },
      img: require("../../assets/images/clubjScreenshot.png"),
      appstore: "https://apps.apple.com/us/app/club-j/id6449501496",
      playstore: "https://play.google.com/store/apps/details?id=com.clubj",
    },
    {
      name: "AAB World",
      description:
        "AAB World: Cameras, lenses, audio gear. Top brands. Easy shopping, fast delivery, excellent service. Your go-to destination!",
      color: "#000000",
      style: { width: "94%", height: "100%" },
      img: require("../../assets/images/aabScreenshot.png"),
      appstore: "https://apps.apple.com/us/app/aab-world/id1103244042",
      playstore:
        "https://play.google.com/store/apps/details?id=com.planet.Taxmann&hl=en_IN&gl=US",
    },
    {
      name: "Digyoo",
      description:
        "Redefining nightlife dating. Instant connections, real-time notifications. Say goodbye to approach anxiety. Embrace a new era of seamless connections.",
      color: "#F3E5F1",
      style: { width: "78%", height: "100%" },
      img: require("../../assets/images/digyooScreenshot.png"),
      appstore: "https://apps.apple.com/us/app/digyoo/id1630890012",
      playstore:
        "https://play.google.com/store/apps/details?id=com.digyooapp.dating",
    },
    {
      name: "Minutesfit",
      description:
        "Minutes redefines sports access with QR codes and pay-as-you-stay flexibility. Break barriers, encourage inclusivity, and make sports convenient for all.",
      color: "#2C2D31",
      style: { width: "78%", height: "98%" },
      img: require("../../assets/images/minutesfitScreenshot.png"),
      appstore: "https://apps.apple.com/in/app/minutesfit/id1556579890",
      playstore:
        "https://play.google.com/store/apps/details?id=com.minutes_react",
    },
    {
      name: "Tilal",
      description:
        "Pioneering Saudi real estate app. Digital twin for seamless property management. Stay informed, connect, enhance community living.",
      color: "#FFFFFF",
      style: { width: "88%", height: "100%" },
      img: require("../../assets/images/tilalScreenshot.png"),
      appstore: "https://apps.apple.com/in/app/tilal/id1603235153",
      playstore:
        "https://play.google.com/store/apps/details?id=com.tilare_real_estate_new",
    },
    {
      name: "YouSat",
      description:
        "Transforming television with a revolutionary app. Film, upload, schedule for broadcast. 24/7 Live Streaming, social features for global connections.",
      color: "#5D4D87",
      style: { width: "92%", height: "94%" },
      img: require("../../assets/images/yousatScreenshot.png"),
      playstore:
        "https://play.google.com/store/apps/details?id=com.yousat.app&hl=en_IN&gl=US",
    },
    {
      name: "Animal Survival International",
      description:
        "Empowering advocates for animal welfare. Stay informed, contribute seamlessly, and actively engage. Join a compassionate community making a positive global impact.",
      color: "#475D7C",
      style: { width: "70%", height: "100%" },
      img: require("../../assets/images/asiScreenshot.png"),
      appstore:
        "https://apps.apple.com/ca/app/animal-survival-international/id6445870489",
      playstore: "https://play.google.com/store/apps/details?id=com.asi_react",
    },
    {
      name: "HallowedOnes-Christian dating",
      description:
        "Christian Social Network powered by Ekobridge.com. Join FREE to connect with Christian singles, swipe matching, in-app chat, and safety features.",
      color: "#E74140",
      style: { width: "76%", height: "86%" },
      img: require("../../assets/images/hallowedonesScreenshot.png"),
      appstore: "https://apps.apple.com/be/app/hallowedones/id6450661724",
      playstore:
        "https://play.google.com/store/apps/details?id=com.michael_dating_app_react",
    },
    {
      name: "Network for Animals",
      description:
        "International animal welfare NGO. Support shelters, initiatives, raise awareness. Join 1.4 million supporters for a better world for animals.",
      color: "#E0E0E0",
      style: { width: "70%", height: "100%" },
      img: require("../../assets/images/nfaScreenshot.png"),
      playstore:
        "https://play.google.com/store/apps/details?id=com.nfa_react&hl=en_AU",
      appstore:
        "https://apps.apple.com/in/app/network-for-animals/id6450647990",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      // Adjust the height (e.g., 200) based on when you want to fix the header
      setFixedHeader(scrollHeight > 80);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (fixedHeader && !isMobile) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + 1;
          return newCount <= projectList.length ? newCount : prevCount;
        });
      }, 80);

      // Clean up the interval when the component unmounts or when count reaches 16
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [fixedHeader]);

  return (
    <div class={isMobile ? "isMobile" : "project-container"}>
      {/* {!isMobile && ( */}
      <div class="child-div-left">
        <div
          className={`fixed-position ${
            fixedHeader ? "fixed-header" : "relative-header"
          }`}
        >
          <div class="header-text-project">Projects</div>
          {!isMobile && (
            <>
              <div class="subheader-text-project">
                Welcome to my project showcase! Here are some of the key
                projects I've had the pleasure of working on. Each project
                represents a unique challenge and an opportunity for innovation.
                Feel free to explore and get a glimpse of my skills and
                expertise.
              </div>
              {fixedHeader && (
                <div className="counter-container">
                  <div className="count">{count}+</div>
                  <div>apps & websites published</div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {/* )} */}
      <div class="child-div-right">
        <AnimatedList items={projectList} />;
      </div>
    </div>
  );
}
