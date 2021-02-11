import React from 'react';
import loader from '../../src/loader.svg';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="row container loader-container">
        <div className="loader ">
          <img
            src={loader}
            alt="loading"
            width="100"
            height="100"
            className=""
          />
        </div>
      </div>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="card mr-5" style={{}}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title="video player"
          src={videoSrc}
          frameborder="0"
        ></iframe>
      </div>
      <div className="card-body">
        <h4 className="card-title">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
