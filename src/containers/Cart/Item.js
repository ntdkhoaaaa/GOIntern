import React, { Component } from "react";
import { connect } from "react-redux";
// import { FormattedMessage } from "react-intl";
// import { LANGUAGES } from "../../../utils";
// import HomeHeader from "../../HomePage/HomeHeader";
// import DoctorSpecialtyExtraInfor from "./DoctorSpecialtyExtraInfor";
// import DoctorSpecialtySchedule from "./DoctorSpecialtySchedule";
// import ProfileDoctorSpecialty from "./ProfileDoctorSpecialty";
import "./Item.scss";
// import * as actions from "../../../store/actions";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    // await this.props.fetchExtraSpecialtyInforClinic(this.props.match.params.specialtyId)
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {}
  render() {
    // const item = {
    //   id: 1,
    //   image:
    //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
    //   name: "Nike Air Zoom Pegasus 36",
    //   description:
    //     "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
    //   price: 108.97,
    //   color: "#e1e7ed",
    // };
    let { item } = this.props;
    console.log(item);
    return (
      <div className="item">
        <span hidden={!item.addedToCart} className="tick">
          <i class="fas fa-check"></i>
        </span>
        <div className="item-content">
          <div className="item-left">
            <div
              className="item-image"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundColor: `${item.color}`,
              }}
            ></div>
            <span className="price">${item.price}</span>
          </div>
          <div className="extra-infor">
            <div className="item-name">{item.name}</div>
            <div className="item-description">{item.description}</div>
            <div className="btn-group-accountant">
              <div className="item-price"></div>
              <button
                hidden={item.addedToCart}
                onClick={() => this.props.addToCart(item)}
                className=" btn btn-edit-user-item"
              >
                <i class="fas fa-cart-plus"> Add to cart</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
