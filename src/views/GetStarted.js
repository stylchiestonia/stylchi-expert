import React from "react";
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

class Vision extends React.Component {
  render() {
    return (
        <div className="content">
                      <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    
                    className="img-fluid floating"
                    src={require("assets/img/theme/ipad.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h1>Get started with Stylchi</h1>
                    <p>
                    <br />
                    Want to join, get a demonstration or just more information? Tap on the button below to register your interest and we will contact you as soon as possible!                    </p>
                  
                  </div>
                  { localStorage.jwtToken ? false :
                  <Button
                    className="mt-5"
                    color="success"
                    size="lg"
                    to="/auth/register"
                    tag={Link}
                    >
                        Register
                    </Button> }
                </Col>
              </Row>
            </Container>
          </section>
            </div>
    );
  }
}

export default Vision;
