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
import { getCategories, createExpertService, getExpertServices } from "actions/serviceActions";
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
      service: {
        serviceName: '',
        price: '',
        duration: '1h'
      },
      category: {}
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
      modalCategory: !this.state.modalCategory
    });
  };
  createExpertService = (event) => {
    console.log('------event----------')
    event.preventDefault();
    const serviceData = {
      service: this.state.service,
      category: this.state.category
    }
    this.props.createExpertService(serviceData);
    this.props.getExpertServices();
    this.setState({
      modalCategory: !this.state.modalCategory
    })
  }
  onChangeCategory = (event) => {
    let items = [...this.state.categories];
    let item = items.find(x => x.categoryName === event.target.value);
    this.setState({
      category: item
    })
  }
  onChange = e => {
    let obj = this.state.service;
    obj[e.target.id] = e.target.value;
    this.setState({ service: obj })
  }
  render() {
    console.log('----------------', this.state.categories)
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
                          <Button className="btn-icon" color="success" size="sm">
                            <i className="fa fa-edit"></i>
                          </Button>{` `}
                          <Button className="btn-icon" color="danger" size="sm">
                            <i className="fa fa-times" />
                          </Button></span>
                      </ListGroupItem>)
                    ) : (
                        <div></div>
                      )}


                  </ListGroup>
                </Col>
              </Row>)) : (
                <div></div>
              )}
          </Container>
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
                          value={this.state.service.serviceName}
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
                          value={this.state.service.duration || '1h'}
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
                          value={this.state.service.price}
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
  { getCategories, createExpertService, getExpertServices }
)(Services);

