import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import "./homepage.css";
import Departments from "../../components/Department/Department";
import Features from "../../components/features/Features";
import Footer from "../../components/Footer/Footer";

import { BackTop } from "antd";

export default function Homepage() {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="home">
      <Departments />
      </div>

      <div className="news">
        <Features />
      </div>

     <BackTop/>
      <div className="bottom">
        <Footer />
      </div>

    </>
  );
}
