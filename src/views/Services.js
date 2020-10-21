import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ListGroup, ListGroupItem,
  Input,
  FormGroup,
  Row,
  Col,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu

} from "reactstrap";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalCategory: false,
      dropdownOpen: false,
      setDropdownOpen: false
    };
  }
  toggle = (prevState) => {
    this.setState({
      setDropdownOpen: !prevState
  });
  }
  toggleModalSearch = () => {
    this.setState({
        modalCategory: !this.state.modalCategory
    });
  };
  render() {

    return (
      <>
        <div className="content">
        <Row>
            <Col md="8">
              <h1>Services</h1>
            </Col>
            <Col
              md="4">
                  <div style={{ float:'right'}}>
              <Button color="warning" size="md" onClick={this.toggleModalSearch}>
              Add Services
            </Button>
            </div>
            </Col>
          </Row>
          <Container>
        <Row>
           <Col>
           <h1>Hair Cut</h1>
           <ListGroup>
           <ListGroupItem className=" d-flex justify-content-between align-items-center">
               <span> Men's Hair Cut{" "}</span>
               <span> 1hr{" "}</span>
               <span> €25{" "}</span>
               <span>
                   <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                <Button className="btn-icon" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button></span>
        </ListGroupItem>
        <ListGroupItem className=" d-flex justify-content-between align-items-center">
               <span> Kids's Hair Cut{" "}</span>
               <span> 1hr{" "}</span>
               <span> €25{" "}</span>
               <span>
                   <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                <Button className="btn-icon" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button></span>
        </ListGroupItem>
        <ListGroupItem className=" d-flex justify-content-between align-items-center">
               <span> Women Hair Cut{" "}</span>
               <span> 1hr{" "}</span>
               <span> €250{" "}</span>
               <span>
                   <Button className="btn-icon" color="success" size="sm">
                    <i className="fa fa-edit"></i>
                </Button>{` `}
                <Button className="btn-icon" color="danger" size="sm">
                    <i className="fa fa-times" />
                </Button></span>
        </ListGroupItem>
    </ListGroup>
           </Col>
          </Row>
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
                <ModalBody>
                <h4 className="title title-up">Basic Information</h4>
                <div className="content">
                <hr />
                <Row>
                <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Service Name</label>
                          <Input
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Type</label>
                          <Input
                            type="text"
                          />
                        </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="6">
                        <FormGroup>
                        <UncontrolledDropdown>
                    <DropdownToggle>
                    <label>Category</label>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem> 
                        Pending
                      </DropdownItem>
                      <DropdownItem >
                        Upcoming
                      </DropdownItem>
                      <DropdownItem 
                    
                     >
                        Past
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                        </FormGroup>
                      </Col>
                </Row>
                </div>
                </ModalBody>
                <ModalBody>
                <div className="content" style={{
                    marginTop:"100px"
                }}>
                <h4 className="title title-up">PRICING AND DURATION</h4>
                <hr />
                <Row>
                <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Duration</label>
                          <Input
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Price</label>
                          <Input
    
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                </Row>
                </div>
                </ModalBody>
               
                <div className="modal-footer">
                  <Button
                  size="md"
                    color="success"
                    type="button"
                  >
                    Save
                  </Button>
                </div>
         
        </Modal>
        </div>
      </>
    );
  }
}

export default Services;
