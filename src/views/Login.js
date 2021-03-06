import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "actions/authActions";
import { Link } from "react-router-dom";
import NotificationAlert from "react-notification-alert";

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
import bg from "assets/img/flower-back.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      email: "",
      password: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin/settings");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/admin/settings");
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
    this.setState({
      isSubmitting: true
    });
    this.props.loginUser(userData).then(res => {
      this.setState({
        isSubmitting: false
      });
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
              <CardImg width="100%" className='background-tint' src={require("assets/img/theme/auth.png")}>
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
              <CardBody className='mt-4 p-4'>
                <Row>
                  <Col md="8">
                  <img alt="" src={require("assets/img/theme/logo-footer.png")} />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col md="8">
                    <FormGroup>
                      <Input
                        onChange={this.onChange}
                        value={this.state.email}
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        placeholder="Enter your password"
                        onChange={this.onChange}
                        value={this.state.password}
                        id="password"
                        type="password"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md='4'>
                    { !this.state.isSubmitting && <Button className="btn-block"
                      color="success"
                      type="button"
                      size="lg"
                      onClick={() => {
                        this.handleLogin();
                      }}
                    >
                      Login
                  </Button>}
                  { this.state.isSubmitting && <Button className="btn-block"
                  disabled
                      color="success"
                      type="button"
                      size="lg"
                    >
                      Login
                  </Button>}
                  </Col>
                </Row>
                  <Row className="top-margin-row-high">
                   
                    <Col md="8">
                    <hr/>
                    Don't have account?&nbsp;&nbsp;&nbsp;<Link className="link-text" to="/auth/register">Sign Up</Link>
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
Login.propTypes = {
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
)(Login);