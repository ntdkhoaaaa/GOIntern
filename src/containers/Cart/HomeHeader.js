import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import logo from "../../assets/tải xuống.png";

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="home-header-container">
          <div className="left-content">
          <img
                className="header-logo"
                src={logo}
                onClick={() => this.MoveToHome()}
              />
              <h1 style={{textAlign:'center !important'}}> Shopping cart</h1>
              </div>
          <div className="center-content"></div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeHeader)
);
