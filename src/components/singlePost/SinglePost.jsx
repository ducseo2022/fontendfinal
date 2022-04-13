import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPostId } from "../../service/postApi";
import { useHistory } from "react-router-dom";
import {  useParams} from "react-router-dom";
import "./singlePost.css";


export default function SinglePost() {
  let history = useHistory();
  let {postId} = useParams();
  const [post, setPost] = useState(null);


  useEffect(() => {
    const getListPost = async () => {
      const res = await getPostId(postId);
      setPost(res.data)
      console.log("check:", res.data)
    }
    getListPost();

  }, [])


  return (
    (post != null &&
      <div className="list-user-container">


      <div className="list-user-content">
        
          

              <div className="singlePost">
                <div className="singlePostWrapper">
                  <img
                    className="singlePostImg"
                    src={post.image}
                    alt=""
                  />
                  <h1 className="singlePostTitle">
                   {post.title}
                  </h1>
                  <p className="singlePostDesc">
                  {post.content}
                
                  </p>
                </div>
              </div>


            
          )
        

      </div>

    </div>)
  );
}

