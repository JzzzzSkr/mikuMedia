import React from "react";
import "./Movie.scss";
import VideoJS from "./videoPlayer/VideoJS";

const Movie = () => {
  const playerRef = React.useRef(null);

  const episodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const videoJsOptions = {
    // 自动播放：为true时，加载完毕自动播放
    autoplay: true,
    // 播放器子控件是否显示：为true时显示暂停、播放速率等按钮
    controls: true,
    // 响应性：为true时，播放视频进度条会自动移动
    responsive: true,
    // 流式布局：为true时尽可能大得填满父标签的剩余空间
    fluid: true,
    // 视频源
    sources: [
      {
        // 视频文件的路径，可以是一个前端相对路径、后台视频文件URL、直播源等
        src: "./assets/dog.mp4",
        // 视频源类型
        type: "video/mp4",
      },
    ],
  };

  // 播放器实例化完成后的事件动作，注意！不是视频加载成功
  const handlePlayerReady = (player) => {
    playerRef.current = player;
    // 播放器的子事件在这里定义

    player.on("canplaythrough", () => {
      console.log("视频加载完成！");
    });

    player.on("error", () => {
      console.log(`视频文件加载失败，请稍后重试！`);
    });

    player.on("stalled", () => {
      console.log(`网络异常，请稍后重试！`);
    });
  };

  return (
    <div className="therator">
      <div className="video">
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>

      <div className="episode">
        {/* <h3>Episodes</h3> */}
        {/* <ul>
          {episodes.map((episode) => (
            <div class="child-box">
            <a href="">{episode}</a>
          </div>
          ))}
        </ul> */}

        {/* <div class="main"> */}
          {/* {episodes.map((episode) => (
            <div class="child-box">
              <a href="#movie">{episode}</a>
            </div>
          ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Movie;
