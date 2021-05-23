import React from "react";
import "./DonationHistory.css";
import { Table } from '../Table/Table';
import makeData from './makeData';
import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";


const DonationHistory = () => {
    const data = React.useMemo(() => makeData(20), [])
    console.log(data)
    const columns = React.useMemo(
        () => [
            {
                Header: 'Donation History',
                columns: [
                    {
                        Header: 'First Name',
                        accessor: 'firstName',
                    },
                    {
                        Header: 'Last Name',
                        accessor: 'lastName',
                    },
                    {
                        Header: 'Age',
                        accessor: 'age',
                    },
                ],
            },
        ],
        []
    )
    return (
        <React.Fragment>
            <Navbar isLoggedIn={true}
                data-testid="navbar"
            />
            <Container className="tabs-contain">
                <CssBaseline />
                <Table columns={columns} data={data} />
            </Container>
        </React.Fragment>

    );

}

export default DonationHistory;
