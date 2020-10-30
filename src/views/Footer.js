import React from "react";
import PrivacyPolicy from 'assets/static/PrivacyPolicy.pdf';
import PartnerPolicy from 'assets/static/PartnerPolicy.pdf';
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
        <div className="main-footer">
        <section className="section section-hero">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                <div className="pr-md-5 mt-3">  
                <img alt="" src={require("assets/img/theme/logo.png")} />
                </div>
                <div className="pr-md-5 mt-5">  
                <h1 className="title">Our Locations</h1>
                </div>
                  <div className="pr-md-5 mt-4">              
                    <Button className="footer-btn" color="info" size="lg">
                        Tallin
                    </Button>                   
                    </div>
                    <div className="pr-md-5 mt-3">              
                    <Button className="footer-btn" color="info" size="lg">
                        More Locations Coming Soon
                    </Button>                   
                    </div>

                </Col>
                <Col className="align-items-right order-md-2" md="6">
                <div className="pl-md-5 mt-3">  
                <Button
                  className="btn-icon-only rounded-circle"
                  href="https://www.facebook.com/stylchi"
                  target="_blank"
                >
                    <span className="btn-inner--icon">
                  <i className="fa fa-facebook" aria-hidden="true" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  href="https://www.instagram.com/stylchi.ee/"
                >
                     <span className="btn-inner--icon">
                  <i className="fa fa-instagram" aria-hidden="true" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle"
                  href="https://www.linkedin.com/company/stylchi/"
                >
                    <span className="btn-inner--icon">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                  </span>
                </Button>
                </div>
                <div className="pl-md-5 mt-5 align-items-right">
                    <Row>
                        {/* <Col md="4">
                            <h1 className="title-link">Company</h1>
                            <div className="mt-5">
                                <a className="link" href=""> About us</a>
                            </div>
                            <div className="mt-2">
                                <a className="link" href="">Blog</a>
                            </div>
                            <div className="mt-2">
                                <a className="link" href=""> Careers</a>
                            </div>
                        </Col> */}
                        {/* <Col md="4">
                        <h1 className="title-link">Product</h1>
                            <div className="mt-5">
                                <a className="link" href=""> FAQs</a>
                            </div>
                            <div className="mt-2">
                                <a className="link" href="">Support</a>
                            </div>
                        </Col> */}
                        <Col md="4">
                        <h1 className="title-link">Legal</h1>
                            <div className="mt-5">
                                <a className="link" href={PrivacyPolicy} without="true" rel="noopener noreferrer" target="_blank">Privacy policy</a>
                            </div>
                            {/* <div className="mt-2">
                                <a className="link" href="/">Booking policy</a>
                            </div> */}
                            <div className="mt-2">
                            <a className="link" href={PartnerPolicy} without="true" rel="noopener noreferrer" target="_blank">Partners policy</a>
                            </div>
                        </Col>
                      
                        
                    </Row>

                </div>
                </Col>
              </Row>
              <hr />
              <Row className="row-grid align-items-center"> 
              <div className="mx-auto mt-4"> 
              <p className="credits">
                
              Stylchi is a company registered in Estonia with registration number 16062115. <br/> 
              © 2020 Stylchi.com. All Rights Reserved.
              </p>
              </div>
              </Row>
            </Container>
          </section>
            </div>
    );
  }
}

export default Footer;
