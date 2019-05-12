import React from 'react';

const LabelledCheckbox = ({ checked, className = '', onChange }) => (
  <div className="checkboxContainer">
    <input
      className={className}
      type="checkbox"
      id="giftCardPresent"
      name="giftCardPresent"
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor="giftCardPresent">Do you have a gift card?</label>
  </div>
);

export default LabelledCheckbox;
