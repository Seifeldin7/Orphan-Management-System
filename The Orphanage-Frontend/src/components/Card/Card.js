import React, { Component } from "react";
import "./Card.css";
import CardUI from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Col, Row } from "react-bootstrap";
import { CardActionArea, CardActions } from "@material-ui/core";
import { Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <CardUI className="card">
        <Row>
          <Col xs={12} md={4}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="100%"
              image={this.props.data.image}
              title="Contemplative Reptile"
            />
          </Col>
          <Col xs={12} md={8}>
            <CardContent>
              <CardActionArea>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.data.name} | {this.props.data.type}
                </Typography>
                <hr />
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.data.description}
                </Typography>
              </CardActionArea>
              <CardActions className="card-actions">
                <Button size="small" onClick={() => this.props.onClickDonate()}>
                  <p className="card-btn">Donate</p>
                </Button>
                <Button size="small">
                  <Link to={"/organization"} className="nav-link text-light">
                    <p className="card-btn">Learn More</p>
                  </Link>
                </Button>
              </CardActions>
            </CardContent>
          </Col>
        </Row>
      </CardUI>
    );
  }
}

export default Card;
