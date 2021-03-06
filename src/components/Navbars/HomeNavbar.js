import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';
import { setLocalization } from 'middleware/localization';
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavLink,
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
class HomeNavbar extends React.Component {

  registerRouteChange=()=> {
    this.props.history.push("/auth/register");
  }
  loginRouteChange=()=> {
    this.props.history.push("/auth/login");
  }
  toDashboard=()=> {
    this.props.history.push("/admin/settings");

  }
  changeLangEst=()=>{
    setLocalization("EE");
    window.location.reload();
   
  }
  changeLangEng=()=>{
    setLocalization("EN");
    window.location.reload();
   
  }
  componentDidMount() {

    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }
  state = {
    lang: "ENG",
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container fluid>
              <NavbarBrand className="mr-lg-6" to="/" tag={Link} >
                <img
                  alt="..."
                  src={require("assets/img/brand/stylchi-logo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
            
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  
                <UncontrolledDropdown 
                nav>
                    <DropdownToggle nav>
                    {/* <i className="fa fa-map-marker-alt mr-1" /> */}
                    <img className="mr-1" alt="..." src={require("assets/img/location-icon.png")} />
                      <span className="nav-link-inner--text">Estonia</span>
                    </DropdownToggle>
                  
                  </UncontrolledDropdown>
                <UncontrolledDropdown nav>
                    <DropdownToggle 
                    caret
                    nav>
                      {/* <i className="fa fa-language mr-1" /> */}
                      <img className="mr-1" alt="..." src={require("assets/img/lang.png")} />

                      <span className="nav-link-inner--text">{this.state.lang}</span>
                      <b className="caret d-none d-lg-block d-xl-block" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={this.changeLangEng}>
                      <div >
                      ENG
                        </div>
                        
                      </DropdownItem>
                      <DropdownItem onClick={this.changeLangEst}>
                  
                        EST
      
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>  
                  
                 { localStorage.jwtToken ? <NavItem className="d-lg-none">
                <NavLink
                  to="admin/dashboard"
                  tag={Link}
                >
                Dashboard
                </NavLink>
              </NavItem> : 
              <div>
              <NavItem className="d-lg-none">
                <NavLink
                  to="/auth/login"
                  tag={Link}
                >
                Login
                </NavLink>
              </NavItem> 
              <NavItem className="d-lg-none">
                <NavLink
                   to="/auth/register"
                   tag={Link}
                >
                Sign Up
                </NavLink>
    </NavItem>  </div>}      
                  {localStorage.jwtToken ?  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      target="_blank"
                      color="success"
                      onClick={this.toDashboard}
                      style={{
                        height:'50px',
                        display: 'inline-block',
                        textAlign: 'center'

                      }}
                    >
                      <span className="nav-link-inner--text ml-1">
                        Dashboard
                      </span>
                    </Button>
                    </NavItem> : <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      color="default"
                      target="_blank"
                      style={{
                        height:'50px',
                        display: 'inline-block',
                        textAlign: 'center'
                      }}
                      onClick={this.registerRouteChange}
                    >
                      <span className="nav-link-inner--text ml-1">
                        Sign up
                      </span>
                    </Button>
                    <Button
                      target="_blank"
                      color="warning"
                      onClick={this.loginRouteChange}
                      style={{
                        height:'50px',
                        display: 'inline-block',
                        textAlign: 'center'

                      }}
                    >
                      <span className="nav-link-inner--text ml-1">
                        Log In
                      </span>
                    </Button>
                    </NavItem> }
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default withRouter(HomeNavbar);
