import React, { Component } from "react";
import "./OrganizationInfo.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class OrganizationInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Card className="organization-shadow">
                <CardContent className="organization-info">
                <h2><strong>Organization Information</strong></h2>
                <a target="_blank" href={this.props.organization.website}>{this.props.organization.website}</a>
                <a target="_blank" href={this.props.organization.facebookPage}>Facebook Page</a>
                <p style={{margin:0, marginTop: 20}}>{this.props.organization.street}</p>
                <p style={{margin:0}}>{this.props.organization.governorate}</p>
                <p style={{margin:0}}>{this.props.organization.country}</p>
                <p style={{margin:0}}>{this.props.organization.phone}</p>
                </CardContent>
            </Card>
        );
    }
}

export default OrganizationInfo;
