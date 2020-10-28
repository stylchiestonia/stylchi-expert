import React from "react";
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import Vision from "views/Vision.js";
import ServiceBooking from "components/Customer/ServiceBooking.js";
import Ratings from "components/Customer/Ratings.js";
import Safety from "components/Customer/Safety.js";
import Benefits from "views/Benefits.js";
import GetStarted from "views/GetStarted.js";
import Footer from "views/Footer.js";
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
        <div>
          
             <HomeNavbar />
             <Vision />
             <Benefits />
             <GetStarted />
             <ServiceBooking />
             <Ratings />
             <Safety />  
             <Footer />         
          
      
        </div>
        
         
             
             
         
        </>
      );
    }
  }
  
  export default Home;
  