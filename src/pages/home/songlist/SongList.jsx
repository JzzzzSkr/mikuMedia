import React from "react";
import "./SongList.scss";
import playlist from "../../../data/data";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const SongList = () => {
  return (
    <div className="songlistWrapper">
      <h3>Album</h3>
      <div className="lists">
        <ul>
          {/* <li className='songbox'>
                        
                        <span>cro</span>
                        <span>a</span>
                        <span>04:50</span>
                        <span><PlayCircleOutlineIcon></PlayCircleOutlineIcon></span>
                    </li> */}

          {playlist.map((song) => {
            return (
              <li className="songbox">
                <div className="box">
                  <span>{song.title}</span>
                </div>
                <div className="box">
                  <span>{song.artist}</span>
                </div>

                <div className="box">
                  <span>{song.duration}</span>
                </div>

                <span className="icon">
                  <PlayCircleOutlineIcon></PlayCircleOutlineIcon>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SongList;
