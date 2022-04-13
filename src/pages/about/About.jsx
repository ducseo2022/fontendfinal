import { useLocation } from "react-router";
import "./about.css"
import Whatisjs from "../../components/whatisjs/Whatisjs";
import Footer from "../../components/Footer/Footer";

export default function About() {

  return (
    <>
      <div className="WhatisJS">
        <Whatisjs />
      </div>
        <Footer />
    </>
  );
}