/*eslint-disable*/
import React from "react";
// reactstrap components
import { Container, Row, Nav, NavItem, NavLink, Col, TabPane, TabContent } from "reactstrap";
import classnames from "classnames";

class ServiceBooking extends React.Component {

    state = {
        iconTabs: 1,
        plainTabs: 1
      };
      toggleNavs = (e, state, index) => {
        e.preventDefault();
        this.setState({
          [state]: index
        });
      };
  render() {
 
    return (
        <div className="content">
                      <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="12">
                  <div className="pr-md-5">
                    <h1>To book a service at the venue</h1>              
                 </div>
                 </Col>
                </Row>
                <Row>
                <Col className="order-md-1" md="6">
                <p>
                    In three simple steps, book an appointment at a salon <br />or spa of your choice!
                    </p>
                    </Col>
                 <Col className="order-md-2 ml-auto" md="4">
                 <div className="mb-5">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                     <img className="mr-1" alt="..." src={require("assets/img/theme/house.png")} />
                    Venue
                  </NavLink>
                </NavItem>
           
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0 justify-content-center align-items-center", {
                      active: this.state.iconTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                     <img className="mr-2" alt="..." src={require("assets/img/theme/home.png")} />
                    Home
                  </NavLink>
                </NavItem>
                  
              </Nav>
           
            </div>
            
                </Col>
              </Row>
              <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
              <Row >
                  <Col md="6" lg="6" xl="4">
                  <div className="text-center">
                  <div className="img">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/venue_book.png")}
                  />
                  </div>
                  <h3 class="title">Book</h3>
                   <p>
                   Search for the service you need, select a suitable expert you want to visit, and book a Venue appointment.
                   </p>                
                   </div>
                
                  </Col>
                
                  <Col md="6" lg="6" xl="4">
                  <div className="text-center">
                  <div className="img">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/venue_order.png")}
                  />
                  </div>
                  <h3 class="title mt-3">Be On Time</h3>
                   <p>
                   Reach the venue at the scheduled time.
                   </p>                
                   </div>
                
                  </Col>
                  <Col md="6" lg="6" xl="4">
                  <div className="text-center">
                  <div className="img">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/venue_pay.png")}
                  />
                  </div>
                  <h3 class="title mt-3">Pay</h3>
                   <p>
                   Pay in cash or with a credit card and enjoy the service!
                   </p>                
                   </div>
                
                  </Col>
              </Row>
         </TabPane>
         <TabPane tabId="iconTabs2">
              <Row >
                  <Col md="6" lg="6" xl="4">
                  <div className="text-center">
                  <div className="img">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/home_book.png")}
                  />
                  </div>
                  <h3 class="title mt-3">Book</h3>
                   <p>
                   Search for the service you need, select a suitable expert, choose a payment method, and book a Home appointment.
                   </p>                
                   </div>
                
                  </Col>
                
                  <Col md="6" lg="6" xl="4">
                  <div className="text-center">
                  <div className="img">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/home_expert.png")}
                  />
                  </div>
                  <h3 class="title mt-3" >Your Beauty Expert Arrives</h3>
                   <p>
                   The Beauty Expert arrives at your location. Choose a suitable spot to avail your services, and enjoy!
                   </p>                
                   </div>
                
                  </Col>
                  <Col md="6" lg="6" xl="4">
                  <div className="text-center">
                  <div className="img">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("assets/img/theme/home_pay.png")}
                  />
                  </div>
                  <h3 class="title">Pay</h3>
                   <p>
                   Pay the expert in cash, unless you chose to pay with a credit card or your Stylchi wallet at the time of booking.
                   </p>                
                   </div>
                
                  </Col>
              </Row>
         </TabPane>
         </TabContent>
            </Container>
          </section>
            </div>
    );
  }
}

export default ServiceBooking;
