import React from "react";
import SwiperCore, {Navigation, Pagination, Scrollbar, A11y, EffectCoverflow}  from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
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
  Container,
  Table
} from "reactstrap";
import bg from "assets/img/flower-back.png";
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
SwiperCore.use([EffectCoverflow]);
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalBank: false,
      modalPersonalDetails: false,
      modalPhotoGallery: false,
      modalAvailability: false
    };
  }
  toggleModalBank = () => {
    this.setState({
      modalBank: !this.state.modalBank
    });
  };
  toggleModalGallery = () => {
    this.setState({
      modalPhotoGallery: !this.state.modalPhotoGallery
    });
  };
  togglePersonalDetails = () => {
    this.setState({
      modalPersonalDetails: !this.state.modalPersonalDetails
    });
  };
  toggleAvailability = () => {
    this.setState({
      modalAvailability: !this.state.modalAvailability
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
        ><Container>
            <Row>
              <Col lg="3" />
              <Col lg="3">
                <Card className="card-settings" style={{
                  textAlign: "center",
                }} onClick={this.togglePersonalDetails}>
                  <CardHeader >
                    <CardTitle>
                      Personal Details
                                    </CardTitle>
                  </CardHeader>
                  <CardBody >
                    <img
                      alt="..."
                      src={require("assets/img/icon_salon_chair.png")}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card className="card-settings" style={{
                  textAlign: "center"
                }} onClick={this.toggleModalBank}>
                  <CardHeader>
                    <CardTitle >
                      Bank Details
                                    </CardTitle>
                  </CardHeader>
                  <CardBody >
                    <img
                      alt="..."
                      src={require("assets/img/icon_wallet.png")}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="3" />
              <Col lg="3">
                <Card className="card-settings" style={{
                  textAlign: "center"
                }} onClick={this.toggleAvailability}>
                  <CardHeader >
                    <CardTitle>
                      Availability
                                    </CardTitle>
                  </CardHeader>
                  <CardBody >
                    <img
                      alt="..."
                      src={require("assets/img/icon_availability.png")}
                    />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3">
                <Card className="card-settings" style={{
                  textAlign: "center"
                }} onClick={this.toggleModalGallery}>
                  <CardHeader>
                    <CardTitle>
                      Photo Gallery
                                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <img
                      alt="..."
                      src={require("assets/img/icon_photo.png")}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
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
              <h4 className="title title-up">Bank Details</h4>
            </div>
            <ModalBody >
              <div className="content">
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
                <Row style={{ marginTop: "30px" }}>
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
                <Row style={{ marginTop: "30px" }}>
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
                <Row style={{ marginTop: "30px" }}>
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
                <Row style={{ marginTop: "30px" }}>
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
              <div className="content">
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>First Name</label>
                      <Input
                        defaultValue="Adam"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Second Name</label>
                      <Input
                        defaultValue="Schwerbatsky"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Phone</label>
                      <Input
                        defaultValue="+3245789845"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Email</label>
                      <Input
                        defaultValue="adam@gmail.com"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col className="pr-md-1">
                  <label>Residential Address</label>

                  </Col>
                  </Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>Street</label>
                      <Input
                        defaultValue="Magnumstr"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="2">
                    <FormGroup>
                      <label>No</label>
                      <Input
                        defaultValue="88"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="2">
                    <FormGroup>
                      <label>Gender</label>
                      <Input
                        defaultValue="Female"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>City</label>
                      <Input
                        defaultValue="Tallin"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="2">
                    <FormGroup>
                      <label>PC</label>
                      <Input
                        defaultValue="Estonia"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>Date of Birth</label>
                      <Input
                        defaultValue="Female"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>          
                <Row style={{ marginTop: "30px" }}>
                  <Col className="pr-md-1">
                  <label>Venue Address</label>
                  </Col>
                  </Row>
                <Row>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>Street</label>
                      <Input
                        defaultValue="Magnumstr"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="2">
                    <FormGroup>
                      <label>No</label>
                      <Input
                        defaultValue="88"
                        type="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Venue Name (optional)</label>
                      <Input
                        defaultValue="Female"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col className="pr-md-1" md="4">
                    <FormGroup>
                      <label>City</label>
                      <Input
                        defaultValue="Tallin"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pr-md-1" md="2">
                    <FormGroup>
                      <label>PC</label>
                      <Input
                        defaultValue="Estonia"
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>            
                <Row style={{ marginTop: "30px" }}>
                  <Col className="pr-md-1" md="12">
                    <FormGroup>
                      <label>About myself</label>
                      <Input
                        placeholder="Write something about yourself which will be visible to public"
                        type="textarea"
                      />
                    </FormGroup>
                  </Col>
                </Row>          
                <Row style={{ marginTop: "30px" }}>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Change Password</label>
                      <Input
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Confirm Password</label>
                      <Input
                        type="text"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              <Row style={{ marginTop: "30px" }}>
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
            isOpen={this.state.modalPhotoGallery}
            toggle={this.toggleModalGallery}>
            <div className="modal-header justify-content-center">
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={this.toggleModalGallery}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Photo Gallery</h4>
            </div>
            <ModalBody >
              <div className="content">
                <Row className="justify-content-center">
                          <img
                          className="rounded-circle"
                            alt="..."
                            style={{
                              height:'120px',
                              width:'120px'
                            }}
                            src={require("assets/img/upload_button.png")}
                          />
           </Row>
           <Row style={{ marginTop: "30px" }} className="justify-content-center">
                 
                      Upload Image(s)
           </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col>
                  <Swiper
         effect= 'coverflow'        
         pagination={{ clickable: true }}
         slidesPerView={3}
         spaceBetween={10}
         grabCursor='true'
        coverflow= {{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier:1,
          slidesShadows: true
        }}
         onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>  <img
                      alt="..."
                      src={require("assets/img/slider1.jpg")}
                    /></SwiperSlide>
   <SwiperSlide>  <img
                      alt="..."
                      src={require("assets/img/slider1.jpg")}
                    /></SwiperSlide>
   <SwiperSlide>  <img
                      alt="..."
                      src={require("assets/img/slider1.jpg")}
                    /></SwiperSlide>
    <SwiperSlide>  <img
                      alt="..."
                      src={require("assets/img/slider1.jpg")}
                    /></SwiperSlide>
    </Swiper>
                   
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                 <Button className="btn-block"
                      color="success"
                      type="button"
                    >
                      Save
                  </Button>
                  </Row>
              </div>
            </ModalBody>
          </Modal>
          <Modal
            modalClassName="modal-services"
            isOpen={this.state.modalAvailability}
            toggle={this.toggleAvailability}>
            <div className="modal-header justify-content-center">
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={this.toggleAvailability}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Availability</h4>
            </div>
            
            <ModalBody >
              <div className="content">
                <Table className="settings_table" responsive>
                    <thead >
                      <tr >
                        <th className="text-center" >Day week</th>
                        <th className="text-center">From - To</th>
                        <th className="text-center">Status</th>
                        <th className="text-center"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">Monday</td>
                        <td className="text-center">9:00 AM–8:30 PM</td>
      <td className="text-center"><i class="fa fa-circle" aria-hidden="true" style={{ color:"#22BF69"}}></i>{" "}Available</td>
                        <td>
                        <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">Tuesday</td>
                        <td className="text-center">9:00 AM–8:30 PM</td>
      <td className="text-center"><i class="fa fa-circle" aria-hidden="true" style={{ color:"#22BF69"}}></i>{" "}Available</td>
      <td>
                        <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">Wednesday</td>
                        <td className="text-center">9:00 AM–8:30 PM</td>
      <td className="text-center"><i class="fa fa-circle" aria-hidden="true" style={{ color:"#22BF69"}}></i>{" "}Available</td>
      <td>
                        <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">Thursday</td>
                        <td className="text-center">9:00 AM–8:30 PM</td>
      <td className="text-center"><i class="fa fa-circle" aria-hidden="true" style={{ color:"#22BF69"}}></i>{" "}Available</td>
      <td>
                        <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">Friday</td>
                        <td className="text-center">9:00 AM–8:30 PM</td>
      <td className="text-center"><i class="fa fa-circle" aria-hidden="true" style={{ color:"#22BF69"}}></i>{" "}Available</td>
      <td>
                        <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">Saturday</td>
                        <td className="text-center">9:00 AM–8:30 PM</td>
      <td className="text-center"><i class="fa fa-circle" aria-hidden="true" style={{ color:"#F8551A"}}></i>{" "}Unavailable</td>
      <td>
                        <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center">Sunday</td>
                        <td className="text-center">9:00 AM–8:30 PM</td>
      <td className="text-center"><i class="fa fa-circle" aria-hidden="true" style={{ color:"#F8551A"}}></i>{" "}Unavailable</td>
      <td>
                        <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                        </td>
                      </tr>
                    
                     

                    </tbody>
                  </Table>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </>
    );
  }
}

export default Settings;
