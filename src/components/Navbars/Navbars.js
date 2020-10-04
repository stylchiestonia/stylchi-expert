import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  InputGroup,
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Input,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class Navbars extends React.Component {
  render() {
    return (
      <>
        <section>
          {/* Navbar info */}
          <Navbar className="navbar-light bg-info mt-4" style={{fontFamily: "font-family: 'poppins-bold', sans-serif !important;"}} expand="lg">
            <Container fluid>
              <button className="navbar-toggler" id="navbar-info">
                <span className="navbar-toggler-icon">
                <i class="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-info">
                <div className="navbar-collapse-header">
                </div>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/admin/dashboard"
                      tag={Link}
                    >
                      <span className="nav-link-inner--text">Dashboard</span>
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Bookings</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to={{ 
                        pathname: '/admin/bookings', state: { bookingcategory: 'pending'} 
                        }} tag={Link}>
                        Pending
                      </DropdownItem>
                      <DropdownItem to={{ 
                        pathname: '/admin/bookings', state: { bookingcategory: 'upcoming'} 
                        }} tag={Link}>
                        Upcoming
                      </DropdownItem>
                      <DropdownItem to={{ 
                        pathname: '/admin/bookings', state: { bookingcategory: 'past'} 
                        }} tag={Link}>
                        Past
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/admin/services"
                      tag={Link}
                    >
                      <span className="nav-link-inner--text">Services</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/admin/settings"
                      tag={Link}
                    >
                      <span className="nav-link-inner--text">Settings</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                <InputGroup className="search-bar">
                  <Button
                    color="link"
                    data-target="#searchModal"
                    data-toggle="modal"
                    id="search-button"
                    onClick={this.toggleModalSearch}
                  >
                    <i className="tim-icons icon-zoom-split" />
                    <span className="d-lg-none d-md-block">Search</span>
                  </Button>
                  <Input>
                  </Input>
                </InputGroup>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </section>
      </>
    );
  }
}

export default Navbars;
