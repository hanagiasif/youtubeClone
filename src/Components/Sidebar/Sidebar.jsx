import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="sortcut-links">
        <div className="side-link">
          <img src={home} alt="home" />
          <p>Home</p>
        </div>
        <div className="side-link">
          <img src={game_icon} alt="home" />
          <p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobiles} alt="home" />
          <p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt="home" />
          <p>Sports</p>
        </div>
        <div className="side-link">
          <img src={entertainment} alt="home" />
          <p>Entertainment</p>
        </div>
        <div className="side-link">
          <img src={tech} alt="home" />
          <p>Technology</p>
        </div>
        <div className="side-link">
          <img src={music} alt="home" />
          <p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt="home" />
          <p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt="home" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={jack} alt="jack" />
          <p>Jack</p>
        </div>
        <div className="side-link">
          <img src={simon} alt="jack" />
          <p>Simon</p>
        </div>
        <div className="side-link">
          <img src={tom} alt="jack" />
          <p>Tom</p>
        </div>
        <div className="side-link">
          <img src={megan} alt="jack" />
          <p>Megan</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt="jack" />
          <p>Cameron</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
