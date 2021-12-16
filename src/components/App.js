import React from "react";
import video from "../data/video.js";
import Comments from "./Comments"
import Video from "./Video.js";

function App() {

  return (
    <div className="App">
      <Video video={video}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
