import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import bg from "assets/img/theme/hero.jpg"
class Hero extends React.Component {
  render() {
    return (
      <>
      <div >

          <section className="section section-hero sm" >
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
                <Button color="success">
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
