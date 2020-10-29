import React from "react";
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

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
                    className="img-fluid hero-img"
                    src={require("assets/img/theme/hero.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h1>One mission, one vision.</h1>
                    <h1>Become a Partner, today!</h1>
                    <p>
                    <br />
                    Become part of our beauty and personal care marketplace and get all the tools you need to generate additional revenues and get the visibility on internet.
                    </p>
                    <p>
                    <br />
                    Stylchi gives Salon professionals a completely new opportunity to reach large group of customers in a cost-effective way - we take care of marketing, and you pay when you acquire customers. We also help you get repeat business from the customers by offering bundle deals and special offers. 
                    </p>
                    <p>
                        <br />
                        You focus on what you do best - by offering quality services either in a Salon or at Home. We help you to build a digital presence through ratings and reviews via our platform that you can share with your network - everything at your fingertips.
                    </p>
                  </div>
                  <Button
                    className="mt-5"
                    color="success"
                    size="lg"
                    >
                        Register
                    </Button>
                </Col>
              </Row>
            </Container>
          </section>
            </div>
    );
  }
}

export default Vision;
