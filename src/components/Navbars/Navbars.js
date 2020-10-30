import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getBookings } from "actions/bookingActions";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

class Navbars extends React.Component {
  refreshBookings= (status) => {
    const bookingData = {
      status: status
    };
    this.props.getBookings(bookingData)
  }
  render() {
    return (
      <>
        <section>
          {/* Navbar info */}
          <Navbar className="navbar-light bg-info mt-4"  expand="lg">
            <Container fluid>
              <button className="navbar-toggler" id="navbar-info">
                <span className="navbar-toggler-icon">
                <i className="fa fa-bars" aria-hidden="true"></i>
                </span>
              </button>
              <UncontrolledCollapse navbar toggler="#navbar-info">
                <div className="navbar-collapse-header">
                </div>
                <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      to="/admin/settings"
                      tag={Link}
                    >
                      <span className="nav-link-inner--text">Settings</span>
                    </NavLink>
                  </NavItem>
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
                      <DropdownItem to='/admin/bookings'
                        onClick={() => {
                          this.refreshBookings('pending')
                        }}
                        tag={Link}
                        >
                        Pending
                      </DropdownItem>
                      <DropdownItem to='/admin/bookings'
                        onClick={() => {
                          this.refreshBookings('upcoming')
                        }}
                        tag={Link}>
                        Upcoming
                      </DropdownItem>
                      <DropdownItem 
                      to='/admin/bookings'
                      onClick={() => {
                        this.refreshBookings('past')
                      }}
                      tag={Link}>
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
                
                </Nav>
                <Nav className="mr-md-5" navbar>
                  In Review
                {/* <InputGroup className="search-bar">
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
                </InputGroup> */}
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </section>
      </>
    );
  }
}
function mapStateToProp(state) {
  return {
    bookings: state.bookings,
  }
}
export default connect(
  mapStateToProp,
  { getBookings}
)(Navbars);
