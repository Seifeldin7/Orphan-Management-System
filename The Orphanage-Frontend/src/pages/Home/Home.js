import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { base } from "./../../config/environment";
import axios from "axios";
import { config, isLoggedIn } from "./../../utils/auth";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const [organizations, setOrganizations] = useState([
    {
      type: 'Education',
      name: 'EDU',
      description: 'This project empowers the rural, underprivileged girl students studying at Isha Vidhya schools in India, by funding their education, noon meal and transportation. Girl students benefited by this project can focus on their studies without a worry about their fees, food and safe transportation to the school.',
      location: 'Egypt'
    },
    {
      type: 'Education',
      name: 'EDU',
      description: 'This project empowers the rural, underprivileged girl students studying at Isha Vidhya schools in India, by funding their education, noon meal and transportation. Girl students benefited by this project can focus on their studies without a worry about their fees, food and safe transportation to the school.',
      location: 'Egypt'
    }
  ]);
  const [openModal, setOpenModal] = useState(false);
  return (
    <Container fluid>
      <Row>
        <Col md={2} xs={0}>
          <Sidebar
            data-testid="sidebar"
          />
        </Col>
        <Col md={{ span: 8, offset: 1 }} xs={12} className="home-margin">
          {
            organizations.map((organization, index) => {
              return (
                <Card
                  data={organization}
                  onClickDonate={() => { setOpenModal(true) }}
                  key={index} />
              )
            })
          }
        </Col>
      </Row>


      <div className="modal-container">
        <Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
      </div>
    </Container>

  );

}

export default Home;
