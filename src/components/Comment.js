import React, { useState } from "react";

function Comment({user, comment, id, handleDeleteComment}) {
    // Things that won't change: username, comment, id
    // Things that change: # of likes/dislikes
    const [likeCount, setLikeCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)


    function handleCommentLike() {
        setLikeCount(likeCount + 1)
    }

    function handleCommentDislike() {
        setDislikeCount(dislikeCount + 1)
    }





    return (
            <div key={id} className="commentDiv">
                <h3>{user}</h3>
                <p>{comment}</p>
                <button onClick={handleCommentLike}>{likeCount}👍</button>
                <button onClick={handleCommentDislike}>{dislikeCount}👎</button>
            </div>
    )
}

export default Comment