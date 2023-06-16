import React, { useState } from "react";
import Comments from "./Comments"


function VideoData ({video}) {
const thumbsUp = <span role="emoji" aria-label="thumbs-up">👍</span>
const thumbsDown = <span role="emoji" aria-label="thumbs-down">👎</span>

const [isLikeClicked, setIsLikeClicked] = useState(video.upvotes)
const [iDislLikeClicked, setIsDislikeClicked] = useState(video.downvotes)

function handleLikeClick(){
    setIsLikeClicked(video.upvotes += 1)
}

function handleDislikeClick(){
    setIsDislikeClicked(video.downvotes += 1)
}

   return (
    <div>
        <h1>{video.title}</h1>
    <br />
        <p>{video.views} Views | Uploaded on {video.createdAt}</p>
    <br />
        <button onClick={handleLikeClick} className="likebutton">{video.upvotes} {thumbsUp}</button>
        <button onClick={handleDislikeClick} className="dislikebutton">{video.downvotes} {thumbsDown}</button>
    <br />
    <br />
   <Comments video={video} />
   </div>
   )
   
   
}

export default VideoData