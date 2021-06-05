import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer className="footer">
        <div className="container left">
          <div className="row">
            <div className="col">
              <Typography variant="body2" color="textPrimary" align="center">
                {"Copyright © "}
                <Link color="inherit" href="https://material-ui.com/" className="gold">
                  Etbara3
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
              <hr />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
