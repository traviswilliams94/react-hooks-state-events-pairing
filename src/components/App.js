import video from "../data/video.js";
import VideoData from "./VideoData.js";

function App() {
  console.log("Here's your data:", video);

  return (

    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
<br  />
    <VideoData video={video}/> 
    </div>


    
  );
}

export default App;
