import React from "react";
import { connect } from "react-redux";
import { getBookings, updateBooking } from "actions/bookingActions";
// reactstrap components
import { Card, CardBody, Row, Col, Table, ButtonGroup, Button } from "reactstrap";

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_view: "pending"
    };
  }

  componentDidMount() {
    const bookingData = {
      expert_id: "5f89b74c785a191b10dab1ac",
      status: 'pending'
    };
   
    this.props.getBookings(bookingData);
  }
  acceptBooking = (booking) => {
    booking.status = 'upcoming';
    const bookingData = {
      expert_id: "5f89b74c785a191b10dab1ac",
      booking: booking
    }
    this.props.updateBooking(bookingData)
  }
  endBooking = (booking) => {
    booking.status = 'past';
    const bookingData = {
      expert_id: "5f89b74c785a191b10dab1ac",
      booking: booking
    }
    this.props.updateBooking(bookingData)
  }
  
  render() {
    const loading = !this.props.bookings.loading;
    console.log('--------------', this.props.view);

    if(this.props.view){
      console.log('--------------', this.props.view.view);

    }
    return (
      <>
        <div className="content">
          {(this.state.current_view === 'pending') && <div><h1>Pending Bookings</h1></div>}
          {(this.state.current_view  === 'upcoming') && <div><h1>Upcoming Bookings</h1></div>}
          {(this.state.current_view === 'past') && <div><h1>Past Bookings</h1></div>}

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
                        <th className="text-center">  {(this.state.fetch_data !== 'past') && <div>Action</div>}</th>
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
                                <Button color="warning" size="md">Reject
                                  </Button>
                              </ButtonGroup>}
                            {((booking.status  === 'upcoming' && booking.status !== 'past')) &&
                              <Button style={{ marginBottom: "10px" }} color="default" size="md">Complete
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
        </div>
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
