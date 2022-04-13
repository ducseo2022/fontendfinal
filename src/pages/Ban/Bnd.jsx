import { Link } from "react-router-dom";
import "./ban.css";

export default function Bnd() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://firebasestorage.googleapis.com/v0/b/bcm-team-4-upload.appspot.com/o/image%2Fbnd.png?alt=media&token=9d5d7806-c190-4f37-9a6f-852d53b2f820"
          alt=""
        />
        <h1 className="singlePostTitle">
          Ban Nội Dung
          {/* <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div> */}
        </h1>
        {/* <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div> */}
        <p className="singlePostDesc">
        💡 Dựa trên mô hình Agile - một phương pháp phát triển phần mềm, bước đầu tiên cần làm là Brainstorm. Công việc này đòi hỏi tư duy ý tưởng sáng tạo nhưng cũng phải thật chu đáo, cẩn thận. Không ai khác, Ban Nội dung là những “thủ lĩnh” trong công việc này. <br/>
        <br/>
💡 Ban Nội dung chính là một phần cấu tạo nên JS với nhiệm vụ lên nội dung, lên ý tưởng, concept cho các sự kiện. Làm việc ở ban Nội dung, bạn còn cần có một tinh thần vô cùng trách nhiệm, kỹ năng làm việc nhóm vì họ thường xuyên phải phối hợp với các phân ban khác để làm nên một chương trình thành công.<br/>
<br/>
💡 Vậy khi trở thành một phần của ban Nội dung, bạn nhận được những gì?<br/>
▪️ Nâng cao khả năng tư duy logic, chu toàn trong công việc.<br/>
▪️ Nhận được nhiều kinh nghiệm làm việc nhóm.<br/>
▪️ Hiểu được cách vận hành sự kiện học thuật cũng như sự kiện văn hóa.<br/>


        </p>
      </div>
    </div>
  );
}
