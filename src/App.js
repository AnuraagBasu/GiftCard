import React, { Component } from 'react';

import Card from './components/Card';
import LabelledCheckbox from './components/LabelledCheckbox';

class App extends Component {
  state = {
    hasGiftCard: false,
    typedCardNumber: '',
    typedControlCode: ''
  };

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
    console.log('heheheheheh');
  };

  render() {
    const { hasGiftCard, typedCardNumber, typedControlCode } = this.state;

    return (
      <React.Fragment>
        <Card className="giftCardContainer">
          <div className="title">Gift Cards</div>
          <LabelledCheckbox
            checked={hasGiftCard}
            onChange={this.toggleCheckbox}
          />
          <div className="info">
            Please enter the 19-digit number and code from your gift card below.
          </div>
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
          <button className="stylisedBtn" onClick={this.applyGiftCard}>
            Apply
          </button>
        </Card>
      </React.Fragment>
    );
  }
}

export default App;
