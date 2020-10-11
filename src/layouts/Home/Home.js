import React from "react";
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import Hero from "components/Hero/Hero.js";
import ReferFriend from "components/Customer/ReferFriend.js";
import ServiceBooking from "components/Customer/ServiceBooking.js";
import Ratings from "components/Customer/Ratings.js";
import Safety from "components/Customer/Safety.js";
import BookNow from "components/Customer/BookNow.js";
import Deals from "components/Customer/Deals.js";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1
    };
  }
    
  componentDidMount() {
    document.body.classList.add("white-content");
  
  }
    render() {
      return (
        <>
        <div className="wrapper">
          <div
            className=""
            ref="mainPanel">
             <HomeNavbar />
             <Hero />
             <BookNow />
             <Deals />
             <ServiceBooking />
             <ReferFriend />
             <Ratings />
             <Safety />           
          
          </div>
        </div>
        
         
             
             
         
        </>
      );
    }
  }
  
  export default Home;
  