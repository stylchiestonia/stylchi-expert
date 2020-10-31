import React from "react";
import { connect } from "react-redux";
import ReactDatetime from "react-datetime";
import moment from "moment";
import { getCurrentExpert, getBankInfo, updateCurrentExpert, createOrUpdateBankInfo, getExpertScheduale, updateExpertScheduale, uploadImage, getExpertGallery, updateImage } from "actions/userActions";
import Gallery from 'react-grid-gallery';

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
  Table,
  Spinner,
  Form
} from "reactstrap";
import NotificationAlert from "react-notification-alert";
import bg from "assets/img/flower-back.png";

class Settings extends React.Component {
  notify = place => {
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            {this.state.errors.data}
          </div>
        </div>
      ),
      type: 'warning',
      icon: "tim-icons icon-bell-55",
      autoDismiss: 7
    };
    this.refs.notificationAlert.notificationAlert(options);
  };

  constructor(props) {
    super(props);
    this.fileInput = React.createRef()
    this.state = {
      errors: {},
      isSubmitting: false,
      userId: '',
      modalBank: false,
      modalPersonalDetails: false,
      modalPhotoGallery: false,
      modalAvailability: false,
      modalNotification: false,
      about: '',
      status: false,
      rowKey: null,
      isEdit: false,
      image: null,
      selected: 0,
      scheduale: {
        availability: []
      },
      slidesPerView: 'auto',
      gallery: [],
      images: [],
      ibanNumber: '',
      accountNumber: '',
      bankName: '',
      bankAddress: '',
      swiftCode: '',
      fullName: '',
      userProfile: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        lang: '',
        phoneNumber: '',
        status: '',
        role: '',
        gender: '',
        dateOfBirth: '',
        venueName: '',
        residential: {
          street: '',
          number: '',
          city: '',
          country: ''
        },
        venue: {
          street: '',
          number: '',
          city: '',
          country: ''
        }
      }
    }

    this.onSelectImage = this.onSelectImage.bind(this);
  }
  onEdit = (id) => {

    this.setState({
      status: true,
      rowKey: id
    })
  }

  onCancel = () => {
    const user = {
      role: 'expert'
    };
    this.props.getExpertScheduale(user);
    this.setState({
      status: false,
      rowKey: null
    })
  }
  onSave = () => {
    const user = {
      scheduale: this.state.scheduale
    };
    this.props.updateExpertScheduale(user);
    this.setState({
      status: false,
      rowKey: null
    })
  }
  componentDidMount() {
    const user = {
      role: 'expert'
    };
    this.setState({
      userId: localStorage.getItem('userId')
    })

    this.props.getBankInfo();
    this.props.getCurrentExpert(user);
    this.props.getExpertScheduale(user);
    this.props.getExpertGallery(user);
  }
  onRemoveImage() {
    let canDel = false;
    for (const img of this.state.images) {
      if (img.isSelected) {
        canDel = true;
      }
    }
    if (canDel) {
      const data = {
        images: this.state.images
      }
      this.setState({
        isSubmitting: true
      })
      this.props.updateImage(data).then(res => {
        const user = {
          role: 'expert'
        };
        this.props.getExpertGallery(user);
      }).then(
        this.setState({
          isSubmitting: false
        })
      ).catch(error => {
        this.setState({
          isSubmitting: false
        })
        this.notify('tr')
      })
    }

  }
  onSelectImage(index) {
    var images = this.state.images.slice();
    var img = images[index];
    if (img.hasOwnProperty("isSelected"))
      img.isSelected = !img.isSelected;
    else
      img.isSelected = true;

    this.setState({
      images: images
    });
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
  handleProfileUpdate = () => {
    const current = {
      currentUser: this.state.userProfile
    };
    
    this.setState({
      isSubmitting: true
    })
    this.props.updateCurrentExpert(current).then(res => {
      this.setState({
        isSubmitting: false
      })
    }).catch( errors => {
      this.setState({
        isSubmitting: false
      })
      this.notify("tr")
    })
  }
  triggerInputFile = () => {
    if (this.fileInput.current !== undefined && this.fileInput.current.click !== undefined)
      this.fileInput.current.click()
  }

  onChangeImage = (event) => {
    const maxAllowedSize = 5 * 1024 * 1024;
    if (event.target.files[0].size > maxAllowedSize) {
      alert("File is too big!");
      return
    };
    if (event.target.files && event.target.files[0]) {
      this.setState({ image: event.currentTarget.files[0] })
      let imageFormObj = new FormData();
      imageFormObj.append("photo", event.target.files[0]);
      this.setState({
        isSubmitting: true
      })
      this.props.uploadImage(imageFormObj).then(res => {
        this.setState({
          isSubmitting: false
        })
      }).catch( errors => {
        this.setState({
          isSubmitting: false
        })
        this.notify("tr")
      }
        
      )
    }
  }
  handleFromChange = (event) => {

    let items = [...this.state.scheduale.availability];
    let item = items.find(x => x._id === this.state.rowKey);
    item.from = event.target.value;
    this.setState({
      data: items.map(el => (el._id === item._id ? { ...el, item } : el))
    }
    );
  }
  handleToChange = (event) => {

    let items = [...this.state.scheduale.availability];
    let item = items.find(x => x._id === this.state.rowKey);
    item.to = event.target.value;
    this.setState({
      data: items.map(el => (el._id === item._id ? { ...el, item } : el))
    }
    );
  }
  handleStatusChange = (event) => {

    let items = [...this.state.scheduale.availability];
    let item = items.find(x => x._id === this.state.rowKey);
    item.status = event.target.value;
    this.setState({
      data: items.map(el => (el._id === item._id ? { ...el, item } : el))
    }
    );
  }
  onChange = e => {
    let obj = this.state.userProfile;
    obj[e.target.id] = e.target.value;
    this.setState({ userProfile: obj })
  };
  onChangeDateOfBirth = (e) => {
    let date = moment(e.toDate()).format('MM/DD/YYYY');
    let obj = this.state.userProfile;
    obj.dateOfBirth = date;
    this.setState({ userProfile: obj })
  }
  onChangeResidential = e => {
    let obj = this.state.userProfile;
    obj.residential[e.target.id] = e.target.value;
    this.setState({ userProfile: obj })
  };
  onChangeVenue = e => {
    let obj = this.state.userProfile;
    obj.venue[e.target.id] = e.target.value;
    this.setState({ userProfile: obj })
  };
  onChangeBankInfo = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.bankInfo !== null && nextProps.user.bankInfo !== undefined) {
      this.setState({
        userId: nextProps.user.bankInfo.userId,
        ibanNumber: nextProps.user.bankInfo.ibanNumber,
        accountNumber: nextProps.user.bankInfo.accountNumber,
        bankName: nextProps.user.bankInfo.bankName,
        bankAddress: nextProps.user.bankInfo.bankAddress,
        swiftCode: nextProps.user.bankInfo.swiftCode,
        fullName: nextProps.user.bankInfo.fullName
      });
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
     
    }
    this.setState({
      userProfile: nextProps.user.payload,
      scheduale: nextProps.user.scheduale,
      images: nextProps.user.gallery

    })
  };

  updateBankDetails = (e) => {
    e.preventDefault();
    let data = {
      bankInfo: {
        ibanNumber: this.state.ibanNumber,
        accountNumber: this.state.accountNumber,
        bankName: this.state.bankName,
        bankAddress: this.state.bankAddress,
        swiftCode: this.state.swiftCode,
        fullName: this.state.fullName,
      }
    }
    this.setState({
      isSubmitting: true
    })
    this.props.createOrUpdateBankInfo(data).then(res => {
      this.setState({
        isSubmitting: false
      })
    }).catch( errors => {
      this.setState({
        isSubmitting: false
      })
      this.notify("tr")
    })
  }

  render() {
    const loading = !this.props.user.loading;
    return (
      <>
        <div className="content"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "right top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
          <Container>
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
              <Form onSubmit={this.updateBankDetails}>
                <Row>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Expert ID</label>
                      <Input
                        disabled
                        value={this.state.userId}
                        type="string"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Full Name</label>
                      <Input
                      required
                        onChange={this.onChangeBankInfo}
                        value={this.state.fullName}
                        type="text"
                        id="fullName"
                      />
                    </FormGroup>
                  </Col>
                </Row>            
                <Row style={{ marginTop: "30px" }}>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>IBAN number</label>
                      <Input
                      required
                        onChange={this.onChangeBankInfo}
                        value={this.state.ibanNumber}
                        type="text"
                        id="ibanNumber"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>
                      <label>Account number</label>
                      <Input
                      required
                        onChange={this.onChangeBankInfo}
                        value={this.state.accountNumber}
                        type="text"
                        id="accountNumber"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Bank Name</label>
                      <Input
                      required
                        onChange={this.onChangeBankInfo}
                        value={this.state.bankName}
                        type="text"
                        id="bankName"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="pl-md-1" md="6">
                    <FormGroup>

                      <label>Bank Address</label>
                      <Input
                      required
                        onChange={this.onChangeBankInfo}
                        value={this.state.bankAddress}
                        type="text"
                        id="bankAddress"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col className="pr-md-1" md="6">
                    <FormGroup>
                      <label>Swift Code</label>
                      <Input
                      required
                        onChange={this.onChangeBankInfo}
                        value={this.state.swiftCode}
                        type="text"
                        id="swiftCode"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col>
                    {!this.state.isSubmitting && <Button className="btn-block"
                      color="success"
                      type="submit"  
                    >
                      Save
                  </Button>}
                  {this.state.isSubmitting && <Button className="btn-block"
                      color="success"
                      type="submit"  
                      disabled
                    >
                      Save
                  </Button>}
                  </Col>
                </Row>
                </Form>
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
              {(loading && this.state.userProfile) ? (
                <div className="content">
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          id="firstName"
                          value={this.state.userProfile.firstName || ''}
                          type="text"
                          onChange={this.onChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          id="lastName"
                          value={this.state.userProfile.lastName || ''}
                          onChange={this.onChange}
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
                          id="phoneNumber"
                          value={this.state.userProfile.phoneNumber || ''}
                          onChange={this.onChange}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Email</label>
                        <Input
                          id="email"
                          disabled
                          value={this.state.userProfile.email || ''}
                          onChange={this.onChange}
                          type="email"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "30px" }}>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Gender</label>
                        <Input
                          data-trigger=""
                          id="gender"
                          name="gender"
                          type="select"
                          value={this.state.userProfile.gender || 'Male'}
                          onChange={this.onChange}
                        >
                          <option placeholder="true">Male</option>
                          <option defaultValue="2">Female</option>
                          <option defaultValue="3">Others</option>
                        </Input>
                      </FormGroup>

                    </Col>
                    <Col className="pr-md-1">
                      <FormGroup>
                        <label>Date of Birth</label>
                        <ReactDatetime
                          inputProps={{
                            placeholder: "Select Date"
                          }}
                          timeFormat={false}
                          value={'' || this.state.userProfile.dateOfBirth}
                          id="dateOfBirth"
                          onChange={this.onChangeDateOfBirth}

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
                    <Col className="pr-md-1" md="8">
                      <FormGroup>
                        <label>Street</label>
                        <Input
                          id="street"
                          onChange={this.onChangeResidential}
                          value={'' || this.state.userProfile.residential.street}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="2">
                      <FormGroup>
                        <label>No</label>
                        <Input
                          type="text"
                          value={'' || this.state.userProfile.residential.number}
                          onChange={this.onChangeResidential}
                          id="number"
                        />
                      </FormGroup>
                    </Col>

                  </Row>
                  <Row style={{ marginTop: "30px" }}>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          value={'' || this.state.userProfile.residential.city}
                          type="text"
                          onChange={this.onChangeResidential}
                          id="city"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          value={'' || this.state.userProfile.residential.country}
                          type="text"
                          onChange={this.onChangeResidential}
                          id="country"
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
                          id="street"
                          value={'' || this.state.userProfile.venue.street}
                          onChange={this.onChangeVenue}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="2">
                      <FormGroup>
                        <label>No</label>
                        <Input
                          value={'' || this.state.userProfile.venue.number}
                          id="number"
                          onChange={this.onChangeVenue}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Venue Name (optional)</label>
                        <Input
                          type="text"
                          value={'' || this.state.userProfile.venueName}
                          id="venueName"
                          onChange={this.onChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "30px" }}>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          value={'' || this.state.userProfile.venue.city}
                          id="city"
                          onChange={this.onChangeVenue}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          value={'' || this.state.userProfile.venue.country}
                          id="country"
                          onChange={this.onChangeVenue}
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
                          id="about"
                          value={this.state.userProfile.about || ''}
                          onChange={this.onChange}
                          placeholder="Write something about yourself which will be visible to public"
                          type="textarea"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "30px" }}>
                    <Col>
                     { !this.state.isSubmitting && <Button className="btn-block"
                        color="success"
                        type="button"
                        onClick={() => {
                          this.handleProfileUpdate();
                        }}
                      >
                        Save
                  </Button>}
                  { this.state.isSubmitting && <Button className="btn-block"
                        color="success"
                        type="button"
                       disabled
                      >
                        Save
                  </Button>}
                    </Col>
                  </Row>
                </div>) : (
                  <div></div>
                )}
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
                  <div className='content'>
                    {!this.state.isSubmitting && <Button
                      color='neutral'
                      onClick={() => this.triggerInputFile()}
                    >
                      <img
                        type="file"
                        className="rounded-circle"
                        alt="..."
                        style={{
                          height: '100px',
                          width: '100px'
                        }}
                        src={require("assets/img/upload_button.png")}
                      />

                    </Button>}
                    {this.state.isSubmitting && <Button
                      color='neutral'
                      disabled
                      onClick={() => this.triggerInputFile()}
                    >
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Uploading...

                    </Button>}
                    <input
                      accept=".png, .jpg, .jpeg"
                      ref={this.fileInput}
                      type='file'
                      max-file-size="1048576"
                      style={{
                        opacity: 0,
                        position: 'absolute'
                      }}
                      onChange={(e) => this.onChangeImage(e)}
                    />
                  </div>
                </Row>
                <Row style={{ marginTop: "30px" }} className="justify-content-center">
                  Upload Image(s)
           </Row>
                <Row className="justify-content-center">
                  Max Upload Limit 5
           </Row>
                <Row className="justify-content-center">
                  Max Upload Size 5mb
           </Row>
                <Row className="justify-content-flex-end">
                  <Col>
                    {((this.state.images && this.state.images.length > 0) && !this.state.isSubmitting) &&
                      <div style={{
                        textAlign: "right"
                      }}>
                        <Button className="btn-icon pl-md-5" color="warning" size="sm" onClick={() => this.onRemoveImage()}>
                          <i className="fa fa-trash" />
                        </Button></div>}

                  </Col>
                </Row>
                <Row style={{ marginTop: "30px" }}>
                  <Col>
                    {this.state.images ?
                      <Gallery
                        images={this.state.images}
                        onSelectImage={this.onSelectImage}
                        lightboxWidth={1536}
                      />
                      : false}
                  </Col>
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
                <Table className="settings_table" responsive
                  editable="true">
                  <thead >
                    <tr >
                      <th className="text-center" >Day week</th>
                      <th >From</th>
                      <th >To</th>
                      <th >Status</th>
                      <th className="text-center"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {(this.state.scheduale && (this.state.scheduale.availability.map(availability => (
                      <tr key={availability._id}>
                        <td className="text-center">{availability.day}</td>
                        <td >
                          {(this.state.status === true && this.state.rowKey === availability._id) ? (
                            <div
                              style={{
                                width: "60px",
                              }}
                              className="align-items-center justify-content-center">
                              <Input
                                className="text-center"
                                style={{
                                  width: "100px",
                                }}
                                data-trigger=""
                                id="choices-single-default"
                                name="choices-single-default"
                                type="select"
                                value={availability.from}
                                onChange={this.handleFromChange}
                              >
                                <option placeholder="true">9:00 AM</option>
                                <option placeholder="true">9:30 AM</option>
                                <option placeholder="true">10:00 AM</option>
                                <option placeholder="true">10:30 AM</option>
                                <option placeholder="true">11:00 AM</option>
                                <option placeholder="true">11:30 AM</option>
                                <option placeholder="true">12:00 PM</option>
                                <option placeholder="true">12:30 PM</option>
                                <option placeholder="true">1:00 PM</option>
                                <option placeholder="true">1:30 PM</option>
                                <option placeholder="true">2:00 PM</option>
                                <option placeholder="true">2:30 PM</option>
                                <option placeholder="true">3:00 PM</option>
                                <option placeholder="true">3:30 PM</option>
                                <option placeholder="true">4:00 PM</option>
                                <option placeholder="true">4:30 PM</option>
                                <option placeholder="true">5:00 PM</option>
                                <option placeholder="true">5:30 PM</option>
                                <option placeholder="true">6:00 PM</option>
                                <option placeholder="true">6:30 PM</option>
                                <option placeholder="true">7:00 PM</option>
                                <option placeholder="true">7:30 PM</option>
                                <option placeholder="true">8:00 PM</option>
                                <option placeholder="true">8:30 PM</option>
                                <option placeholder="true">9:00 PM</option>
                              </Input>
                            </div>) : (
                              <p>{availability.from}</p>
                            )
                          }
                        </td>
                        <td>
                          {(this.state.status === true && this.state.rowKey === availability._id) ? (
                            <div
                              style={{
                                width: "60px",
                              }} >
                              <Input
                                style={{
                                  width: "100px",
                                }}
                                className="text-center"
                                data-trigger=""
                                id="choices-single-default"
                                name="choices-single-default"
                                type="select"
                                value={availability.to}
                                onChange={this.handleToChange}
                              >
                                <option placeholder="true">9:00 AM</option>
                                <option placeholder="true">9:30 AM</option>
                                <option placeholder="true">10:00 AM</option>
                                <option placeholder="true">10:30 AM</option>
                                <option placeholder="true">11:00 AM</option>
                                <option placeholder="true">11:30 AM</option>
                                <option placeholder="true">12:00 PM</option>
                                <option placeholder="true">12:30 PM</option>
                                <option placeholder="true">1:00 PM</option>
                                <option placeholder="true">1:30 PM</option>
                                <option placeholder="true">2:00 PM</option>
                                <option placeholder="true">2:30 PM</option>
                                <option placeholder="true">3:00 PM</option>
                                <option placeholder="true">3:30 PM</option>
                                <option placeholder="true">4:00 PM</option>
                                <option placeholder="true">4:30 PM</option>
                                <option placeholder="true">5:00 PM</option>
                                <option placeholder="true">5:30 PM</option>
                                <option placeholder="true">6:00 PM</option>
                                <option placeholder="true">6:30 PM</option>
                                <option placeholder="true">7:00 PM</option>
                                <option placeholder="true">7:30 PM</option>
                                <option placeholder="true">8:00 PM</option>
                                <option placeholder="true">8:30 PM</option>
                                <option placeholder="true">9:00 PM</option>
                              </Input></div>) : (
                              <p>{availability.to}</p>
                            )
                          }
                        </td>
                        <td >
                          {(this.state.status === true && this.state.rowKey === availability._id) ? (
                            <div
                              style={{
                                width: "60px",
                              }}
                              className="align-items-center justify-content-center">
                              <Input
                                className="text-center"
                                style={{
                                  width: "100px",
                                }}
                                data-trigger=""
                                id="choices-single-default"
                                name="choices-single-default"
                                type="select"
                                value={availability.status}
                                onChange={this.handleStatusChange}
                              >
                                <option placeholder="true">available</option>
                                <option placeholder="true">unavailable</option>
                              </Input>
                            </div>) : (
                              <p>
                                {(availability.status === 'available' && <i className="fa fa-circle" aria-hidden="true" style={{ color: "#22BF69" }}></i>)}
                                {(availability.status === 'unavailable' && <i className="fa fa-circle" aria-hidden="true" style={{ color: "#F90719" }}></i>)}
                                {" "}{availability.status}</p>

                            )
                          }
                        </td>
                        <td>
                          {(this.state.status === true && this.state.rowKey === availability._id) ? (
                            <div>
                              <Button className="btn-icon" color="success" size="sm"
                                onClick={() => {
                                  this.onSave()
                                }}>
                                <i className="fa fa-check"></i>
                              </Button> {` `}
                              <Button className="btn-icon" color="warning" size="sm"
                                onClick={() => {
                                  this.onCancel()
                                }}>
                                <i className="fa fa-times"></i>
                              </Button>
                            </div>
                          ) : (<Button className="btn-icon" color="success" size="sm"
                            onClick={() => {
                              this.onEdit(availability._id);
                            }}>
                            <i className="fa fa-edit"></i>
                          </Button>)}
                        </td>
                      </tr>
                    ))))}
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

function mapStateToProp(state) {
  return {
    user: state.user,
    errors: state.errors
  }
}
export default connect(
  mapStateToProp,
  { getCurrentExpert, updateImage, getBankInfo, createOrUpdateBankInfo, updateCurrentExpert, getExpertScheduale, updateExpertScheduale, uploadImage, getExpertGallery }
)(Settings);
