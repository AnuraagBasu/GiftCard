import fetch from 'isomorphic-fetch';

export const VERIFICATION_IN_PROGRESS = 'VERIFICATION_IN_PROGRESS';
export const RESET_VERIFICATION_IN_PROGRESS = 'RESET_VERIFICATION_IN_PROGRESS';
export const SET_VERIFIED_DETAILS = 'SET_VERIFIED_DETAILS';
export const SET_ERROR = 'SET_ERROR';

const verificationInProgress = () => ({
  type: VERIFICATION_IN_PROGRESS
});
const resetVerificationInProgress = () => ({
  type: RESET_VERIFICATION_IN_PROGRESS
});
const setVerifiedDetails = details => ({
  type: SET_VERIFIED_DETAILS,
  details
});
const setError = error => ({
  type: SET_ERROR,
  error
});

const handleError = err => dispatch => {
  dispatch(setError('Something went wrong.'));
  dispatch(resetVerificationInProgress());
};

export const verifyGiftCard = (cardNumber, controlCode) => dispatch => {
  dispatch(verificationInProgress());
  dispatch(setError(null));
  fetch(
    `https://mock-server-ab.herokuapp.com/cards?number=${cardNumber}&code=${controlCode}`
  )
    .then(response => response.json())
    .then(response => {
      if (response && response[0]) {
        dispatch(setVerifiedDetails(response[0]));
      } else {
        dispatch(setError('The gift card is invalid.'));
      }
      dispatch(resetVerificationInProgress());
    })
    .catch(err => {
      dispatch(handleError());
    });
};
