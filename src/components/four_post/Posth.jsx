import { Link } from "react-router-dom";
import { useEffect , useState } from "react";
import { useHistory } from "react-router-dom";
import { getSidePost } from "../../service/postApi";
import "./posth.css";

export default function Posth({img}) {
  let history = useHistory();
  
   const [listPost,setListPost]=useState([]);

   useEffect(() => {
      const getListPost = async() => {
        const res = await getSidePost()
        setListPost(res.data)
      }
   getListPost()
    },[]);

   const handleClick = (x,postId ) =>{

      history.push(`post/${postId}`)

   }
  
  return (
    
    <div className="list-user-container">

              
                <div className="fourpost">
                    {listPost.length > 0 &&
                        listPost.map((item) => {
                            return (

                            <div className="post">
                              <img
                                className="postImg"
                                src={item.image}
                                alt=""
                              />
                              <div className="postInfo">
                    
                                <div className="postTitle">
                                  <div className="link" onClick={e=>handleClick(e,item.id)}>
                                    {item.title}
                                  </div>
                                  <br/>
                                   
                                </div>
                              </div>
                            </div>

                            )
                        })
                    }

                </div>

            </div>



  );
}
