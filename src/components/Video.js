import React, { useState } from "react";

function Video({video}) {
    const [likeCount, setLikeCount] = useState(video.upvotes)
    const [dislikeCount, setDislikeCount] = useState(video.downvotes)

    function handleUpVote() {
        setLikeCount(likeCount +1)
    }

    function handleDownVote() {
        setDislikeCount(dislikeCount +1)
    }

    return (
        <div>
            <iframe
            width="919"
            height="525"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={handleUpVote}>{likeCount}👍</button>
            <button onClick={handleDownVote}>{dislikeCount}👎</button>
        </div>
    )
}

export default Video