import React from "react";
import PrivacyPolicy from 'assets/static/PrivacyPolicy.pdf';
import PartnerPolicy from 'assets/static/PartnerPolicy.pdf';
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  render() {
    return (
        <div className="main-footer">
        <section >
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                <div className="pr-md-5 mt-3">  
                <img alt="" src={require("assets/img/theme/logo-footer.png")} />
                </div>
                <div className="pr-md-5 mt-5">  
                <p className="title">Our Locations</p>
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
                <Col className="align-items-right pl-md-5 order-md-2" md="6">
             
                <div className="mt-5">
                    <Row className="mt-5" >
                        <Col>
                            <p className="title-link">Get Started</p>
                            <div className="mt-5">
                            <Link className="link" to="/">Home</Link>
                            </div>
                            <div className="mt-2">
                            <Link className="link" to="/auth/login">Login</Link>
                              
                            </div>
                            <div className="mt-2">
                            <Link className="link" to="/auth/register"> Sign Up</Link>
                            </div>
                        </Col>
                        <Col>
                        <p className="title-link">Legal</p>
                            <div className="mt-5">
                                <a className="link" href={PrivacyPolicy} without="true" rel="noopener noreferrer" target="_blank">Privacy policy</a>
                            </div>
                            <div className="mt-2">
                            <a className="link" href={PartnerPolicy} without="true" rel="noopener noreferrer" target="_blank">Partners policy</a>
                            </div>
                        </Col>
                        <Col className="col">
                        <p  className="title-link">Contact</p>
                            <div className="mt-5">
                                <p className="link" target="_blank">hello@stylchi.com</p>
                            </div>
                            <div className="mt-2">
                            <p className="link" target="_blank">+371-08743234567</p>

                            </div>
                            <div>
                            <Button
                  className="btn-icon-only rounded-circle"
                  href="https://www.facebook.com/stylchi"
                  target="_blank"
                >
                    <span className="btn-inner--icon">
                  <i className="fa fa-facebook" aria-hidden="true" />
                  </span>
                </Button> {` `}
                <Button
                  className="btn-icon-only rounded-circle"
                  href="https://www.instagram.com/stylchi.ee/"
                >
                     <span className="btn-inner--icon">
                  <i className="fa fa-instagram" aria-hidden="true" />
                  </span>
                </Button> {` `}
                <Button
                  className="btn-icon-only rounded-circle"
                  href="https://www.linkedin.com/company/stylchi/"
                >
                    <span className="btn-inner--icon">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                  </span>
                </Button>
                
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
