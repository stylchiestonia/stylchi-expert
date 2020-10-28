import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

class Benefits extends React.Component {

  render() {
    return (
      <>
        <div className="dark">
        <Container>
        <h1 className="benefits">The benefits you can access </h1>

          <Row >
            <Col lg="4">
              <Card className="card-size">
                <CardHeader >            
                  <CardTitle tag="h4"  style={{                
                    marginTop:"10px"
                }}>
                   <div style={{
                    height:"30px",
                    width:"50px",                
                }} >
                <img alt="" src={require("assets/img/theme/crown.png")}  />
                </div>
                 
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <b>New Customers</b>
                 <p>
                 New revenue stream and the opportunity to acquire new loyal customers  <br /> <br /> 
                 </p>
                  
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
            <Card className="card-size">
                <CardHeader >
                   
                  <CardTitle tag="h4"  style={{                
                    marginTop:"10px"
                }}>
                   <div style={{
                    height:"30px",
                    width:"50px",                
                }} >
                <img alt="" src={require("assets/img/theme/last-minute.png")}  />
                </div>
                 
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <b>Last-minute Bookings</b>
                 <p>
                 Fulfilling last minutes slots<br /> <br /> 
                 </p>
                  
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
            <Card className="card-size">
                <CardHeader >
                   
                  <CardTitle tag="h4"  style={{                
                    marginTop:"10px"
                }}>
                   <div style={{
                    height:"30px",
                    width:"50px",                
                }} >
                <img alt="" src={require("assets/img/theme/booking.png")}  />
                </div>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <b>Booking System</b>
                 <p>
                 Easy to use booking system, built for your needs, the way you like it.<br /> <br /> 
                 </p>
                  
                </CardBody>
              </Card>
            </Col>

          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-size">
                <CardHeader >            
                  <CardTitle tag="h4"  style={{                
                    marginTop:"10px"
                }}>
                   <div style={{
                    height:"30px",
                    width:"50px",                
                }} >
                <img alt="" src={require("assets/img/theme/getknown.png")}  />
                </div>
                 
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <b>Get Known</b>
                 <p>
                 Strong digital presence without investing too much time on social media<br /> <br /> 
                 </p>
                  
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
            <Card className="card-size">
                <CardHeader >
                   
                  <CardTitle tag="h4"  style={{                
                    marginTop:"10px"
                }}>
                   <div style={{
                    height:"30px",
                    width:"50px",                
                }} >
                <img alt="" src={require("assets/img/theme/stars.png")}  />
                </div>
                 
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <b>Quality Driven</b>
                 <p>
                 System to collect authentic reviews from the customers about the services you provide, and an option for you to review it later<br /> <br /> 
                 </p>
                  
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
            <Card className="card-size">
                <CardHeader >
                   
                  <CardTitle tag="h4"  style={{                
                    marginTop:"10px"
                }}>
                   <div style={{
                    height:"30px",
                    width:"50px",                
                }} >
                <img alt="" src={require("assets/img/theme/digital.png")}  />
                </div>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <b>Digital Payments</b>
                 <p>
                 Credit card and online payment options, customized the way customers want<br /> <br /> 
                 </p>
                  
                </CardBody>
              </Card>
            </Col>

          </Row>
        
          <Row className="justify-content-center"> 
            <Col lg="4">
              <Card className="card-size">
                <CardHeader >            
                  <CardTitle tag="h4"  style={{                
                    marginTop:"10px"
                }}>
                   <div style={{
                    height:"30px",
                    width:"50px",                
                }} >
                <img  alt="" src={require("assets/img/theme/money.png")}  />
                </div>
                 
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <b>No Monthly Fees</b>
                 <p>
                 No monthly fee, no sign-up fee.<br /> <br /> 
                 </p>
                  
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
            <Card className="card-size">
                <CardHeader >
                   
                  <CardTitle tag="h4"  style={{                
                    marginTop:"10px"
                }}>
                   <div style={{
                    height:"30px",
                    width:"50px",                
                }} >
                <img alt="" src={require("assets/img/theme/people.png")}  />
                </div>
                 
                  </CardTitle>
                </CardHeader>
                <CardBody>
                <b>Returning Customers</b>
                 <p>
                 Repeat business from the customers<br /> <br /> 
                 </p>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
      </>
    );
  }
}

export default Benefits;
