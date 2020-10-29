/*eslint-disable*/
import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import bg from "assets/img/theme/mask-bg.png";
class Safety extends React.Component {
  render() {
    return (
        <div className="content">
        <section className="section section-hero" style={{
            backgroundImage:`url(${bg})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            height:"100%"
        }}>
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-1" md="6">
                <div className="pr-md-5 mt-4">  
                <h1>Safety, first</h1>
                </div>
                  <div className="pr-md-5 mt-4">              
                    <p>
                    With the spread of COVID-19, the importance of safe practices has become the primary concern for service providers and customers. As a strong advocate for safe and hygienic practices in the beauty and personal care industry, Stylchi commits to follow the guidelines given by The Estonian Health Board.
                    </p>
                   
                    </div>

                </Col>
              </Row>
            </Container>
          </section>
            </div>
    );
  }
}

export default Safety;
