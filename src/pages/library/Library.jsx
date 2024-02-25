import React from "react";
import "./Library.scss";
import Feature from "./Feature/Feature";

const Library = () => {
  return (
    <div className="libraryWrapper">
      <div className="left">
        <img src="./assets/l1.png" alt="" />
        <div className="kiki">
          <img src="./assets/l2.jpeg" alt="" />
        </div>
        <p>Hi,my name is kiki !</p>

        <Feature></Feature>
      </div>
      <div className="right">
        <div className="historyList">
          <h3>History listen</h3>
          <ul>
            <li className="songbox">
              <div className="musImg">
                <img src="./assets/m1.jpeg" alt="One Summer's Day" />
              </div>
              <div className="MusicName">
                <span className="name">One Summer's Day</span>
                <span className="creater">Joe Hisaishi</span>
              </div>
            </li>

            <li className="songbox">
              <div className="musImg">
                <img src="./assets/m1.jpeg" alt="A Town with an Ocean View" />
              </div>
              <div className="MusicName">
                <span className="name">A Town with an Ocean View</span>
                <span className="creater">Joe Hisaishi</span>
              </div>
            </li>

            <li className="songbox">
              <div className="musImg">
                <img src="./assets/m1.jpeg" alt="My Neighbor Totoro" />
              </div>
              <div className="MusicName">
                <span className="name">My Neighbor Totoro</span>
                <span className="creater">Joe Hisaishi</span>
              </div>
            </li>

            <li className="songbox">
              <div className="musImg">
                <img
                  src="./assets/m1.jpeg"
                  alt="Princess Mononoke Theme Song"
                />
              </div>
              <div className="MusicName">
                <span className="name">Princess Mononoke Theme Song</span>
                <span className="creater">Yoshikazu Mera</span>
              </div>
            </li>

            <li className="songbox">
              <div className="musImg">
                <img src="./assets/m1.jpeg" alt="The Path of the Wind" />
              </div>
              <div className="MusicName">
                <span className="name">The Path of the Wind</span>
                <span className="creater">Joe Hisaishi</span>
              </div>
            </li>

            <li className="songbox">
              <div className="musImg">
                <img src="./assets/m1.jpeg" alt="Nausicaä Requiem" />
              </div>
              <div className="MusicName">
                <span className="name">Nausicaä Requiem</span>
                <span className="creater">Joe Hisaishi</span>
              </div>
            </li>

            <li className="songbox">
              <div className="musImg">
                <img src="./assets/m1.jpeg" alt="Carrying You" />
              </div>
              <div className="MusicName">
                <span className="name">Carrying You</span>
                <span className="creater">Joe Hisaishi</span>
              </div>
            </li>

            <li className="songbox">
              <div className="musImg">
                <img src="./assets/m1.jpeg" alt="Always With Me" />
              </div>
              <div className="MusicName">
                <span className="name">Always With Me</span>
                <span className="creater">Youmi Kimura</span>
              </div>
            </li>

            <li className="songbox">
              <div className="musImg">
                <img src="./assets/m1.jpeg" alt="Merry-Go-Round of Life" />
              </div>
              <div className="MusicName">
                <span className="name">Merry-Go-Round of Life</span>
                <span className="creater">Joe Hisaishi</span>
              </div>
            </li>

            <li className="songbox">
              <div className="musImg">
                <img src="./assets/m1.jpeg" alt="Arrietty's Song" />
              </div>
              <div className="MusicName">
                <span className="name">Arrietty's Song</span>
                <span className="creater">Cécile Corbel</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Library;
