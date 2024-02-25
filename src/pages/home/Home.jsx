import React, { useState } from "react";
import "./Home.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Tabs } from "antd";
import SongList from "./songlist/SongList";
import Movie from "../movie/Movie";
import MovieList from "./movieList/MovieList";

const { TabPane } = Tabs;

const Home = () => {
  const [activeKey, setActiveKey] = useState("1");

  const onChange = (key) => {
    console.log(key);
    setActiveKey(key);
  };

  return (
    <div className="homeWrapper">
      <div className="search-box">
        <div className="search-bar">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="wrap">
        <Tabs
          defaultActiveKey="1"
          onChange={onChange}
          tabBarStyle={{ borderBottom: "none" }}
        >
          <TabPane
            tab={
              <span
                className={activeKey === "1" ? "active-tab" : "inactive-tab"}
              >
                Play List
              </span>
            }
            key="1"
          >
            <SongList></SongList>
          </TabPane>
          <TabPane
            tab={
              <span
                className={activeKey === "2" ? "active-tab" : "inactive-tab"}
              >
                Movies
              </span>
            }
            key="2"
          >
            <MovieList></MovieList>
          </TabPane>
          {/* Additional TabPanes as needed */}
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
