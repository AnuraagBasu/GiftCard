import fetch from 'isomorphic-fetch';

export const VERIFICATION_IN_PROGRESS = 'VERIFICATION_IN_PROGRESS';
export const SET_VERIFIED_DETAILS = 'SET_VERIFIED_DETAILS';
export const SET_ERROR = 'SET_ERROR';

const verificationInProgress = () => ({
  type: VERIFICATION_IN_PROGRESS
});
const setVerifiedDetails = details => ({
  type: SET_VERIFIED_DETAILS,
  details
});
const setError = error => ({
  type: SET_ERROR,
  error
});

export const verifyGiftCard = (cardNumber, controlCode) => dispatch => {
  dispatch(verificationInProgress());
  dispatch(setError(null));
  fetch(`http://localhost:4000/cards?number=${cardNumber}&code=${controlCode}`)
    .then(response => response.json())
    .then(response => {
      if (response && response[0]) {
        dispatch(setVerifiedDetails(response[0]));
      } else {
        dispatch(setError('The gift card is invalid.'));
      }
    })
    .catch(err => {
      dispatch(setError('Something went wrong.'));
    });
};
