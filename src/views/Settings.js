import React from "react";
import {
    Button,
    Modal,
    ModalBody,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    FormGroup,
    Input,
    Row,
    Col,
} from "reactstrap";
import bg from "assets/img/flower-back.png"
class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalBank: false,
            modalPersonalDetails: false,
        };
    }
    toggleModalBank = () => {
        this.setState({
            modalBank: !this.state.modalBank
        });
    };
    togglePersonalDetails= () => {
        this.setState({
            modalPersonalDetails: !this.state.modalPersonalDetails
        });
    };
    render() {
        return (
            <>
                <div className="content" 
                style={{
                  backgroundImage: `url(${bg})`,
                 backgroundPosition: "right top",
                 backgroundRepeat: "no-repeat",

               }}
                ><Row>
                        <Col lg="3" />
                        <Col lg="3">
                            <Card style={{
                                textAlign: "center"
                            }} onClick={this.togglePersonalDetails}>
                                <CardHeader >
                                    <CardTitle tag="h3">
                                        Personal Details
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <img
                                        alt="..."
                                        src={require("assets/img/icon_wallet.png")}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="3">
                            <Card style={{
                                textAlign: "center"
                            }} onClick={this.toggleModalBank}>
                                <CardHeader>
                                    <CardTitle tag="h3">
                                        Bank Details
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <img
                                        alt="..."
                                        src={require("assets/img/icon_salon_chair.png")}
                                    />
                                </CardBody>
                            </Card>
                        </Col>

                    </Row>
                    <Modal
                        modalClassName="modal-services"
                        isOpen={this.state.modalBank}
                        toggle={this.toggleModalBank}>
                        <div className="modal-header justify-content-center">
                            <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={this.toggleModalBank}
                            >
                                <i className="tim-icons icon-simple-remove" />
                            </button>

                        </div>
                        <ModalBody >
                            <h4 className="title title-up">Bank Details</h4>
                            <div className="content">
                                <hr />
                                <Row>
                                    <Col className="pr-md-1" md="6">
                                        <FormGroup>
                                            <label>Expert ID</label>
                                            <Input
                                                disabled
                                                defaultValue="120"
                                                type="number"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="6">
                                        <FormGroup>
                                            <label>Full Name</label>
                                            <Input
                                                defaultValue="Adam Schwerbatsky"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    </Row>
                                    <Row style={{ marginTop:"30px"}}>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>IBAN number</label>
                          <Input
                            defaultValue="EEXX-XXXX-XXXX-1290"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                        <label>Account number</label>
                          <Input
                            defaultValue="EEXX-XXXX-XXXX-1290"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{ marginTop:"30px"}}>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                        <label>Account number</label>
                          <Input
                            defaultValue="Swedish Hepsta Bank LLC"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                        <label>Bank Address</label>
                          <Input
                            defaultValue="Hepstada St. 112, 14052, Tallinn, Estonia"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{ marginTop:"30px"}}>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                        <label>Swift Code</label>
                          <Input
                            defaultValue="LOAA12E"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                        <Row style={{ marginTop:"30px"}}>
                            <Col>
                            <Button className="btn-block"
                                color="success"
                                type="button"
                            >
                                Save
                  </Button>
                            </Col>
                        </Row>
                            </div>
                        </ModalBody>
                    </Modal>
                    <Modal
                        modalClassName="modal-services"
                        isOpen={this.state.modalPersonalDetails}
                        toggle={this.togglePersonalDetails}>
                        <div className="modal-header justify-content-center">
                            <button
                                aria-label="Close"
                                className="close"
                                data-dismiss="modal"
                                type="button"
                                onClick={this.togglePersonalDetails}
                            >
                                <i className="tim-icons icon-simple-remove" />
                            </button>

                        </div>
                        <ModalBody >
                            <h4 className="title title-up">Bank Details</h4>
                            <div className="content">
                                <hr />
                                <Row>
                                    <Col className="pr-md-1" md="6">
                                        <FormGroup>
                                            <label>First Name</label>
                                            <Input
                                                defaultValue="Adam"
                                                type="number"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col className="pl-md-1" md="6">
                                        <FormGroup>
                                            <label>Last Name</label>
                                            <Input
                                                defaultValue="Schwerbatsky"
                                                type="text"
                                            />
                                        </FormGroup>
                                    </Col>
                                    </Row>
                                    <Row style={{ marginTop:"30px"}}>
                      <Col className="pr-md-1" md="12">
                        <FormGroup>
                        <label>Email</label>
                          <Input
                            defaultValue="LOAA12E"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                                    <Row style={{ marginTop:"30px"}}>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Phone</label>
                          <Input
                            defaultValue="+3245789845"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                        <label>Venue (optional)</label>
                          <Input
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{ marginTop:"30px"}}>
                    <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Residential Address</label>
                          <Input
                            cols="80"
                            defaultValue="Magnumstr. 44, 49847, Tallinn"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                        <label>Venue Address</label>
                        <Input
                            cols="80"
                            defaultValue="Universal Salon, Mega Mall, 1st floor, 
                            Dusseldorf Street 52, 56565, Tallin."
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row style={{ marginTop:"30px"}}>
                    <Col className="pl-md-1">
                        <FormGroup>
                        <Input
                            type="text"
                          />
                          <Input
                            type="text"
                          />
                          <Input
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                        <Row style={{ marginTop:"30px"}}>
                            <Col>
                            <Button className="btn-block"
                                color="success"
                                type="button"
                            >
                                Save
                  </Button>
                            </Col>
                        </Row>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </>
        );
    }
}

export default Settings;
