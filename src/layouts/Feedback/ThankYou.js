import React from "react";
import {Row, Col, Button, Container} from "reactstrap";
import { Link } from "react-router-dom";

class ThankYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1
    };
  }
  componentDidMount() {
    document.body.classList.add("white-content");
  }

  render() {
    return (
      <>
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
           <div className="content">
           <Container>
           <Row className="row-grid align-items-center">
              <Col className="order-md-1" md="6">
                    <img alt="thankyou" src={require('assets/img/theme/thankyou.png')}>
                    
                    </img>
                   </Col>
                   <Col className="order-md-2" md="6">
                       <h1>
                       Thank you!
                       </h1>
                       <p>
                       Our team will review your details and 
                        get back to you shortly!
                       </p>
                       <div className="top-margin-row-high">                   
                       <Button color="success" size="md" to="/" tag={Link}>
                          Home
                       </Button>
                       <Button color="default" size="md" to="/auth/login" tag={Link}>
                           Login    
                       </Button>
                       </div>
                   </Col>
               </Row>
               </Container>
           </div>
          </div>
      </>
    );
  }
}

export default ThankYou;
