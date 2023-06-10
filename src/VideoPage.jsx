import { useState } from "react";
import ReactPlayer from "react-player";
import "./VideoPage.css";
import thumbNail from "../public/thumbnail.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const VideoPage = () => {
  const [currentVideo, setCurrentVideo] = useState(
    "https://www.youtube.com/watch?v=t1nFAMws5FI"
  );

  const videos = [
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=cv-6bAeYsOY",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=tOo9c6SK_do",
    "https://www.youtube.com/watch?v=0okuAwqTHs0",
  ];

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
  };

  return (
    <div className="video-page">
      <h1>Video Page</h1>
      <div className="video-player-wrapper">
        <ReactPlayer url={currentVideo} controls />
      </div>
      <div className="thumbnail-scroll">
        <div className="scroll-arrow left-arrow">
          <FaChevronLeft />
        </div>
        {videos.map((video, index) => (
          <div
            key={index}
            className="thumbnail-circle"
            onClick={() => handleVideoClick(video)}
          >
            <img src={thumbNail} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
        <div className="scroll-arrow right-arrow">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
