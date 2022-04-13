import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { getCenterPost } from "../../service/postApi";
import { useHistory } from "react-router-dom";
import "./spost.css";

export default function Posth() {
  let history = useHistory();
  const [listPost,setListPost]=useState([]);

  useEffect(()=>{
     const getListPost = async() =>{
       const res = await getCenterPost()
       setListPost(res.data)
       console.log("check six post :",res.data)
     }
       getListPost()
   },[]);
   
   const handleClick = (x,postId ) =>{

    history.push(`post/${postId}`)
    console.log("check")

 }

    return (
      <div className="list-user-container">
                
                <div className="six post">
                    {listPost.length > 0  &&
                        listPost.map((item) => {
                            return (
                              <div className="post">
                              <div className="postInfo">
                                
                                <span className="postTitles">
                                <div className="link" onClick={e=>handleClick(e,item.id)}>
                                    {item.title}
                                  </div>
                                    <br/>
                                            
                                </span>
                                <hr />
                              </div>
                            </div>

                            )
                        })
                    }

                </div>

            </div>
      
    );
  }



  