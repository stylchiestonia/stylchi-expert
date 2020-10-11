/*eslint-disable*/
import React from "react";
// reactstrap components
import { Container, Row, Col, Badge } from "reactstrap";

class ReferFriend extends React.Component {
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
                    src={require("assets/img/theme/refer.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <h1>Refer a friend</h1>
                    <p>
                    A spa day with your friend and a discount? Awesome! <br /><br />
                    Invite your friend to Arzoou and earn €10 in credits when they complete their first booking! Your friend gets €10 off on their first booking too!
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                            >
                              <img src={require("assets/img/theme/arzoou.png")}/>
                            </Badge>
                          </div>
                          <div>
                            <p className="mb-0">
                            Log into your Arzoou account
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                            >
                              <img src={require("assets/img/theme/copy.png")}/>
                            </Badge>
                          </div>
                          <div>
                            <p className="mb-0">Copy & share your referral code via email</p>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                            >
                            <img src={require("assets/img/theme/giftcard.png")}/>
                            </Badge>
                          </div>
                          <div>
                            <p className="mb-0">
                            Your friend receives a credit and you get yours <br />when your friend completes his first booking
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
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

export default ReferFriend;
