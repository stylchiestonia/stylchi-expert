import React from "react";

// reactstrap components
import { Card, CardBody, Row, Col, Table, Button, ButtonGroup } from "reactstrap";

class Bookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch_data: "pending",
      pendingBookings: [
        {
          bookingID: 20202020202,
          venue: "Home",
          customerName: "Robert Maxwell",
          time: "12:30 pm",
          date: "04 Sep 2020",
          services: "Eyebrows, haircut for women, pedicure",
          customerAddress: "Spandauer Damm 253, 14052, Tallin",
          instructions: "Please assign Mr Yuri for my booking",
          paymentMethod: "Credit Card",
          billingAmount: "200.00"
        },
        {
          bookingID: 20202020203,
          venue: "Home",
          customerName: "Robert Maxwell",
          time: "12:30 pm",
          date: "04 Sep 2020",
          services: "Eyebrows, haircut for women, pedicure",
          customerAddress: "Spandauer Damm 253, 14052, Tallin",
          instructions: "Please assign Mr Yuri for my booking",
          paymentMethod: "Credit Card",
          billingAmount: "200.00"
        },
        {
          bookingID: 20202020202,
          venue: "Home",
          customerName: "Robert Maxwell",
          time: "12:30 pm",
          date: "04 Sep 2020",
          services: "Eyebrows, haircut for women, pedicure",
          customerAddress: "Spandauer Damm 253, 14052, Tallin",
          instructions: "Please assign Mr Yuri for my booking",
          paymentMethod: "Credit Card",
          billingAmount: "200.00"
        },

      ],
      upcomingBookings: [
        {
          bookingID: 20202020201,
          venue: "Home",
          customerName: "Robert Maxwell",
          time: "12:30 pm",
          date: "04 Sep 2020",
          services: "Eyebrows, haircut for women, pedicure",
          customerAddress: "Spandauer Damm 253, 14052, Tallin",
          instructions: "Please assign Mr Yuri for my booking",
          paymentMethod: "Credit Card",
          billingAmount: "200.00"
        },
        {
          bookingID: 20202020202,
          venue: "Home",
          customerName: "Robert Maxwell",
          time: "12:30 pm",
          date: "04 Sep 2020",
          services: "Eyebrows, haircut for women, pedicure",
          customerAddress: "Spandauer Damm 253, 14052, Tallin",
          instructions: "Please assign Mr Yuri for my booking",
          paymentMethod: "Credit Card",
          billingAmount: "200.00"
        },
        {
          bookingID: 20202020203,
          venue: "Home",
          customerName: "Robert Maxwell",
          time: "12:30 pm",
          date: "04 Sep 2020",
          services: "Eyebrows, haircut for women, pedicure",
          customerAddress: "Spandauer Damm 253, 14052, Tallin",
          instructions: "Please assign Mr Yuri for my booking",
          paymentMethod: "Credit Card",
          billingAmount: "200.00"
        },

      ],
    };
  }
  componentDidMount() {
    this.setState({
      fetch_data : this.props.location.state ? this.props.location.state.bookingcategory : this.state.fetch_data
    })
  }
  render() {
    return (
      <>
        <div className="content">
        {(this.state.fetch_data === 'pending') && <div><h1>Pending Bookings</h1></div>}
        {(this.state.fetch_data === 'upcoming') && <div><h1>Upcoming Bookings</h1></div>}
        {(this.state.fetch_data === 'past') && <div><h1>Past Bookings</h1></div>}

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
                        {this.state.pendingBookings.map(booking => (
                          <tr key={booking.bookingID}>
                            <td className="text-center">{booking.bookingID}<br></br>{booking.venue}</td>
                            <td className="text-center">{booking.customerName}</td>
                            <td className="text-center">{booking.date}<br />{booking.time}</td>
                            <td className="text-center">{booking.services}</td>
                            <td className="text-center">{booking.customerAddress}</td>
                            <td className="text-center">{booking.instructions}</td>
                            <td className="text-center">{booking.paymentMethod}<br />€{booking.billingAmount}</td>
                            <td className="text-center">
                            {(this.state.fetch_data === 'pending' && this.state.fetch_data !== 'past') &&
                              <ButtonGroup className="btn-group-vertical">
                                <Button style={{ marginBottom: "10px" }} color="success" size="md">Accept
                                  </Button> {` `}
                                <Button color="warning" size="md">Reject
                                  </Button>
                              </ButtonGroup>}
                            {(this.state.fetch_data === 'upcoming' && this.state.fetch_data !== 'past') &&
                             <Button style={{ marginBottom: "10px" }} color="default" size="md">End
                                  </Button>
                            }
                           </td>
                          </tr>
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

export default Bookings;
