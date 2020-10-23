import React from "react";
import { connect } from "react-redux";
import { getBookings, updateBooking } from "actions/bookingActions";
import { Card, CardBody, Row, Col, Table, ButtonGroup, Button, Modal, ModalBody } from "reactstrap";

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_view: "pending",
      current_booking: {}
    };
  }

  componentDidMount() {
    const bookingData = {
      status: 'pending'
    };
    this.props.getBookings(bookingData);
  }
  toggleModal = (state, booking) => {
    this.setState({
      [state]: !this.state[state],
      current_booking: booking
    });
  };
  acceptBooking = (booking) => {
    booking.status = 'upcoming';
    const bookingData = {
      booking: booking,
      status: 'pending'
    }
    this.props.updateBooking(bookingData);
  }
  endBooking = (booking) => {
    booking.status = 'past';
    const bookingData = {
      expert_id: "5f89b74c785a191b10dab1ac",
      booking: booking,
      status: 'upcoming'
    }
    this.props.updateBooking(bookingData)
  }
  RejectBooking = () => {
    let obj = this.state.current_booking;
    obj.status = 'reject';
    const bookingData = {
      booking:  obj,
      status: 'pending'
    }
    this.props.updateBooking(bookingData);
    this.toggleModal("notificationModal");
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      current_view: nextProps.bookings.status,
        })
  };
  render() {
    const loading = !this.props.bookings.loading;
    return (
      <>
      { (loading && this.props.bookings.payload.length > 0) ? (
        <div className="content">
          {(this.state.current_view) ? ( 
          <div><h1 style={{
            textTransform:'capitalize'
          }}>{this.state.current_view} Bookings</h1></div>
              ) : (
                <div><h1>Pending Bookings</h1></div>
              )}

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className="text-center">Booking ID</th>
                        <th className="text-center">Customer</th>
                        <th className="text-center">Time</th>
                        <th className="text-center">Services</th>
                        <th className="text-center">Customer Address</th>
                        <th className="text-center">Instructions</th>
                        <th className="text-center">Payment</th>
                        <th className="text-center">  {(loading && this.state.current_view !== 'past') && <div>Action</div>}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loading && (this.props.bookings.payload.map(booking => (
                        <tr key={booking._id}>
                          <td className="text-center"><p>{booking._id}<br></br><b>{booking.location}</b></p></td>
                          <td className="text-center "><p>{booking.customerName}</p></td>
                          <td className="text-center "><p>{booking.date}<br />{booking.time}</p></td>
                          <td className="text-center">
                            {booking.services.map(service => (
                              <p> {service} {``}</p>
                            ))
                            }
                          </td>
                          <td className="text-center w-5"><p>{booking.customerAddress}</p></td>
                          <td className="text-center w-5"><p>{booking.instructions}</p></td>
                          <td className="text-center"><p>{booking.payment}<br />€{booking.billingAmount}</p></td>
                          <td className="text-center">
                            {(booking.status === 'pending') &&
                              <ButtonGroup className="btn-group-vertical">
                                <Button style={{ marginBottom: "10px" }} color="success" onClick={() => {
                                  this.acceptBooking(booking);
                                }} size="md">Accept
                                  </Button> {` `}
                                <Button color="warning" size="md" onClick={() => this.toggleModal("notificationModal", booking)}>Reject 
                                  </Button>
                              </ButtonGroup>}
                            {((booking.status  === 'upcoming' && booking.status !== 'past')) &&
                              <Button style={{ marginBottom: "10px" }} color="default" size="md" onClick={() => this.endBooking(booking)}>Complete
                                  </Button>
                            }
                          </td>
                        </tr>
                      )
                      ))}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal
            modalClassName="modal-services"
            isOpen={this.state.notificationModal}
            toggle={() => this.toggleModal("notificationModal")}>
            <div className="modal-header justify-content-center">
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("notificationModal")}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Your attention is required</h4>
            </div>
            <ModalBody >
              <div className="content">
            <div className="text-center">
                  <h4 className="heading">Are you sure you want to reject this booking?</h4>
                  <p>
                   Note: This action is irreversible
                  </p>
                </div>
                <Row className="justify-content-center">
              
                    <Button color="default" size="md"
                     onClick={() => this.toggleModal("notificationModal")}>
                      Cancel
                    </Button>
                 
                    <Button color="warning" size="md"
                    onClick={() => this.RejectBooking()}>
                      Reject
                    </Button>
                
                </Row>
                </div>
            </ModalBody>
          </Modal>
        </div> ): (
          <div style={{
            marginTop: '-100px'
          }}>
            <img alt='' src={require('assets/img/theme/no_data.png')}>
            </img>        
          </div>
        )}
      </>
    );
  }
}

function mapStateToProp(state) {
  return {
    bookings: state.bookings,
    view: state.view
  }
}
export default connect(
  mapStateToProp,
  { getBookings, updateBooking }
)(Bookings);
