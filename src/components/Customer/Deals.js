import React from "react";
// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

class Deals extends React.Component {
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
                    src={require("assets/img/theme/deals_bg.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h1>Deals, offers, discounts</h1>
                   
                    <div className="mt-4">
                    <p>
                    Explore exclusive offers for Arzoou users, updated daily!
                    </p>
                    <Button
                    className="mt-5"
                    color="success"
                    size="lg"
                    >
Explore Offers
                    </Button>
                    </div>
                   </div>
                </Col>
              </Row>
              <hr />
            </Container>
          </section>
            </div>
    );
  }
}

export default Deals;
