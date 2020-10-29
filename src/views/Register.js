import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "actions/authActions";
import classnames from "classnames";
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
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleLogin = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <>
        <Row>
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
                      placeholder="First Name"
                        id="firstName"
                        // value={this.state.userProfile.firstName || ''}
                        type="text"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <Input
                      placeholder="Second Name"
                        id="lastName"
                        // value={this.state.userProfile.lastName || ''}
                        onChange={this.onChange}
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="8">
                    <FormGroup>
                      <Input
                        onChange={this.onChange}
                        value={this.state.email}
                        error={errors.email}
                        id="email"
                        type="email"
                        className={classnames("", {
                          invalid: errors.email || errors.emailnotfound
                        })}
                        placeholder="Enter email"
                      />
                      <span className="red-text">
                        {errors.email}
                        {errors.emailnotfound}
                      </span>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <Input
                      placeholder="Create a password"
                        id="firstName"
                        // value={this.state.userProfile.firstName || ''}
                        type="text"
                        onChange={this.onChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="4">
                    <FormGroup>
                      <Input
                      placeholder="Confirm Password"
                        id="lastName"
                        // value={this.state.userProfile.lastName || ''}
                        onChange={this.onChange}
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md="8">
                   
                    <PhoneInput
                        country={'ee'}
                        inputClass='form-control is-invalid  w-100'
                        inputProps={{
                            name: 'phone',
                            required: true,
                          }}
                      />                                    
                  </Col>
                </Row>
                <Row className="top-margin-row">
                <Col className="pr-md-1" md="8">
                <div className="form-check">
          <label className="form-check-label">
              <Input className="form-check-input" type="checkbox" value=""/>
              You allow us to use the details you enter here to get in touch with you via email and/or phone about becoming our Partner. You can read more about it in our
              <span className="form-check-sign">
                  <span className="check"></span>
              </span>{` `}
          <a href={PartnerPolicy} without rel="noopener noreferrer" target="_blank" className="link-text">Partner Policy</a>
          </label>
      </div>
      <div class="form-check">
          <label className="form-check-label">
              <Input className="form-check-input" type="checkbox" value=""/>
              You can find out more about how Stylchi stores, uses and protects your data in our              
               <span className="form-check-sign">
                  <span className="check"></span>
              </span>{` `}
              <a  href={PrivacyPolicy} without rel="noopener noreferrer" target="_blank" className="link-text">Privacy Policy</a>
          </label>{` `}
         
      </div>
                    </Col>
                </Row>
                <Row className="top-margin-row">
                  <Col md='4'>
                    <Button className="btn-block"
                      color="success"
                      type="button"
                      size="lg"
                      onClick={() => {
                        this.handleLogin();
                      }}
                    >
                      Get Started
                  </Button>
                  </Col>
                 
                </Row>
                <Row className="top-margin-row-high">
                   
                   <Col md="8">
                   <hr/>
                   Already have an account?&nbsp;&nbsp;&nbsp;<Link className="link-text" to="/auth/login">Login</Link>
                   
                   </Col>
                 </Row>
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
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Register);