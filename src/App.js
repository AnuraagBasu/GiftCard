import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './components/Card';
import LabelledCheckbox from './components/LabelledCheckbox';
import VerifiedCardDetails from './components/VerifiedCardDetails';

import { verifyGiftCard } from './actions';
import { isCardNumberValid, isControlCodeValid } from './utils';

class App extends Component {
  state = {
    hasGiftCard: false,
    typedCardNumber: '',
    typedControlCode: ''
  };

  componentWillReceiveProps(newProps) {
    if (
      this.props.isVerificationInProgress &&
      !newProps.isVerificationInProgress
    ) {
      this.setState({
        typedCardNumber: '',
        typedControlCode: ''
      });
    }
  }

  toggleCheckbox = () => {
    this.setState({ hasGiftCard: !this.state.hasGiftCard });
  };
  onCardNumberChange = e => {
    this.setState({ typedCardNumber: e.target.value });
  };
  onControlCodeChange = e => {
    this.setState({ typedControlCode: e.target.value });
  };
  applyGiftCard = () => {
    const { typedCardNumber, typedControlCode } = this.state;
    if (
      isCardNumberValid(typedCardNumber) &&
      isControlCodeValid(typedControlCode)
    ) {
      this.props.dispatch(verifyGiftCard(typedCardNumber, typedControlCode));
    }
  };

  render() {
    const { hasGiftCard, typedCardNumber, typedControlCode } = this.state;
    const { isVerificationInProgress, verifiedCardDetails, error } = this.props;

    return (
      <React.Fragment>
        <Card className="giftCardContainer">
          <div className="title">Gift Cards</div>
          <LabelledCheckbox
            checked={hasGiftCard}
            onChange={this.toggleCheckbox}
          />
          {hasGiftCard ? (
            <React.Fragment>
              <div className="info">
                Please enter the 19-digit number and code from your gift card
                below.
              </div>

              {verifiedCardDetails ? (
                <VerifiedCardDetails
                  number={verifiedCardDetails.number}
                  discount={verifiedCardDetails.discount}
                />
              ) : null}

              <div className="inputContainer">
                <input
                  className="stylisedInput cardNumber"
                  value={typedCardNumber}
                  placeholder="Gift Card Number"
                  onChange={this.onCardNumberChange}
                />
                <input
                  className="stylisedInput controlCode"
                  value={typedControlCode}
                  placeholder="Control Code"
                  onChange={this.onControlCodeChange}
                />
              </div>

              {error ? <div className="error">{error}</div> : null}

              <button
                className={`stylisedBtn ${
                  isVerificationInProgress ? 'loading' : ''
                }`}
                onClick={this.applyGiftCard}
              >
                Apply
              </button>
            </React.Fragment>
          ) : null}
        </Card>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    verifiedCardDetails: state.verifiedDetails,
    isVerificationInProgress: state.isVerificationInProgress,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return { dispatch };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
