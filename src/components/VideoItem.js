import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="card pb-3 video-item"
      style={{}}
    >
      <img
        className="card-img"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="card-body">
        <div className="card-title">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
