export const formatNumber = (number, currencyIso, locale = 'en-NL') => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyIso.toUpperCase()
  });

  return formatter.format(number);
};

/* validation checks (assumptions) 
	- should contain only numbers
	- should be 19-digit long
*/
export const isCardNumberValid = number => {
  return !isNaN(parseInt(number, 10)) && number.length === 19;
};

/*

/* validation checks (assumptions)
	- should contain only numbers
	- should be 3-digit long
*/
export const isControlCodeValid = code => {
  return !isNaN(parseInt(code, 10)) && code.length === 3;
};
