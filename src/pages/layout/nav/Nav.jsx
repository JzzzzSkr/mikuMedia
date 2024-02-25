import React from "react";
import "./Nav.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MovieIcon from "@mui/icons-material/Movie";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navagate = useNavigate();

  return (
    <div className="navWrapper">
      <div className="displayIcons">
        <div className="icon-menu"></div>
      </div>

      <div className="wrapper user">
        <div className="userHeader">
          <img src="./assets/profile.jpeg" alt="" />
        </div>
        <div className="userName">
          <span>Michael Liang</span>
          <a className="git" href="https://github.com/JzzzzSkr">
            <GitHubIcon style={{ fontSize: "medium" }} />
            <span style={{ fontSize: "10px", marginLeft: "4px" }}>GitHub</span>
          </a>
        </div>
      </div>

      <div className="wrapper appMenu">
        <div class="side-title">Apps</div>
        <ul>
          <li class="side-menu" onClick={()=>{navagate('home')}}>
            <span>
              <HomeIcon />
            </span>
            <p style={{ fontSize: "14px", marginLeft: "0.5em" }}>Home</p>
          </li>
          <li class="side-menu" onClick={()=>{navagate('library')}}>
            <span>
              <LibraryMusicIcon />
            </span>
            <p style={{ fontSize: "14px", marginLeft: "0.5em" }}>
              Music library
            </p>
          </li>
          <li class="side-menu" onClick={()=>{navagate('movie')}}>
            <span>
              <MovieIcon />
            </span>
            <p style={{ fontSize: "14px", marginLeft: "0.5em" }}>Movie</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
