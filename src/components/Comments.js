import React, {useState} from "react";
import Comment from "./Comment"
import Filter from "./Filter";

function Comments({comments}) {
    const [commentVis, setCommentVis] = useState(true)
    const [search, setSearch] = useState("")

    const commentList = comments.map((comment) => (
        <Comment
            id={comment.id}
            user={comment.user}
            comment={comment.comment}
        />
    ))
    
    const commentFilter = commentList.filter(comment => comment.props.user.includes(search))


    function toggleComments() {
        setCommentVis((commentVis) => !commentVis)
    }



 



    return (
        <div>
            <button onClick={toggleComments}>
                {commentVis ? "Hide Comments" : "Show Comments"}
            </button>
            <Filter 
                search={search}
                setSearch={setSearch}
            />
            <h2>{comments.length} Comments</h2>
                {commentVis ? commentFilter : ""}
        </div>
    )
}

export default Comments