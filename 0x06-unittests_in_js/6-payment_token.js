function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
    reject();
  });
}

module.exports = getPaymentTokenFromAPI;
