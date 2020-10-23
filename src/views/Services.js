import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ListGroup, ListGroupItem,
  Input,
  FormGroup,
  Form,
  Row,
  Col,
  Container

} from "reactstrap";
import { getCategories, createExpertService, getExpertServices, deleteExpertService, updateExpertService } from "actions/serviceActions";
import { connect } from "react-redux";
class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCategory: false,
      dropdownOpen: false,
      setDropdownOpen: false,
      categories: [],
      services: [],
      updatedService: {},
      deletedService: {},
      newService: {
        serviceName: '',
        price: '',
        duration: '1h'
      },
      category: {
        categoryName: '',
        categoryId: ''
      }
    };
  }
  toggle = (prevState) => {
    this.setState({
      setDropdownOpen: !prevState
    });
  }
  componentDidMount() {
    this.props.getCategories();
    this.props.getExpertServices();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      categories: nextProps.service.categories,
      services: nextProps.service.services
    })
  };
  toggleModalSearch = () => {
    this.setState({
      modalCategory: !this.state.modalCategory,
    });
  };
  editService = (service) => {
    console.log('----------here--------', service)
    this.setState({
      updatedService: service
    })
    this.toggleModal("editModal");
  }
  updateExpertService = (event) => {
    event.preventDefault();
    const serviceData = {
      service: this.state.updatedService
    }
    this.props.updateExpertService(serviceData);
    this.setState({
      editModal: !this.state.editModal,
      updatedService: {}
    })
  }
  createExpertService = (event) => {
    event.preventDefault();
    const serviceData = {
      service: this.state.newService,
      category: this.state.category
    }
    this.props.createExpertService(serviceData);
    this.setState({
      modalCategory: !this.state.modalCategory,
      newService: {
        serviceName: '',
        price: '',
        duration: '1h'
      },
      category: {
        categoryName: '',
        categoryId: ''
      }
    })
  };
  deleteExpertService = () => {
    const archived_service = {
      service: this.state.deletedService
    }
    this.props.deleteExpertService(archived_service);
    this.toggleModal("serviceModal");
  };
  onChangeCategory = (event) => {
    let items = [...this.state.categories];
    let item = items.find(x => x.categoryName === event.target.value);
    this.setState({
      category: {
        categoryName: item.categoryName,
        categoryId: item._id
      }
    })
  };
  toggleModal = (state, service) => {
    console.log('--------state-------', this.state[state])
    this.setState({
      [state]: !this.state[state],
      deletedService: service
    });
  };
  onChange = e => {
    let obj = this.state.newService;
    obj[e.target.id] = e.target.value;
    this.setState({ newService: obj })
  }
  onChangeUpdateService = e => {
    let obj = this.state.updatedService;
    obj[e.target.id] = e.target.value;
    this.setState({ updatedService: obj })
  }
  render() {
console.log('--------this.state.services----------',this.state.services);
    const loading = !this.props.service.loading;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <h1>Services</h1>
            </Col>
            <Col
              md="4">
              <div style={{ float: 'right' }}>
                <Button color="warning" size="md" onClick={this.toggleModalSearch}>
                  Add Services
            </Button>
              </div>
            </Col>
          </Row>
          { (loading) ? (
          <Container>
            {(this.state.services) ? (Object.keys(this.state.services).map(key =>
              <Row>
                <Col style={{
                  marginTop: '20px'
                }}>
                  <h1>{key}</h1>
                  <ListGroup>
                    { 
                    (this.state.services) ? (this.state.services[key].map(service =>
                      <ListGroupItem className="d-flex justify-content-between align-items-center">
                        <span> {service.serviceName}{" "}</span>
                        <span> {service.duration}{" "}</span>
                        <span> €{service.price}{" "}</span>
                        <span>
                          <Button className="btn-icon" color="success" size="sm" onClick={() => this.editService(service)}>
                            <i className="fa fa-edit"></i>
                          </Button>{` `}
                          <Button className="btn-icon" color="danger" size="sm" onClick={() => this.toggleModal("serviceModal", service)}>
                            <i className="fa fa-times" />
                          </Button></span>
                      </ListGroupItem>)
                    ) : (
                        <div>Nothing is here</div>
                      )}


                  </ListGroup>
                </Col>
              </Row>)) : (
                <div></div>
              )}
          </Container>
           ): (
            <div className="content">        
            </div>
          )}
          <Modal
            modalClassName="modal-services"
            isOpen={this.state.modalCategory}
            toggle={this.toggleModalSearch}
          >
            <div className="modal-header justify-content-center">
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={this.toggleModalSearch}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>

            </div>
            <Form onSubmit={this.createExpertService}>
              <ModalBody>
                <h4 className="title title-up">Basic Information</h4>
                <div className="content">
                  <hr />
                  <Row>

                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Service Name</label>
                        <Input
                          required
                          onChange={this.onChange}
                          id="serviceName"
                          type="text"
                          value={this.state.newService.serviceName}
                        />
                      </FormGroup>
                    </Col><Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Category</label>
                        <Input
                          required
                          data-trigger=""
                          id="category"
                          type="select"
                          onChange={this.onChangeCategory}
                        >
                          {(this.state.categories) ? (
                            this.state.categories.map(category => {
                              return <option key={category._id}>{category.categoryName}</option>
                            })
                          ) : (
                              <option placeholder="true">Loading Categories</option>
                            )
                          }

                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </ModalBody>
              <ModalBody>
                <div className="content" style={{
                  marginTop: "50px"
                }}>
                  <h4 className="title title-up">PRICING AND DURATION</h4>
                  <hr />
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Duration</label>
                        <Input
                          required
                          data-trigger=""
                          id="duration"
                          value={this.state.newService.duration || '1h'}
                          type="select"
                          onChange={this.onChange}
                        >
                          <option>1h</option>
                          <option >1h 30m</option>
                          <option>2h</option>
                          <option >2h 30m</option>
                          <option>3h</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Price</label>
                        <Input
                          required
                          onChange={this.onChange}
                          id="price"
                          value={this.state.newService.price}
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <Row style={{ marginTop: "30px" }}>
                  <Col>
                    <Button className="btn-block"
                      color="success"
                      type="submit"
                    >
                      Save
                  </Button>
                  </Col>
                </Row>
              </ModalBody>

            </Form>
          </Modal>
          <Modal
            modalClassName="modal-services"
            isOpen={this.state.serviceModal}
            toggle={() => this.toggleModal("serviceModal")}>
            <div className="modal-header justify-content-center">
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("serviceModal")}
              >
                <i className="tim-icons icon-simple-remove" />
              </button>
            </div>
            <ModalBody >
              <div className="content">
            <div className="text-center">
                  <h4 className="heading">Are you sure you want to delete this service?</h4>
                </div>
                <Row className="justify-content-center">
              
                    <Button color="default" size="md"
                     onClick={() => this.toggleModal("serviceModal")}>
                      Cancel
                    </Button>
                 
                    <Button color="warning" size="md"
                    onClick={() => this.deleteExpertService()}>
                      Delete
                    </Button>
                
                </Row>
                </div>
            </ModalBody>
          </Modal>
          <Modal
             modalClassName="modal-services"
             isOpen={this.state.editModal}
             toggle={() => this.toggleModal("editModal")}>
             <div className="modal-header justify-content-center">
               <button
                 aria-label="Close"
                 className="close"
                 data-dismiss="modal"
                 type="button"
                 onClick={() => this.toggleModal("editModal")}
               >
                 <i className="tim-icons icon-simple-remove" />
               </button>
             </div>
            <Form onSubmit={this.updateExpertService}>
              <ModalBody>
                <h4 className="title title-up">EDIT SERVICE</h4>
                <div className="content">
                  <hr />
                  <Row>

                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Service Name</label>
                        <Input
                          required
                          onChange={this.onChangeUpdateService}
                          id="serviceName"
                          type="text"
                          value={this.state.updatedService.serviceName}
                        />
                      </FormGroup>
                    </Col><Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>Category</label>
                        <Input
                          required
                          data-trigger=""
                          id="category"
                          type="select"
                          onChange={this.onChangeUpdateService}
                          value={this.state.updatedService.category}
                        >
                          {(this.state.categories) ? (
                            this.state.categories.map(category => {
                              return <option key={category._id}>{category.categoryName}</option>
                            })
                          ) : (
                              <option placeholder="true">Loading Categories</option>
                            )
                          }

                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </ModalBody>
              <ModalBody>
                <div className="content" style={{
                  marginTop: "50px"
                }}>
                  <h4 className="title title-up">PRICING AND DURATION</h4>
                  <hr />
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>Duration</label>
                        <Input
                          required
                          data-trigger=""
                          id="duration"
                          value={this.state.updatedService.duration}
                          type="select"
                          onChange={this.onChangeUpdateService}
                        >
                          <option>1h</option>
                          <option >1h 30m</option>
                          <option>2h</option>
                          <option >2h 30m</option>
                          <option>3h</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Price</label>
                        <Input
                          required
                          onChange={this.onChangeUpdateService}
                          id="price"
                          value={this.state.updatedService.price}
                          type="number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
                <Row style={{ marginTop: "30px" }}>
                  <Col>
                    <Button className="btn-block"
                      color="success"
                      type="submit"
                    >
                      Save
                  </Button>
                  </Col>
                </Row>
              </ModalBody>

            </Form>
          </Modal>
          
        </div>
       
      </>
    );
  }
}
function mapStateToProp(state) {
  return {
    service: state.service
  }
}
export default connect(
  mapStateToProp,
  { getCategories, createExpertService, getExpertServices, deleteExpertService, updateExpertService}
)(Services);

