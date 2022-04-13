import "./features.css"
import { Container , Row , Col } from "react-bootstrap"
import Post from "../post/Post"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Posth from "../four_post/Posth"
import Spost from "../six_post/Spost"
import Button  from "react-bootstrap/Button";
import { BackTop } from "antd"
export default function Features() {


return(
  

    <Container>
      <div class="feature">
      <div class="title"> TIN TỨC </div>
    <div class="news">
      <div class="fnews">
              <Container>
          <Row>
            
            <Col>   <Posth /></Col>
           
          </Row>
         
        </Container>
      </div>

      <div class="snews">
      <Row>
            <Spost />
      </Row>
     
    

      </div>
    </div>
    <Link className="link" to="/news" >
    <div class="button" >
    <Button variant="secondary">Xem Thêm</Button>{""}
    </div>
    <BackTop />
    </Link>
     </div> 
     
    </Container>


)




}