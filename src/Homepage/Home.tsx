import React from "react";
import ResponsiveAppBar from "./Card/Navbar2/NavbarMul";
import Hero from "../components/Herosection/Hero";
import Seo from "../components/Seofriendly/Seo";
import PortfoliNavbar from "../components/PortfoliNavbar/PortfoliNavbar";
import Small from "../components/Small/Small";
import Word from "../components/Word/Word";
import Tableb from "../components/Tables/Tables";
import { Navbar } from "react-bootstrap";
import Navbars from "../components/Navbar/Navbar";
import SignUp from "../components/SignupScreen/Signup";
// import RecipeReviewCard from "./Card/Card";

const Home = () => {
  return (
    <div>
      <Navbars />
      <Hero />
      <Seo />
      <SignUp />
      <PortfoliNavbar />
      <Small />
      <Word />
      <Tableb />
      {/* < Pratice /> 
      <RecipeReviewCard /> */}
    </div>
  );
};

export default Home;
