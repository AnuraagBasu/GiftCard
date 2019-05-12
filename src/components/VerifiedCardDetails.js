import React from 'react';
import PropTypes from 'prop-types';

import { formatNumber } from '../utils';

const VerifiedCardDetails = ({ number, discount: { iso, value } }) => {
  return (
    <div id="verifiedDetailsContainer">
      <div className="left">
        <div className="title">Gift Card</div>
        <div className="number">{number}</div>
      </div>
      <div className="right">
        <div className="discount">{`-${formatNumber(value, iso)}`}</div>
      </div>
    </div>
  );
};

VerifiedCardDetails.propTypes = {
  number: PropTypes.number,
  discount: PropTypes.object
};

export default VerifiedCardDetails;
