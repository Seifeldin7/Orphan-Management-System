import React, { Component, useState } from "react";
import "./LocationDetails.css";
import { Form } from 'react-bootstrap';
import MapPicker from 'react-google-map-picker'
import Button from "../Button/Button";

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;


const LocationDetails = () => {
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
    }

    return (
        <>
            <Button onClick={handleResetLocation} title="Set Location" style={{ marginRight: 5 }}></Button>
            <Button onClick={handleResetLocation} title="Reset Location" ></Button>
            <MapPicker defaultLocation={defaultLocation}
                zoom={zoom}
                style={{ height: '500px', marginTop: 5 }}
                onChangeLocation={handleChangeLocation}
                onChangeZoom={handleChangeZoom}
                apiKey='AIzaSyDqi2xgU60ME8sHghDfR5u1ViPhaq1fmT8' />
        </>
    );
}

export default LocationDetails;
