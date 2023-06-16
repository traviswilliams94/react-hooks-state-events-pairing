

function CommentCard({ user, text }){
    return(
        <div className="singlecomment">
            <h3>{user}</h3>
            <p>{text}</p>
        </div>
    )
}




export default CommentCard