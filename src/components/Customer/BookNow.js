import React from "react";
// reactstrap components
import { Card, Row, CardBody, Container, Col, Button } from "reactstrap";

class BookNow extends React.Component {
  render() {
    return (
        <div className="content">
                      <section className="section section-lg">
                      <Container>
              <Row className="book-now">
              <Col className="order-md-1" md="8">
                  <div className="pr-md-5 mt-5">
                    <h1 className="title">Can’t make it to the salon? <br /><br />
                    The salon comes to you!
                    <br /><br />
                    </h1>
                   
                    <div className="detail">
                    <h3 className="about">
                    Book at-home beauty and personal care services
                    </h3>
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
             
                <Col className="order-md-2 " md="4">
                  <div className="pr-md-5 mt-2 right-side">
                   <Card className="book-card" >
                   <CardBody className="d-flex  book-card-body">
                   <div className="card-profile-image">
                          <img
                            alt="..."
                            className="rounded-circle profile"
                            src={require("assets/img/mike.jpg")}
                          />
                       
                      </div>
                      <div className="ml-3">
                                        <h5>Renate Mollie</h5>
                                        <img
                                             src={require("assets/img/rating.png")}
                                            alt=""
                                            className="img-fluid mb-2 rating"
                                        />
                                        <p>Price: €</p>
                                    </div>
                       </CardBody>
                   </Card>
                   <Card className="book-card" >
                   <CardBody className="d-flex  book-card-body">
                   <div className="card-profile-image">
                          <img
                            alt="..."
                            className="rounded-circle profile"
                            src={require("assets/img/mike.jpg")}
                          />
                       
                      </div>
                      <div className="ml-3">
                                        <h5>Renate Mollie</h5>
                                        <img
                                             src={require("assets/img/rating.png")}
                                            alt=""
                                            className="img-fluid mb-2 rating"
                                        />
                                        <p>Price: €</p>
                                    </div>
                       </CardBody>
                   </Card>                 
                   <Card className="book-card" >
                   <CardBody className="d-flex  book-card-body">
                   <div className="card-profile-image">
                          <img
                            alt="..."
                            className="rounded-circle profile"
                            src={require("assets/img/mike.jpg")}
                          />
                       
                      </div>
                      <div className="ml-3">
                                        <h5>Renate Mollie</h5>
                                        <img
                                             src={require("assets/img/rating.png")}
                                            alt=""
                                            className="img-fluid mb-2 rating"
                                        />
                                        <p>Price: €</p>
                                    </div>
                       </CardBody>
                   </Card>
                   <Card className="book-card" >
                   <CardBody className="d-flex  book-card-body">
                   <div className="card-profile-image">
                          <img
                            alt="..."
                            className="rounded-circle profile"
                            src={require("assets/img/mike.jpg")}
                          />
                       
                      </div>
                      <div className="ml-3">
                                        <h5>Renate Mollie</h5>
                                        <img
                                             src={require("assets/img/rating.png")}
                                            alt=""
                                            className="img-fluid mb-2 rating"
                                        />
                                        <p>Price: €</p>
                                    </div>
                       </CardBody>
                   </Card>
                   <Card className="book-card" >
                   <CardBody className="d-flex  book-card-body">
                   <div className="card-profile-image">
                          <img
                            alt="..."
                            className="rounded-circle profile"
                            src={require("assets/img/mike.jpg")}
                          />
                       
                      </div>
                      <div className="ml-3">
                                        <h5>Renate Mollie</h5>
                                        <img
                                             src={require("assets/img/rating.png")}
                                            alt=""
                                            className="img-fluid mb-2 rating"
                                        />
                                        <p>Price: €</p>
                                    </div>
                       </CardBody>
                   </Card>
                   
                   </div>
                </Col>
              </Row>
              </Container>
              <hr />
          </section>
            </div>
    );
  }
}

export default BookNow;
