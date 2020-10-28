import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom';

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
  NavItem,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
class HomeNavbar extends React.Component {

  routeChange=()=> {
    // let path = `/auth/login`;
    // console.log('------------------', path);
    // this.props.history.push(path);
    // console.log('------------------',  this.props.history);
  }
  
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }
  state = {
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
            className="navbar-main navbar-transparent navbar-light headroom"
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

                      <span className="nav-link-inner--text">EN</span>
                      <b className="caret d-none d-lg-block d-xl-block" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        RUS
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        EN
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>           
                  <NavItem className="d-none d-lg-block ml-lg-4">
                    <Button
                      color="default"
                      target="_blank"
                      style={{
                        height:'50px',
                        display: 'inline-block',
                        textAlign: 'center'
                      }}
                    >
                      <span className="nav-link-inner--text ml-1">
                        Sign up
                      </span>
                    </Button>
                    <Button
                      target="_blank"
                      color="warning"
                      onClick={this.routeChange}
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
                  </NavItem>
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
