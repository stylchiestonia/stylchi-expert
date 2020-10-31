import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "actions/authActions";
import NotificationAlert from "react-notification-alert";
import PhoneInput from 'react-phone-input-2';
import bg from "assets/img/flower-back.png";
import partner from "assets/img/theme/partner.png";
import PrivacyPolicy from 'assets/static/PrivacyPolicy.pdf';
import PartnerPolicy from 'assets/static/PartnerPolicy.pdf';
import 'react-phone-input-2/lib/bootstrap.css'
import {
  Button,
  Card,
  CardImg,
  CardBody,
  Input,
  FormGroup,
  Row,
  Col,
  Form
} from "reactstrap";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      role: "expert",
      password: "",
      password2: "",
      language: "ENG",
      allowContact: false,
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleCheckboxChange = event => {
    const target = event.target;   
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [event.target.id]: value
    });
  }
  handleRegister = (e) => {
    e.preventDefault();
    const data = {
      userData: {
        firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      role: this.state.role,
      password: this.state.password,
      password2: this.state.password2,
      language: this.state.language,
      allowContact: this.state.allowContact
      }
    };
    this.setState({
      isSubmitting: true
    });
    this.props.registerUser(data).then(res => {
      this.setState({
        isSubmitting: false
      });
      this.props.history.push('/thank-you')
    }
  ).catch(error => {
    this.setState({
      isSubmitting: false
    });
    this.notify('tr')
    })
  };
  notify = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
           Error: {this.state.errors.data}
          </div>
        </div>
      ),
      type: 'warning',
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };
  render() {
    return (
      <>
        <Row>
        <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Col md='5' className='p-0'>
            <Card className='mb-0'>
              <CardImg width="100%" className='background-tint h-100' src={require("assets/img/theme/auth.png")}>
              </CardImg>
            </Card>
          </Col>
          <Col md='7' className='p-0 '>
            <Card className='h-100 mb-0'>
            <div className="content"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "right top",
            backgroundRepeat: "no-repeat",
          }}>   
              <CardBody className='mt-3 p-4'>
              <Form onSubmit={this.handleRegister}>
                <Row className="row-grid align-items-center">                 
                  <Col md="4">
                  <div className="pr-md-5">  
                  <img className="partner-img" src={partner} alt="iampartner"/>
                </div>
                  </Col>
                </Row>
                <Row className='mt-3'>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <Input
                      id="firstName"
                      required
                      placeholder="First Name"
                        value={this.state.firstName}
                        type="text"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <Input
                      placeholder="Second Name"
                      required
                        value={this.state.lastName}
                        onChange={this.onChange}
                        type="text"
                        id="lastName"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="8">
                    <FormGroup>
                      <Input
                      required
                        onChange={this.onChange}
                        value={this.state.email}
                        id="email"
                        type="email"
                        placeholder="Enter email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <Input
                      required
                      placeholder="Create a password"
                        id="password"
                        value={this.state.password}
                        type="password"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <Input
                      required
                      placeholder="Confirm Password"
                        id="password2"
                        value={this.state.password2}
                        onChange={this.onChange}
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="6">            
                    <PhoneInput
                    id="phoneNumber"
                    required
                    onChange={phoneNumber => this.setState({ phoneNumber })}
                        value={this.state.phoneNumber}
                        country={'ee'}
                        inputClass='form-control is-invalid  w-100'
                        inputProps={{
                            name: 'phone',
                            required: true,
                          }}
                      />                                    
                  </Col>
                  <Col className="pl-md-1" md="2">
                  <FormGroup>
                      <Input
                        data-trigger=""
                        id="language"
                        type="select"
                        value={this.state.language}
                        onChange={this.onChange}
                      >
                        <option placeholder="true">ENG</option>
                        <option defaultValue="2">EST</option>
                        <option defaultValue="3">RUS</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="top-margin-row">
                <Col className="pr-md-1" md="8">
                <div className="form-check">
          <label className="form-check-label">
              <Input className="form-check-input" type="checkbox" id="allowContact" value={this.state.allowContact} onChange={this.handleCheckboxChange} />
              You allow us to use the details you enter here to get in touch with you via email and/or phone about becoming our Partner. You can read more about it in our
              <span className="form-check-sign"  >
                  <span className="check" ></span>
              </span>{` `}
          <a href={PartnerPolicy} without="true" rel="noopener noreferrer" target="_blank" className="link-text">Partner Policy</a>
          </label>
      </div>
      <div className="form-check">
          <label className="form-check-label">
              <Input className="form-check-input" type="checkbox" value=""/>
              You can find out more about how Stylchi stores, uses and protects your data in our              
               <span className="form-check-sign">
                  <span className="check"></span>
              </span>{` `}
              <a  href={PrivacyPolicy} without="true" rel="noopener noreferrer" target="_blank" className="link-text">Privacy Policy</a>
          </label>{` `}
         
      </div>
                    </Col>
                </Row>
                <Row className="top-margin-row">
                  <Col md='4'>
                   { !this.state.isSubmitting && <Button className="btn-block"
                      color="success"
                      type="submit"
                      size="lg"
                    >
                      Get Started
                  </Button>}
                  { this.state.isSubmitting && <Button className="btn-block"
                      color="success"
                      size="lg"
                      disabled
                    >
                      Get Started
                  </Button>}
                  </Col>
                 
                </Row>
                <Row className="top-margin-row-high">
                   
                   <Col md="8">
                   <hr/>
                   Already have an account?&nbsp;&nbsp;&nbsp;<Link className="link-text" to="/auth/login">Login</Link>
                   
                   </Col>
                 </Row>
                 </Form>
              </CardBody>
              </div>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}
Register.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(Register);