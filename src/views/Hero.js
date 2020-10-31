import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
class Hero extends React.Component {
  render() {
    return (
      <>
      <div >

          <section className="section section-hero" >
            <Container className="d-flex align-items-center">
              <div className="col">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">         
                  <h1 className="hero-title">Our Mission</h1>
                  <h1>Become a Partner, today!</h1>
                  <p>To simplify access to reliable beauty</p>
                  <p>and personal care services</p>
                  
                  </Col>                 
                </Row>
                <Row className="align-items-center justify-content-center">
                <Button color="success"
                 to="/auth/register"
                 tag={Link}>
                      Get Started
                  </Button>
                </Row>
              </div>
            </Container>
           
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
