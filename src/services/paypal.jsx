const { default: addPurchase } = require("./addPurchase");
const { sendEmailToMe } = require("./sendEmail");

const onApprove = (data, actions) => {
  sendEmailToMe();

  addPurchase();

  // TODO: Show him a window to check his mail for his payment

  // TODO: fuck you
  console.log("$$$$$$$ We Are Rich BABEEEY $$$$$$$");
  console.log(data);
  actions.braintree.tokenizePayment(data).then((payload) => {
    // call server-side endpoint to finish the sale
    console.log(payload);
  });
};

const onCancel = () => {};

const onError = () => {};

module.exports = { onApprove, onCancel, onError };
