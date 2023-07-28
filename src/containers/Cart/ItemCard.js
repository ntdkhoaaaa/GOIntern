import React, { Component } from "react";
import { connect } from "react-redux";
// import { FormattedMessage } from "react-intl";
// import { LANGUAGES } from "../../../utils";
// import HomeHeader from "../../HomePage/HomeHeader";
// import DoctorSpecialtyExtraInfor from "./DoctorSpecialtyExtraInfor";
// import DoctorSpecialtySchedule from "./DoctorSpecialtySchedule";
// import ProfileDoctorSpecialty from "./ProfileDoctorSpecialty";
import "./ItemCard.scss";
// import * as actions from "../../../store/actions";

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    // await this.props.fetchExtraSpecialtyInforClinic(this.props.match.params.specialtyId)
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {
    let { ItemCard } = this.props;
    return (
      <div className="ItemCard">
        <div className="ItemCard-content">
          <div className="ItemCard-left">
            <div
              className="ItemCard-image"
              style={{
                backgroundImage: `url(${ItemCard.image})`,
                backgroundColor: `${ItemCard.color}`,
              }}
            ></div>
          </div>
          <div className="extra-infor">
            <div className="ItemCard-name">{ItemCard.name}</div>
            <span className="price">${ItemCard.price}</span>

            <div className="btn-group-accountant">
              <div className="quantity-btn-group">
                <button
                  className="quantity-btn"
                  onClick={() => this.props.decreaseQuantity(ItemCard.id)}
                >
                  <span>-</span>
                </button>
                <span> {ItemCard.quantity}</span>

                <button
                  className="quantity-btn"
                  onClick={() => this.props.increaseQuantity(ItemCard.id)}
                >
                  +
                </button>
              </div>

              <button
                onClick={() => this.props.removeFromCart(ItemCard.id)}
                className=" btn btn-edit-user-ItemCard"
              >
                <i class="fas fa-trash"></i>
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
