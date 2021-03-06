import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { PaginationApi } from "../../service/postApi";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function PaginationNews() {
  let history = useHistory();
  const [totalPage, setTotalPage] = useState(0);
  const [data,setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  

  
  let renderTotalPage = [];
  useEffect(() => {
    const getListPost = async () => {
      const res = await PaginationApi(currentPage);
      setData(res.data.items);
      setTotalPage(res.data.meta.totalPages);
    };

    getListPost();
  }, [currentPage]);

  const handleClick = (x,postId ) =>{

    history.push(`post/${postId}`)

 }



  const handlePageChange = (X , i) =>{

    setCurrentPage(i);
 }

  for (let number = 1; number <= totalPage ; number++) {
    renderTotalPage.push(
      <Pagination.Item key={number} active={number === currentPage} onClick={x => handlePageChange(x, number)}>
        {number}
      </Pagination.Item>,
    );
  }

   

    return(
      <div className="list-user-container">
              
      <div className="list-user-content">
          {data.length > 0 &&
              data.map((item) => {
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

      
     <div>
     <Pagination>{ renderTotalPage}</Pagination>
    </div>

  </div>



     

    )

    

}
