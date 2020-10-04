import React from "react";
// react plugin used to create charts
import { Line, Bar, Doughnut } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

// core components
import {
  chartAppointment,
  chartRatings,
  chartEarnings
} from "variables/charts.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8" sm="4">
              <h1>Dashboard</h1>
            </Col>
            <Col
              md="4" sm="4">
              <Button color="info" size="lg" style={{
                float: 'right',
                color: "#8A8B96",
                alignItems: "center"
              }}>
                <i className="fa fa-calendar" aria-hidden="true" style={{
                  position: "initial"
                }} />{"  "}
              Select Range
            </Button>
            </Col>
          </Row>
          <Row style={{
            marginTop: "20px"
          }}>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total appointments</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-calendar-60 text-info" />{" "}
                    40
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Doughnut
                      data={chartAppointment.data}
                      options={chartAppointment.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Earnings</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-money-coins text-success" /> 3,500€
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartEarnings.data}
                      options={chartEarnings.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Ratings</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-shape-star" style={{
                      color: "#EB9A13"
                    }} />{" "}
                    4.5
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartRatings.data}
                      options={chartRatings.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>
          <hr />

          <h1>Earnings Summary</h1>
          <Row>
            <Col
              md="8">
              <Button color="info" size="lg" style={{
                color: "#8A8B96",
                alignItems: "center"
              }}>
                <i className="fa fa-calendar" style={{
                  position: "initial"
                }} />{"  "}
              Select Range
            </Button>
            </Col>
            <Col md="4">
              <Button color="info" size="lg" style={{
                float: 'right',
                color: "#8A8B96",
              }}>
                <i className="fa fa-download" aria-hidden="true" />{"  "}
              </Button>
            </Col>

          </Row>
          <Row style={{
            marginTop: "20px"
          }}>
            <Col>
              <Card>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary dashboard">
                      <tr >
                        <th className="text-center" >Date</th>
                        <th className="text-center">Bookings</th>
                        <th className="text-center">Gross Payment (€)</th>
                        <th className="text-center" >Commission (15%)</th>
                        <th className="text-center">Net Payment (€)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">04-08-2020</td>
                        <td className="text-center">10</td>
                        <td className="text-center">250</td>
                        <td className="text-center">37.5</td>
                        <td className="text-center">212.5</td>
                      </tr>
                      <tr>
                        <td className="text-center">04-08-2020</td>
                        <td className="text-center">10</td>
                        <td className="text-center text-success" style={{
                          color: "#23BF69"
                        }}>250</td>
                        <td className="text-center">37.5</td>
                        <td className="text-center">212.5</td>
                      </tr>
                      <tr>
                        <td className="text-center">04-08-2020</td>
                        <td className="text-center">10</td>
                        <td className="text-center">250</td>
                        <td className="text-center">37.5</td>
                        <td className="text-center">212.5</td>
                      </tr>
                      <tr>
                        <td className="text-center">04-08-2020</td>
                        <td className="text-center">10</td>
                        <td className="text-center">250</td>
                        <td className="text-center">37.5</td>
                        <td className="text-center">212.5</td>
                      </tr>
                      <tr>
                        <td className="text-center">04-08-2020</td>
                        <td className="text-center">10</td>
                        <td className="text-center">250</td>
                        <td className="text-center">37.5</td>
                        <td className="text-center">212.5</td>
                      </tr>
                      <tr>
                        <td className="text-center">04-08-2020</td>
                        <td className="text-center">10</td>
                        <td className="text-center">250</td>
                        <td className="text-center">37.5</td>
                        <td className="text-center">212.5</td>
                      </tr>

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

export default Dashboard;
