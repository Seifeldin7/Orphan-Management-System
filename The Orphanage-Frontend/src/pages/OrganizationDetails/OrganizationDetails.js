import React, { useState } from "react";
import "./OrganizationDetails.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { base } from "./../../config/environment";
import axios from "axios";
import { config, isLoggedIn } from "./../../utils/auth";
import Card from "../../components/Card/Card";
import HappyImage from '../../assets/happy.jpg';
import Button from "../../components/Button/Button";

const OrganizationDetails = () => {
    const [organization, setOrganization] = useState(
        {
            type: 'Education',
            name: 'EDU',
            description: 'This project empowers the rural, underprivileged girl students studying at Isha Vidhya schools in India, by funding their education, noon meal and transportation. Girl students benefited by this project can focus on their studies without a worry about their fees, food and safe transportation to the school.',
            location: 'Egypt',
            yearFouned: '2014',
            yearsFundraising: '3',
            projectsFunded: '0'
        });
    return (
        <>
            <img className="full-width-img" src={HappyImage} />
            <div className="center-img">
                <img className="square-img" src={HappyImage} />
                <h2 className="details">{organization.name}</h2>
                <Button title="Donate" style={{ borderRadius: 25, width: '10rem', borderColor: "#f0a91a" }} />
            </div>
            <div className="info">
                <div className="info-container">
                    <h1 className="title">{organization.yearFouned}</h1>
                    <p style={{color: 'black'}}>year founded</p>
                </div>
                <div className="info-container">
                    <h1 className="title">{organization.yearsFundraising}</h1>
                    <p style={{color: 'black'}}>years fundraising</p>
                </div>
                <div className="info-container">
                    <h1 className="title">{organization.projectsFunded}</h1>
                    <p style={{color: 'black'}}>projects funded</p>
                </div>
            </div>
            <hr style={{width: '80%'}}/>
        </>

    );

}

export default OrganizationDetails;
