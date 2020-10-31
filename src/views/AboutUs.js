import React from "react";

import { Container, Row, Col, UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/brand/img-1.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/brand/img-2.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/brand/img-3.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class AboutUs extends React.Component {
    render() {
        return (
          <>
            <section className="section section-shaped">
              <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-md">
                <Row className="justify-content-between align-items-center">
                  <Col className="mb-5 mb-lg-0" lg="5">
                  <h1 style={{
                      color: "#fff",
                      textAlign: "center"
                  }}>About Us</h1>
                    <p className="text-white mt-4">
                    The idea to build an online marketplace was conceived when we were sitting in the lockdowns of year 2020. We thought about what Home could be.
                    Home could be school, office, gym, movie theatre, the club, yoga class, a concert, a graduation party and now, we realized, a beauty salon.
                    </p>
                    <p className="text-white">
                    So, we got on a mission to make beauty and personal care accessible for millions in the region, especially those who are on the run or have packed
                    schedules.
                    </p>
                    <p className="text-white">
                    Our name, Stylchi, is a combination of two words: Style and Chi. We didn’t just create a brand that gives you the style you want, but also help you get a
                    positive energy so you can achieve your dreams and inspire others.
                    </p>
                  </Col>
                  <Col className="mb-lg-auto" lg="6">
                    <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                      <UncontrolledCarousel items={items} />
                    </div>
                  </Col>
                </Row>
              </Container>
              
            </section>
          </>
        );
      }

}

export default AboutUs;
