import React from "react";

const YouTubeEmbed = ({ videoId}) => { // videoId must be a string
  return (
    <div className="relative w-full pb-[56.25%] h-0 flex justify-center">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;