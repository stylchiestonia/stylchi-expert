import React from "react";
import bg from "assets/img/header-background.png";

// reactstrap components
import {Container, Row } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          <section className="section section-hero"  style={{ 
              backgroundRepeat:'no-repeat',
              backgroundImage: `url(${bg})`}}>
            <Container fluid className="shape-container d-flex align-items-center py-lg" 
            
            >
              <div className="col pl-5">
                <Row className="align-items-center justify-content-start" >
                <h1 style={{
                    lineHeight:'50px',
                    color:"#22223b"
                }}>Beauty & Personal Care: <br /> Anytime, Anywhere</h1>
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
