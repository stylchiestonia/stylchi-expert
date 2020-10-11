/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

// reactstrap components
import { Container, Row, Nav, NavItem, NavLink, Col, Button } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className=" footer">
      <Container>
        <Row>
          <Col>
            <img src={require("assets/img/footer_logo.png")} />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-md-between">
          <Col className="col-md-6 col-lg-6 col-xl-4">
            <hr />
            <div className="copyright">
            Stylchi is a company registered in Estonia with registration number 16062115. 
            </div>
          </Col>
          </Row>
        <Row className="align-items-center justify-content-md-between">
          <Col>
            <div className="copyright">
              © {new Date().getFullYear()}{" "}          
               Stylchi.com. All Rights Reserved.
            </div>
          </Col>
          </Row>

      </Container>
    </footer>
    );
  }
}

export default Footer;
