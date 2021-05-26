import React, { Component, useEffect } from "react";
import "./DonationHistory.css";
import { Table } from '../../components/Table/Table';
import makeData from './makeData';
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import { showMoneyDonations } from "../../store/actions/money-donation";
import * as actions from '../../store/actions/money-donation';
import { connect } from 'react-redux';

class DonationHistory extends Component {
    // const data = React.useMemo(() => makeData(20), [])
    // console.log(data)
    // const columns = React.useMemo(
    //     () => [
    //         {
    //             Header: 'Donation History',
    //             columns: [
    //                 {
    //                     Header: 'First Name',
    //                     accessor: 'firstName',
    //                 },
    //                 {
    //                     Header: 'Last Name',
    //                     accessor: 'lastName',
    //                 },
    //                 {
    //                     Header: 'Age',
    //                     accessor: 'age',
    //                 },
    //             ],
    //         },
    //     ],
    //     []
    // )
    componentDidMount() {
        this.props.onShowMoneyDonations();
    }
    // useEffect(() => {
    //     props.onShowMoneyDonations();
    // }, [])
    render() {
        return (
            <React.Fragment>
                <Sidebar
                    data-testid="sidebar"
                />
                <Container className="tabs-contain">
                    <Row style={{ height: '2vh' }}></Row>
                    <Row>
                        <Col sm={{ span: 10, offset: 3 }}>
                            {/* <Table columns={columns} data={data} /> */}
                        </Col>
                    </Row>

                </Container>
            </React.Fragment>

        );
    }

}

//export default DonationHistory;
const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onShowMoneyDonations: () => dispatch(actions.showMoneyDonations())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonationHistory);