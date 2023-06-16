import React, { useState } from "react";
import CommentCard from "./CommentCard";

function Comments( {video} ) {

const comments = video.comments;
const [isCommentClicked, setIsCommentClicked] = useState(false);
const [isShowingComments, setIsShowingComments] = useState(false);

function handleClick() {
    setIsCommentClicked(!isCommentClicked);
    setIsShowingComments(!isShowingComments);
}

const commentDisplay = comments.map((comment) => {
    return (
        <CommentCard key={comment.id} user={comment.user} text={comment.comment}/>
    )
})

    return ( 
        <div className="commentsection">

            <button onClick={handleClick} className="showhidebutton">{isShowingComments ? "Hide Comments" : "Show Comments"}</button>
            <hr />
            {isCommentClicked ? (
                <div>
                    <h2 className="commentcount">{comments.length} Comments</h2>
                    <div className="commentdisplay">{commentDisplay}</div>

                
                </div>
            ) : null}
            
        </div>
    )
}

export default Comments;