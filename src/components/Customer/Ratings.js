/*eslint-disable*/
import React from "react";
// reactstrap components
import { Container, Row, Col} from "reactstrap";
import StarRatings from 'react-star-ratings';

class Ratings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        rating: 4.3
        };
      }

      changeRating( newRating ) {
        this.setState({
          rating: newRating
        });
      }
  render() {
    return (
        <div className="content">
                      <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
              <Col className="order-md-1" md="6">
                  <div className="pr-md-5 mt-4>">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/theme/rating-stars.png")}
                  />
                  <div className="list-unstyled mt-5">
                  <h1>What our partners are saying</h1>
                  </div>
                  {/* <div className="icons-block d-flex mt-4">
            <div className="icon position-relative">
              <span><i className="fa fa-angle-left"></i></span>
            </div>
            <div className="icon position-relative">
              <span><i className="fa fa-angle-right"></i></span>
            </div>
          </div> */}
                  </div>
                </Col>
              
                <Col className="order-md-2" md="6">
                <div className="pr-md-5">
                <div className="card-profile-image">
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/alice.jpg")}
                          />
                      </div>
                  <div className="mt-5">
                  <p>
                  Lucky to have come across this
Brilliant software and a 1st class company. I would recommend to anyone and my staff love it!
                   </p>
                   </div>
                   <div className="mt-5">

                   <h4>Jamie Anderson </h4>
                   
                   <StarRatings     
          rating={this.state.rating}
          starRatedColor="#EB9A13"
          numberOfStars={5}
          name='rating'
          starDimension="20px"
          starSpacing="2px"
        />
                  </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
            </div>
    );
  }
}

export default Ratings;
