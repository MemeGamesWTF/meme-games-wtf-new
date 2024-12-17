import React from "react";
import "./HomePage.css";
// import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import Footer from "./Footer2";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "./Loader";
// import gamesData from "./gamesData";
import fire from "/assets/fire.svg";
import chad from "/assets/chad.svg";
import rocket from "/assets/rocket.svg";
import brain from "/assets/brain.svg";

const HomePage = () => {
  const navigation = useNavigation();

  if (navigation.state !== "idle") {
    <Loader />;
  } else {
    <Outlet />;
  }

  const gamesData = useLoaderData();
  return (
    <div className="homemain">
      <div className="main0">
        <NavBar2 />
        <div className="gametypesdiv">
          {/* <div className="gamebtnsmain"> */}
            {/* Trending */}
            <button className="gamebtns bg-[#FFF600]">
              <img src={fire} alt="fire" className="gamebtnsimages" />
              <span>Trending</span>
            </button>
          {/* </div> */}
          {/* Classic Games */}
          <button className="gamebtns bg-white">
            <img src={chad} alt="chad" className="gamebtnsimages" />
            <span>Classic Games</span>
          </button>

          {/* Elon's Games */}
          <button className="gamebtns bg-white">
            <img src={rocket} alt="rocket" className="gamebtnsimages" />
            <span>Elon's Games</span>
          </button>

          {/* Brain Rot */}
          <button className="gamebtns bg-white">
            <img src={brain} alt="brain" className="gamebtnsimages" />
            <span>Brain Rot</span>
          </button>
        </div>

        <div className="homegamesection">
          <h2 className="homegamesectiontopic">Games</h2>
        </div>

        <div className="homegamecontainer">
          {/* <!-- Card Grid --> */}
          <div className="homegamecontainergrid">
            {/* <!-- Card 1 --> */}
            {typeof gamesData !== undefined &&
              gamesData.length > 0 &&
              gamesData.map((game) => (
                <div className="card00" key={game.name}>
                  <div className="card">
                    <Link
                      to={game.url === null ? "" : `/game/${game.name}`}
                      key={game.name}
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="card-header group"
                        style={{ position: "relative" }}
                      >
                        {/* Main Image */}
                        <img
                          src={game.image}
                          alt={game.name}
                          className="gamebtnsimages transition-opacity duration-300"
                          loading="lazy"
                          onLoad={(e) => {
                            e.target.style.opacity = 1;
                          }}
                        />

                        {/* Game Icon - Appears on Hover */}
                        <img
                          src={game.icon}
                          alt="icon"
                          className="game-icon"
                          // style={{ width: "50px", height: "50px" }}
                        />
                      </div>
                    </Link>

                    <div className="card-body">
                      <h2 className="card-title">{game.name}</h2>
                      <p className="card-text">
                        {game.timesPlayed} 19.K Times Played
                      </p>
                      <div className="dots">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </div>
                  </div>
                  <div className="sharediv -mt-3">
                    <button
                      className="share-button"
                      onClick={() => {
                        if (navigator.share) {
                          navigator
                            .share({
                              title: "Check out this game!",
                              text: `Play ${game.name} now!`,
                              url: window.location.href,
                            })
                            .then(() => console.log("Successfully shared"))
                            .catch((error) =>
                              console.error("Error sharing:", error)
                            );
                        } else {
                          alert("Sharing is not supported on this browser.");
                        }
                      }}
                    >
                      Share
                    </button>
                  </div>
                </div>
              ))}

            {/* <div className="card">
              <div className="card-header">
                <span className="card-header-icon">
                  <img src={fire} alt="fire" className="gamebtnsimages" />
                </span>
              </div>
              <div className="card-body">
                <h2 className="card-title">Game Name</h2>
                <p className="card-text">19.K Times Played</p>
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <button className="share-button">Share</button>
              </div>
            </div>
           
            <div className="card">
              <div className="card-header">
                <span className="card-header-icon">
                  <img src={fire} alt="fire" className="gamebtnsimages" />
                </span>
              </div>
              <div className="card-body">
                <h2 className="card-title">Game Name</h2>
                <p className="card-text">19.K Times Played</p>
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <button className="share-button">Share</button>
              </div>
            </div>
            
            <div className="card">
              <div className="card-header">
                <span className="card-header-icon">
                  <img src={fire} alt="fire" className="gamebtnsimages" />
                </span>
              </div>
              <div className="card-body">
                <h2 className="card-title">Game Name</h2>
                <p className="card-text">19.K Times Played</p>
                <div className="dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <button className="share-button">Share</button>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div className="main1">
          <div className="main2">
            {typeof gamesData !== undefined &&
              gamesData.length > 0 &&
              gamesData.map((game) => (
                <Link
                  to={game.url === null ? "" : `/game/${game.name}`}
                  key={game.name}
                  // key={game.name}
                  // href={game.url}
                  // target="_blank"
                  // rel="noopener noreferrer"
                >
                  <div className="main3 group">
                    <img
                      src={game.image}
                      alt={game.name}
                      loading="lazy"
                      className="imageclass"
                      onLoad={(e) => {
                        e.target.style.opacity = 1;
                      }}
                    />
                    <div className="main4"></div>
                    <span className="spanclass">
                      <img
                        src={game.icon}
                        alt="Play Icon"
                        loading="lazy"
                        onLoad={(e) => {
                          e.target.style.opacity = 1;
                        }}
                      />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

export const gamesLoader = async () => {
  const response = await fetch(
    "https://gamesdata-dev.movindusenuraaluthge.workers.dev/"
  );
  if (!response.ok) {
    // throw new Error("Network response was not ok");
    return [];
  }
  const data = await response.json();
  return data;
};
