import React, { Component } from "react";
import "./Items.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Modal from "../../components/Modal/Modal";
import { Col, Container, Form, Row } from "react-bootstrap";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import UpdateItem from "../../components/UpdateItem/UpdateItem";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      openModal: false,
      selectedItemId: 0,
    };
  }

  componentDidMount() {
    this.props.onFetchItems();
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={2} xs={0}>
            <Sidebar data-testid="sidebar" />
          </Col>
          <Col md={{ span: 8, offset: 1 }} xs={12} className="home-margin">
            {this.props.items.map((item, index) => {
              return (
                <div
                  className="items"
                  key={item.id}
                  onClick={() =>
                    this.setState({ openModal: true, selectedItemId: item.id })
                  }
                >
                  <div className="item">
                    <img
                      src={item.image}
                      alt="item"
                      data-testid="oud-logo-img"
                      className="item-image"
                    />
                    <p className="item-name">{item.name}</p>
                  </div>
                </div>
              );
            })}

            <h3>
              <strong>Add Item</strong>
            </h3>
            <Form className="form-container">
              <Input
                type="text"
                label="Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <Input
                type="text"
                label="Image Url"
                onChange={(e) => this.setState({ imageUrl: e.target.value })}
              />
              <Row>
                <Col>
                  <Button
                    title="Add Item"
                    style={{ minWidth: 100, marginBottom: 100 }}
                    onClick={() => {
                      this.props.onAddItem({
                        name: this.state.name,
                        image: this.state.imageUrl,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <div className="modal-container">
          <Modal
            openModal={this.state.openModal}
            closeModal={() => this.setState({ openModal: false })}
          >
            <UpdateItem
              itemId={this.state.selectedItemId}
              deleteItem={(id) => this.props.onDeleteItem(id)}
              updateItemFun={(id, body) => this.props.onUpdateItem(id, body)}
            />
          </Modal>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteItem: (id) => dispatch(actions.deleteItem(id)),
    onUpdateItem: (id, body) => dispatch(actions.updateItem(id, body)),
    onAddItem: (body) => dispatch(actions.addItem(body)),
    onFetchItems: () => dispatch(actions.fetchItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
