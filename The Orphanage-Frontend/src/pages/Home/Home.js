import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { base } from "./../../config/environment";
import axios from "axios";
import { config, isLoggedIn } from "./../../utils/auth";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  const [organizations, setOrganizations] = useState([
    {
      type: 'Education',
      name: 'EDU',
      description: 'This project empowers the rural, underprivileged girl students studying at Isha Vidhya schools in India, by funding their education, noon meal and transportation. Girl students benefited by this project can focus on their studies without a worry about their fees, food and safe transportation to the school.',
      location: 'Egypt'
    }
  ]);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Row>
        <Col md={2} xs={0}>
          <Sidebar
            data-testid="sidebar"
          />
        </Col>
        <Col md={10} xs={12}>
          <div className="main-content">
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
          </div>
        </Col>
      </Row>


      <div className="modal-container">
        <Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
      </div>
    </div>

  );

}

export default Home;
